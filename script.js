const para = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const originalText = para.innerText;
let timer = null;

para.addEventListener("mouseenter", () => {
    clearInterval(timer);

    timer = setInterval(() => {
        const scrambled = originalText.split('').map(() => {
            const rl = characters[Math.floor(Math.random() * characters.length)];
            return rl;
        }).join('');

        para.innerText = scrambled;
    }, 100);
});


para.addEventListener("mouseleave", () => {
    clearInterval(timer);
    para.innerText = originalText;
});