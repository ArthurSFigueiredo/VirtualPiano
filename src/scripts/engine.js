const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("/src/sounds/a.wav");

const playSound = (key) => {
    audio.src = `src/sounds/${key}.wav`
    audio.play();

};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playSound(key.dataset.key));
});

