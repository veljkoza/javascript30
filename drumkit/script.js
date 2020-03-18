const keys = document.querySelectorAll(".key");
console.log(keys);

function playSound(e) {
  console.log(e);

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0; //Play sound every time key is pressed.
  audio.play();

  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;

  this.classList.remove("playing");
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

addEventListener("keydown", playSound);
