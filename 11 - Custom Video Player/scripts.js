const playButton = document.querySelector(`.player__button[name="play"]`);
const skip = document.querySelectorAll(`.player__button[name="skip"]`);
const video = document.querySelector('.player video');
const progressBar = document.querySelector('.progress__filled');
const volumeInput = document.querySelector(`.player__slider[name="volume"]`);
const playbackRate = document.querySelector(`.player__slider[name="playbackRate"]`);

let paused = true;

function handlePlayButton(e) {
  if(paused){
    video.play();
  } else {
    video.pause();
  }
  paused = !paused;
} 

function currentTime(e) {
  const currentTime = ((e.target.currentTime * 100) / e.target.duration).toFixed(1);  
  progressBar.style['flex-basis'] = `${currentTime}%`;
}

function handleSkip(e) {
  let { skip } = e.target.dataset;
  video.currentTime += parseInt(skip);
}


video.addEventListener('timeupdate', currentTime);
volumeInput.addEventListener('mousemove', (e) => video.volume = e.target.value);
playbackRate.addEventListener('mousemove', (e) => video.playbackRate = e.target.value);
playButton.addEventListener('click', handlePlayButton);
skip.forEach(button => button.addEventListener('click', handleSkip));
