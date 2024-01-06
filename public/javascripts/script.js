const sun = document.querySelector('.sun');
const disableBtn = document.querySelector('.disable-btn');

disableBtn.addEventListener('click', () => {
    sun.classList.toggle("disable");
    disableBtn.classList.toggle("red");
})