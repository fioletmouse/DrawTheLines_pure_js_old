// конструктор
var Stars = function (title, name) {
    var _inst = this;

    // изменить инициализацию, сделать 1 методом
    _inst.title = title;
    _inst.name = name;

    _inst.ElementSettings = {
        lineUserLength: ko.observable(30),  // введено пользователем
        lineLength: ko.observable(0),      // применяется
        linewidth: ko.observable(1),
        lineColor: ko.observable("#000000"),
        linesCount: ko.observable(6),
        step: 5,
        rotationAngle: ko.observable(0)
    }

    _inst.AddButton = function (container) {
        this.AddContainer(container, _inst.title, _inst.name, 'SettingsTemplate');
    }

    _inst.startDrawing = function (e) {
        Settings.x = e.pageX - canvas.offsetLeft;
        Settings.y = e.pageY - canvas.offsetTop;
        
        this.changeLineLenghtToDots();

        this.Rotation(this.inRad(Settings.star.rotationAngle()));

        this.makeBaseLines(Settings.x, Settings.y, Settings.star.lineLength());
        this.makeJoinLines(Settings.x, Settings.y, Settings.star.linesCount(), Settings.star.lineLength());

        this.Rotation(-this.inRad(Settings.star.rotationAngle()));
        //console.log(Settings);  
    }

    _inst.changeLineLenghtToDots = function () {
        var length = parseInt(Settings.star.lineUserLength());
        var dots = parseInt(Settings.star.linesCount());

        Settings.star.step = Math.round(length / dots);

        var realLenght = Settings.star.step * dots
        Settings.star.lineLength(realLenght);
    }

    _inst.makeJoinLines = function (x, y, linesCount, lenght) {
        var centre, end = 0;
        for (i = 0; i < linesCount; i++) {
            end = i * Settings.star.step;
            centre = (i + 1) * Settings.star.step;
            
            this.DrawLines(x, y + centre, x + lenght - end, y); // право - низ
            this.DrawLines(x, y - centre, x + lenght - end, y); // право - верх
            this.DrawLines(x, y + centre, x - lenght + end, y); // лево - низ
            this.DrawLines(x, y - centre, x - lenght + end, y); // лево - верх
        }
    }

    _inst.makeBaseLines = function (x, y, length) {
        this.DrawLines(x, y, x + length, y);
        this.DrawLines(x, y, x - length, y);
        this.DrawLines(x, y, x, y + length);
        this.DrawLines(x, y, x, y - length);
    }

    return _inst;
}

// задаём наследование
Stars.prototype = Object.create(Shape.prototype);
Stars.prototype.constructor = Stars;

Stars.prototype.DrawLines = function (fromX, fromY, toX, toY)
{
    var lineWidth =  parseInt(Settings.star.linewidth());
    var lineColor = Settings.star.lineColor();
    Shape.prototype.DrawLines.apply(this, [fromX, fromY, toX, toY, lineWidth, lineColor]);
}

