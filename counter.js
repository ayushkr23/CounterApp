const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const counterLabel = document.getElementById("counterLabel");
let count = 0;

function animateCounter() {
    counterLabel.classList.add("animate");

    setTimeout(() => {
        counterLabel.classList.remove("animate");
    }, 200);
}

increaseBtn.onclick = function () {
    count++;
    counterLabel.textContent = count;
    animateCounter();
};

decreaseBtn.onclick = function () {
    count--;
    counterLabel.textContent = count;
    animateCounter();
};

resetBtn.onclick = function () {
    count = 0;
    counterLabel.textContent = count;
    animateCounter();
};
