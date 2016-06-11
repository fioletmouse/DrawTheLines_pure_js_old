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
    canvas.oncontextmenu = startDrawingCir;
}
var ElementSettings = {
    lineUserLength: ko.observable(100),  // введено пользователем
    lineLength: ko.observable(0),      // применяется
    linewidth: ko.observable(1),
    lineColor: ko.observable("#000000"),
    dotsCount: ko.observable(10),
    step: 5,
    rotationAngle: ko.observable(0)
}
var Settings = {
    x: 0,
    y: 0,
    lineUserLength: ko.observable(100),  // введено пользователем
    lineLength: ko.observable(0),      // применяется
    linewidth: ko.observable(1),
    lineColor: ko.observable("#000000"),
    dotsCount: ko.observable(10),
    step: 5,
    rotationAngle: ko.observable(0)
}
ko.applyBindings(Settings);


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

    $('[data-toggle="circlePopover"]').popover({
        //Установление направления отображения popover
        placement: 'bottom',
        html: true,
        trigger: "click",
        content: $("#settingsPanel")
    }).on("click", function () {
        $("#settingsPanel").show();
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

function Rabbit(name) {
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

// Give the init function the jQuery prototype for later instantiation
//Animal.__proto__ = Object.create(Animal.fn);

var animal = new Animal('Зверь');
var animal1 = new Rabbit('Rabbit');
alert(animal.speed); // 0, свойство взято из прототипа
animal.run(5); // Зверь бежит, скорость 5
animal.run(5); // Зверь бежит, скорость 10
animal.stop(); // Зверь стоит*/