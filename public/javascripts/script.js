const sun = document.querySelector('.sun');
const disableBtn = document.querySelector('.disable-btn');
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");

let position = 2;

disableBtn.addEventListener('click', () => {
    sun.classList.toggle("disable");
    disableBtn.classList.toggle("red");
});

arrow1.addEventListener('click', () => {
    if (position === 2) {
        position = position - 1;
            sun.classList.remove("pos2");
            sun.classList.remove("pos3");
            sun.classList.add("pos1");
    }
    if (position === 3) {
        position = position - 1;
            sun.classList.remove("pos1");
            sun.classList.remove("pos3");
            sun.classList.add("pos2");
    }
});

arrow2.addEventListener('click', () => {
    if (position === 2) {
        position = position + 1;
            sun.classList.remove("pos2");
            sun.classList.remove("pos1");
            sun.classList.add("pos3");
    }
    if (position === 1) {
        position = position + 1;
            sun.classList.remove("pos1");
            sun.classList.remove("pos3");
            sun.classList.add("pos2");
    }
});