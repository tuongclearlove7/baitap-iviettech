let list_imgs = [
    '../image/big-banner-viettech.png',
    '../image/big-banner-iviettech-2.png',

];

let i = 0;
let Timeleft=2000;

function change_background() {
    document.slide.src = list_imgs[i];
    if (i < list_imgs.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout("change_background()", Timeleft);
}

let FuncCount = (CountImg) => {
    for (let idx = 0; idx < list_imgs.length; idx++) {
        CountImg++
    }
    return CountImg;
}

console.log("Count image : " + FuncCount(i));
window.onload = change_background;
