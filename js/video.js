var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = this.document.querySelector("#player1");
	video.load();
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video = document.querySelector("#player1");
	video.play();
	// necessary because without it then until user interacts with the slider it will not show the volume %
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + '%';
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video = document.querySelector("#player1");
	video.pause();
 });

 document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video = document.querySelector("#player1");
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
 });

 document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video = document.querySelector("#player1");
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
 });

 document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video = document.querySelector('#player1');
	if (video.currentTime + 10 > video.duration)
		{
			video.currentTime = 0;
		}
	else{
		video.currentTime += 10;
		}
	console.log("Video current time is " + video.currentTime);
});

 document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector('video').classList.add("oldSchool");
	console.log("Old School");
});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector('video').classList.remove("oldSchool");
	console.log("Original");
});

document.querySelector("#mute").addEventListener("click", function() {
	video = document.querySelector('#player1');
	if (video.muted) 
	{
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
		console.log("Unmute");
	}
	else
	{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Mute");
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	video = document.querySelector('#player1');
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + '%';
	video.volume = document.querySelector("#slider").value / 100;
	console.log("The current value is " + video.volume);
});