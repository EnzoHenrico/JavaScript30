window.addEventListener("keydown", playAudio);

function playAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);

  if (!audio) return;

  animation(key);
  audio.currentTime = 0;
  audio.play();
}

function animation(key) {
  const keys = document.querySelectorAll(".key");
  key.classList.add("keyPlaying");
  keys.forEach((key) => key.addEventListener("transitionend", removeAnimation));
}

function removeAnimation(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("keyPlaying");
}

// Handle mouse clicks on keys
function handleClick(e) {
  const { key } = e.target.parentElement.dataset;
  const audio = document.querySelector(`audio[data-key="${key}"]`);

  animation(e.target.parentElement);
  audio.currentTime = 0;
  audio.play();
}
