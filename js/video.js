var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume = video.volume * 100
	document.querySelector("#volume").innerHTML = volume + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.05;
	console.log("New speed is "+ video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 < video.duration) {
		console.log("Original location: " + video.currentTime);
		video.currentTime += 15;
		console.log("New location: " + video.currentTime);
	}
	else {
		console.log("Original location: " + video.currentTime);
		console.log("Going back to the beginning");
		video.currentTime = 0
		console.log("New location: " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.volume = 1.0
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
		console.log("Video was unmuted");
	}
	else {
		video.volume = 0.0
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("Video was muted");
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});


document.querySelector("#slider").addEventListener("change", function() {
    video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log(video.volume);
});

