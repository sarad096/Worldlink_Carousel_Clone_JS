imgarr = ['https://worldlink.com.np/application/files/cache/5fe077aa001cc19e2d31c767fabe7359.jpg', 'https://worldlink.com.np/application/files/cache/46e51ce9a4429bf316d738ab7ad2b7fe.jpg', 'https://worldlink.com.np/application/files/cache/d57099c47db5a8a590f212dfb0d9dea9.jpg', 'https://worldlink.com.np/application/files/cache/39ff918def8c0065680adbd5305943bd.jpg', 'https://worldlink.com.np/application/files/cache/a7b4bf7a9a50497c66f864170c1982df.png', 'https://worldlink.com.np/application/files/cache/a7a25d1088858517ad8f1cb3a392993c.jpg', 'https://worldlink.com.np/application/files/cache/6e79758ed3285a9b9c2efc330f22af5c.jpg', 'https://worldlink.com.np/application/files/cache/b367c4473ea46cb0b02b2b0eca9c8abc.jpg', 'https://worldlink.com.np/application/files/cache/27a7a00f1d2a12adab5cb587775ccbe0.jpg', 'https://worldlink.com.np/application/files/cache/7e974806f93dfa4f23076b863d3d40ca.png'];
let default_index = 0;
let i = 0;
const img_container = document.getElementById("img-container");
const next_btn = document.querySelector("#next-btn");
const prev_btn = document.querySelector("#prev-btn");
window.addEventListener('DOMContentLoaded', (event) => {
    img_container.src = `${imgarr[default_index]}`;

});
showNextImg = () => {
    if (i < 9) {
        img_container.src = `${imgarr[i + 1]}`;
        i++;
    }
    else if (i >= 9) {
        i = 0;
        img_container.src = `${imgarr[i]}`;
    }
};
showPrevImg = () => {
    if (i > 0) {
        img_container.src = `${imgarr[i - 1]}`;
        i--;
    }
    else if (i <= 0) {
        i = 9;
        img_container.src = `${imgarr[i]}`;
    }
};
next_btn.addEventListener("click", showNextImg);
prev_btn.addEventListener("click", showPrevImg);