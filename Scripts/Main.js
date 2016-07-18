var canvas;
var context;

var arr = [];

/*обект для хранения данных для нокаута*/
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
    var star = new Stars("star", "Звезда")
    arr.push(star);
    star.AddButton("#collapse-group");
    Settings.star = star.ElementSettings;

    var circle = new Circle('circle', 'Круг');
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

    // цветовой круг для цвезды
    $("#colorCircle").farbtastic(function (color) {
        $("#color").val(color).css("background-color", color);
        $("#color").change();
    });

    /* цветовой круг для круга */
    $("#colorCircleForCircle").farbtastic(function (color) {
        $("#colorCirclePicker").val(color).css("background-color", color);
        $("#colorCirclePicker").change();
    })
});

// не помню зачем
/*$(function () {
    $("collapse-group #settingsPanel").each(function (i, elem) {
        var inpt = $(elem).find("#color");
        $(elem).find("#colorCircle").farbtastic(function (color) {
            inpt.val(color).css("background-color", color);
            inpt.change();
        })
    })
})*/

// установка размера рабочей области
function redraw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setDefaultColor();
}

// очистка рабочей области и сброс всех трансформов
function clearContext() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    setDefaultColor();    
}

// задаем начальный цвет фона
function setDefaultColor() {
    $("#cnv").css("background-color", "black");
}

function saveImage() {
    // Находим элемент <img>
  /*  var imageCopy = document.getElementById("savedImageCopy");

    // Отображаем данные холста в элементе <img>
    imageCopy.src = canvas.toDataURL();

    // Показываем элемент <div>, делая изображение видимым
    // делая изображение видимым
    var imageContainer = document.getElementById("savedCopyContainer");
    imageContainer.style.display = "block";*/
}