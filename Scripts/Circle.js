// конструктор
var Circle = function () {
    var circle = this;
    this.title = "circle";

    circle.ElementSettings = {
        lineUserLength: ko.observable(100),  // введено пользователем
        lineLength: ko.observable(0),      // применяется
        linewidth: ko.observable(1),
        lineColor: ko.observable("#000000"),
        dotsCount: ko.observable(10),
        step: 5,
        rotationAngle: ko.observable(0)
    }

    circle.AddButton = function (container) {
        var html = '<div class="panel panel-default">' +
                        '<div class="panel-heading">' +
                            '<h4 class="panel-title">' +
                                '<a data-toggle="collapse" data-parent="#collapse-group" href="#el3">Круг</a>' +
                            '</h4>' +
                        '</div>' +
                       ' <div id="el3" class="panel-collapse collapse">' +
                            '<div class="panel-body">' +
                                '<div data-bind="template: { name: \'SettingsTemplate\', data: circle }"></div>' +
                            '</div></div></div>'
        return $(container).append(html);
    }

    circle.MakePopover = function () {
        var tmp = $("#settingsPanel").clone();
        tmp.attr("data-bind", "with: circle");
        //$("#settingsPanel").attr("data-bind", "with: circle");
        return $('[data-toggle="circlePopover"]').popover({
            //Установление направления отображения popover
            placement: 'bottom',
            html: true,
            trigger: "click",
            content: tmp //$("#settingsPanel")
        }).on("click", function () {
            tmp.show();
            //$("#settingsPanel").show();
        });
    }

    circle.startDrawing = function (e) {
       /* Settings.x = e.pageX - canvas.offsetLeft;
        Settings.y = e.pageY - canvas.offsetTop;

        this.changeLineLenghtToDots();


        this.Rotation(this.inRad(Settings.rotationAngle()));

        this.makeBaseLines(Settings.x, Settings.y, Settings.lineLength());
        this.makeJoinLines(Settings.x, Settings.y, Settings.dotsCount(), Settings.lineLength());

        this.Rotation(-this.inRad(Settings.rotationAngle()));*/
        //console.log(Settings);  
    }

    circle.changeLineLenghtToDots = function () {
        var length = parseInt(Settings.lineUserLength());
        var dots = parseInt(Settings.dotsCount());

        Settings.step = Math.round(length / dots);

        var realLenght = Settings.step * dots
        Settings.lineLength(realLenght);
    }

    circle.makeJoinLines = function (x, y, dotsCount, lenght) {
        var centre, end = 0;
        for (i = 0; i < dotsCount; i++) {
            end = i * Settings.step;
            centre = (i + 1) * Settings.step;

            this.DrawLines(x, y + centre, x + lenght - end, y); // право - низ
            this.DrawLines(x, y - centre, x + lenght - end, y); // право - верх
            this.DrawLines(x, y + centre, x - lenght + end, y); // лево - низ
            this.DrawLines(x, y - centre, x - lenght + end, y); // лево - верх
        }
    }

    circle.makeBaseLines = function (x, y, length) {
        this.DrawLines(x, y, x + length, y);
        this.DrawLines(x, y, x - length, y);
        this.DrawLines(x, y, x, y + length);
        this.DrawLines(x, y, x, y - length);
    }

    return circle;
}

// задаём наследование
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;




function startDrawingCir(e) {
    
    Settings.x = e.pageX - canvas.offsetLeft;
    Settings.y = e.pageY - canvas.offsetTop;

    makeBaseLinesC(Settings.x, Settings.y, 50);
    makeRect(Settings.x, Settings.y, 50);
    Rotation(inRad(10));
    makeRect(Settings.x, Settings.y, 50);
    Rotation(inRad(-10));
    Rotation(inRad(20));
    makeRect(Settings.x, Settings.y, 50);
    Rotation(inRad(-20));
    Rotation(inRad(30));
    makeRect(Settings.x, Settings.y, 50);
    Rotation(inRad(-30));
    Rotation(inRad(40));
    makeRect(Settings.x, Settings.y, 50);
    Rotation(inRad(-40));
    Rotation(inRad(50));
    makeRect(Settings.x, Settings.y, 50);
    Rotation(inRad(-50));
    Rotation(inRad(60));
    makeRect(Settings.x, Settings.y, 50);
    Rotation(inRad(-60));
    Rotation(inRad(70));
    makeRect(Settings.x, Settings.y, 50);
    Rotation(inRad(-70));
    Rotation(inRad(80));
    makeRect(Settings.x, Settings.y, 50);
    Rotation(inRad(-80));
    Rotation(inRad(90));
    makeRect(Settings.x, Settings.y, 50);
    Rotation(inRad(-90));
    /*changeLineLenghtToDots();


    Rotation(inRad(Settings.rotationAngle()));

    makeBaseLines(Settings.x, Settings.y, Settings.lineLength());
    makeJoinLines(Settings.x, Settings.y, Settings.dotsCount(), Settings.lineLength());

    Rotation(-inRad(Settings.rotationAngle()));
    //console.log(Settings); */ 
}

function makeBaseLinesC(x, y, radius) {

    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();
}

function makeRect(x, y, radius)
{
    DrawLines(x - radius, y, x, y - radius);
    DrawLines(x, y - radius, x + radius, y);
    DrawLines(x + radius, y, x, y + radius);
    DrawLines(x, y + radius, x - radius, y);
}