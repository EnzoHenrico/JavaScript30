window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  audio.play();
});

function handleClick(e) {
  console.log(e.target.parentElement.dataset);
  const { key } = e.target.parentElement.dataset;
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  audio.play();
}
