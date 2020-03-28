const videos = [...document.querySelectorAll('.videos li')];

const times = videos.map(video => Number(video.dataset.time.replace(':', '.')) );

const totalTime = times.reduce( (total, time) => total + time );

function getFinalTime() {
	let minutes = Math.floor(totalTime % 60);
	let hours = Math.floor(totalTime / 60);
	let seconds = Number(totalTime.toString().split('.')[1]);

	return `${hours}.${minutes}.${+seconds}`;
}

getFinalTime();