var canvas;
var context;

window.onload = function () {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    
    // !!! change it using palet
    canvas.style.backgroundColor = Settings.backColor;

    // update on any window size change.
    window.addEventListener("resize", redraw);
    redraw();

    // Подключаем требуемые для рисования события
    canvas.onclick = startDrawing;
}

function redraw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}