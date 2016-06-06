var canvas;
var context;

window.onload = function () {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");

    // update on any window size change.
    window.addEventListener("resize", redraw);
    redraw();

    // Подключаем требуемые для рисования события
    canvas.onclick = startDrawing;
}
$(document).ready(function() {
    $('[data-toggle="colorPopover"]').popover({
            title: "Colorpicker <i class='icon-remove pull-right'></i>",
            trigger: "focus",
            placement: "bottom",
            html: true,
            content: "<div id='colorpicker'>" + "<div class='color-picker'></div>"+ "</div>"
        }).on("click", function () {
            $this = $(this);
            $target = $("#colorpicker").find(".color-picker");
            $target.farbtastic(function (color) {
                //$this.val(color).css("background-color", color);
                $("#cnv").css("background-color", color);
            });
            //var picker = $.farbtastic($target);
            //$new.setColor("#e297d7");
       // });
        });
    $('[data-toggle="settingsPopover"]').popover({
        //Установление направления отображения popover
        placement: 'bottom',
        html: true,
        trigger: "click",
        content: $("#tmp")
    }).on("click", function () {
        $("#tmp").show();
    });

    $('#colorCircle').farbtastic(function (color) {
        $("#color").val(color).css("background-color", color);
        $("#color").change();
    }
        );
});

function redraw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}