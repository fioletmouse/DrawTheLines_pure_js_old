var canvas;
var context;

window.onload = function () {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");

    // update on any window size change.
    //window.addEventListener("resize", redraw);
    redraw();

    // Подключаем требуемые для рисования события
    canvas.onclick = startDrawing;
}
$(document).ready(function () {
    // Цвет фона
    $('[data-toggle="colorPopover"]').popover({
            title: "Colorpicker <i class='icon-remove pull-right'></i>",
            trigger: "click",
            placement: "bottom",
            html: true,
            content: "<div id='colorpicker'><div class='color-picker'></div></div>"
        }).on("click", function () {
            $this = $(this);
            $target = $("#colorpicker").find(".color-picker");
            $target.farbtastic(function (color) {
                $("#cnv").css("background-color", color);
            });
        });

    // Настройки элемента
    $('[data-toggle="settingsPopover"]').popover({
        //Установление направления отображения popover
        placement: 'bottom',
        html: true,
        trigger: "click",
        content: $("#settingsPanel")
    }).on("click", function () {
        $("#settingsPanel").show();
    });

    $('#colorCircle').farbtastic(function (color) {
        $("#color").val(color).css("background-color", color);
        $("#color").change();
    });
});

function redraw() {
    canvas.width = 600;// window.innerWidth;
    canvas.height = 600; //window.innerHeight;
}
function clearContext() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
}