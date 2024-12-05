let btn = document.querySelector('.btn');
btn.onmousedown = function () {
    btn.style.transform = "scale(0.95)";
}
btn.onmouseup = function () {
    btn.style.transform = "scale(1)";
}
btn.onclick = async function () {
    console.log("clicked");
}