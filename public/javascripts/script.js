const sun = document.querySelector('.sun');
const disableBtn = document.querySelector('.disable-btn');
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const images = document.querySelector(".images");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

let position = 2;
let suntype = true;

disableBtn.addEventListener('click', () => {
    sun.classList.toggle("disable");
    disableBtn.classList.toggle("red");
    if (suntype === true) {
        suntype = false;
        images.innerHTML = `<img src="/images/Real_Estate_(101).jpg" alt="" class="img">`;
    }
    if (suntype === false) {
        suntype = true;
        
    }
});

arrow1.addEventListener('click', () => {
    console.log(suntype)
    if (position === 2) {
        position = position - 1;
            sun.classList.remove("pos2");
            sun.classList.add("pos1");
            if (suntype === true) {
            img1.innerHTML = `<img src="/images/—Pngtree—vector house icon_4013530.png" alt="" class="img">`;
            img2.innerHTML = `<img src="/images/Real_Estate_(101).jpg" alt="" class="img">`;
            }
    }
    if (position === 3) {
        position = position - 1;
        arrow2.classList.remove('disable');
            sun.classList.remove("pos3");
            sun.classList.add("pos2");
            img2.innerHTML = `<img src="/images/—Pngtree—vector house icon_4013530.png" alt="" class="img">`;
            img3.innerHTML = `<img src="/images/Real_Estate_(101).jpg" alt="" class="img">`;
    }
    else {
        arrow1.classList.add('disable');
    }
});

arrow2.addEventListener('click', () => {
    if (position === 2) {
        position = position + 1;
            sun.classList.remove("pos2");
            sun.classList.add("pos3");
            img3.innerHTML = `<img src="/images/—Pngtree—vector house icon_4013530.png" alt="" class="img">`
            img2.innerHTML = `<img src="/images/Real_Estate_(101).jpg" alt="" class="img">`;
    }
    if (position === 1) {
        position = position + 1;
        arrow1.classList.remove('disable');
            sun.classList.remove("pos1");
            sun.classList.add("pos2");
            img1.innerHTML = `<img src="/images/Real_Estate_(101).jpg" alt="" class="img">`;
            img2.innerHTML = `<img src="/images/—Pngtree—vector house icon_4013530.png" alt="" class="img">`
    }
    else {
        arrow2.classList.add('disable');
    }
});