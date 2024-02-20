const keys = document.querySelectorAll('.key');

function keyBtn(i) {
  const key = document.querySelector(`.key[data-key="${i.keyCode}"]`);

  if (!key) return;

  key.classList.add("highlight");

  setTimeout(() => {
    key.classList.remove("highlight");
  }, 100);
}

window.addEventListener("keydown", keyBtn);
