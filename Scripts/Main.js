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
    if($('#collapse-group div[aria-expanded=true]')[0] != null)
    {
        arr.forEach(function(item, i, arr) {
            if (item.title == $('#collapse-group div[aria-expanded=true]').attr("id"))
            {
                item.startDrawing(e);
            }
        })
    }
}

$(document).ready(function () {

    var star = new Stars()
    arr.push(star);
    star.AddButton("#collapse-group");
    Settings.star = star.ElementSettings;

    var circle = new Circle();
    arr.push(circle);
    circle.AddButton("#collapse-group");
    Settings.circle = circle.ElementSettings;

    ko.applyBindings(Settings);


    $('#opener').on('click', function () {
        var panel = $('#slide-panel');
        if (panel.hasClass("visible")) {
            panel.removeClass('visible').animate({ 'margin-left': '-250px' });
        } else {
            panel.addClass('visible').animate({ 'margin-left': '0px' });
        }
        return false;
    });

    $('#colorpicker').farbtastic(function (color) {
        $("#cnv").css("background-color", color);
    });

    // Цвет фона
    /*$('[data-toggle="colorPopover"]').popover({
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
        });*/

    // Настройки элемента
  /*  $('[data-toggle="settingsPopover"]').popover({
        //Установление направления отображения popover
        placement: 'bottom',
        html: true,
        trigger: "click",
        content: $("#settingsPanel")
    }).on("click", function () {
        $("#settingsPanel").show();
    });*/

    $('#colorCircle').farbtastic(function (color) {
        $("#color").val(color).css("background-color", color);
        $("#color").change();
    });

   /* $('[data-toggle="circlePopover"]').popover({
        //Установление направления отображения popover
        placement: 'bottom',
        html: true,
        trigger: "click",
        content: $("#settingsPanel")
    }).on("click", function () {
        $("#settingsPanel").show();
    });*/
});

function redraw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
function clearContext() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// конструктор
/*function Animal ( name )
{
        this.name = name;
        this.speed = 0;
}
Animal.prototype.stop =  function () {
    this.speed = 0;
    alert(this.name + ' стоит');
};
Animal.prototype.run = function (speed) {
    this.speed += speed;
    alert(this.name + ' бежит, скорость ' + this.speed);
};
*/
/*function Rabbit(name) {
    this.name = name;
    this.speed = 0;
}
// задаём наследование
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.jump = function () {
    this.speed++;
    alert(this.name + ' прыгает');
};
Rabbit.prototype.stop = function () {
    this.speed = -1;
    alert(this.name + ' прыгает');
};

var animal = new Animal('Зверь');
var animal1 = new Rabbit('Rabbit');
alert(animal.speed); // 0, свойство взято из прототипа
animal.run(5); // Зверь бежит, скорость 5
*/