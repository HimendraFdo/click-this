const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainScreen = document.getElementById("main-screen");
const yesScreen = document.getElementById("yes-screen");

yesBtn.addEventListener("click", () => {
    mainScreen.classList.add("hidden");
    yesScreen.classList.remove("hidden");
});

noBtn.addEventListener("mouseover", () => {
    // Only move button on desktop screens (larger than 768px)
    if (window.innerWidth > 768) {
        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;
        const x = Math.random() * (window.innerWidth - buttonWidth);
        const y = Math.random() * (window.innerHeight - buttonHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }
});