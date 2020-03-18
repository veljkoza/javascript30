window.addEventListener("keydown", function(e) {
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");

  audio.currentTime = 0; //rewinds audio clip to start
  audio.play();
});

function removeTransition(e){
    console.log(e);
}

//keys.forEach(key => key.addEventListener("transitionend", removeTransition));

const keys = Array.from(document.querySelectorAll(".key"));
console.log(keys);

keys.forEach(key => key.addEventListener("transitionend",removeTransition));