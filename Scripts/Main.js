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
$(document).ready(function() {


   /* $("#showColorPicker").click(function () {
        if ($("#colorPanel").css("display") == "none") {
            $("#colorPanel").show();
        }
        else {
            $("#colorPanel").hide();
        }
    });*/
   /* $('#colorpicker').farbtastic('#color');
    $('[data-toggle="popover"]').popover({
        //Установление направления отображения popover
        html: true,
        placement: 'bottom',
        trigger: "click",
        content: function () {
            return $('#colorPanel');
        }
    })*//*.on("click", function () {
            $("#colorPanel").find("#colorpicker").farbtastic("#color");
        })*/

    /*$("#color").each(function (i, input) {
        $this = $(input);
        return*/ /*$("#color")*/$('[data-toggle="popover"]').popover({
            title: "Colorpicker <i class='icon-remove pull-right'></i>",
            trigger: "focus",
            placement: "bottom",
            html: true,
            content: "<div id='colorpicker1'>" + "<div class='color-picker'></div>"+ "</div>"
        }).on("click", function () {
            $this = $(this);
            $target = $("#colorpicker1").find(".color-picker");
            $target.farbtastic(function (color) {
                //$this.val(color).css("background-color", color);
                $("#cnv").css("background-color", color);
            });
            //var picker = $.farbtastic($target);
            //$new.setColor("#e297d7");
       // });
    });


});
function redraw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}