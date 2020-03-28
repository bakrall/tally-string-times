const videos = [...document.querySelectorAll('.videos li')];

const totalSeconds = videos.map(video => { 
	const [mins, secs] = video.dataset.time.split(':').map(parseFloat);
	return mins * 60 + secs;
})
.reduce((total, timeInSecs) => total + timeInSecs);

function getFinalTime() {
	const hours = Math.floor(totalSeconds / 3600);
	let secondsLeft = totalSeconds % 3600;
	const minutes = Math.floor(secondsLeft / 60);
	secondsLeft = secondsLeft % 60;

	return `${hours}:${minutes}:${secondsLeft}`;
}

getFinalTime();