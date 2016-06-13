var canvas;
var context;
//var star;
//var circle;
var arr = [];

var Settings = {
    x: 0,
    y: 0
}

window.onload = function () {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");

    // update on any window size change.
    //window.addEventListener("resize", redraw);
    redraw();

    // Подключаем требуемые для рисования события
    canvas.onclick = StartEvent;
}

function StartEvent(e)
{
    if ($('#collapse-group div[aria-expanded=true]')[0] != null) {
        arr.forEach(function (item, i, arr) {
            if (item.title == $('#collapse-group div[aria-expanded=true]').attr("id")) {
                item.startDrawing(e);
                return;
            }
        })
    }
    else {
        alert("Выберите тип элемента для отрисовка")
    }
}

$(document).ready(function () {

    /*незаконченный вариант инициализация объектов. !!! Переделать!*/
    var star = new Stars()
    arr.push(star);
    star.AddButton("#collapse-group");
    Settings.star = star.ElementSettings;

    var circle = new Circle();
    arr.push(circle);
    circle.AddButton("#collapse-group");
    Settings.circle = circle.ElementSettings;

    ko.applyBindings(Settings);

    /*строим слайдер*/
    $('#opener').on('click', function () {
        var panel = $('#slide-panel');
        if (panel.hasClass("visible")) {
            panel.removeClass('visible').animate({ 'margin-left': '-250px' });
        } else {
            panel.addClass('visible').animate({ 'margin-left': '0px' });
        }
        return false;
    });

    /*color-picker для фона*/
    $('#colorpicker').farbtastic(function (color) {
        $("#cnv").css("background-color", color);
    });

    $("#colorCircle").farbtastic(function (color) {
        $("#color").val(color).css("background-color", color);
        $("#color").change();
    });

    $("#colorCircleForCircle").farbtastic(function (color) {
        $("#colorCirecle").val(color).css("background-color", color);
        $("#colorCirecle").change();
    })
});

$(function () {
    $("collapse-group #settingsPanel").each(function (i, elem) {
        var inpt = $(elem).find("#color");
        $(elem).find("#colorCircle").farbtastic(function (color) {
            inpt.val(color).css("background-color", color);
            inpt.change();
        })
    })
})
function redraw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
function clearContext() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
}