<<<<<<< HEAD
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainScreen = document.getElementById("main-screen");
const yesScreen = document.getElementById("yes-screen");

yesBtn.addEventListener("click", () => {
    mainScreen.classList.add("hidden");
    yesScreen.classList.remove("hidden");
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
=======
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainScreen = document.getElementById("main-screen");
const yesScreen = document.getElementById("yes-screen");

yesBtn.addEventListener("click", () => {
    mainScreen.classList.add("hidden");
    yesScreen.classList.remove("hidden");
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
>>>>>>> f7d5403e95a0b80653619d37b22f5e90ab388a08
});