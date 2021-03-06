﻿// конструктор
var Circle = function () {
    var _inst = this;
    _inst.title = "circle";

    _inst.ElementSettings = {
        radiusLength: ko.observable(100),  
        linewidth: ko.observable(1),
        lineColor: ko.observable("#000000"),
        linesCount: ko.observable(10),           // введено пользователем
        linesRealCount: ko.observable(10),
        rotationAngle: 5
    }

    _inst.AddButton = function (container) {
        var html = '<div class="panel panel-default">' +
                        '<div class="panel-heading">' +
                            '<h4 class="panel-title">' +
                                '<a data-toggle="collapse" data-parent="#collapse-group" href="#circle">Круг</a>' +
                            '</h4>' +
                        '</div>' +
                       ' <div id="circle" class="panel-collapse collapse">' +
                            '<div class="panel-body">' +
                                '<div data-bind="template: { name: \'CircleSettingsTemplate\', data: circle }"></div>' +
                            '</div></div></div>'
        return $(container).append(html);
    }

    _inst.startDrawing = function (e) {
        Settings.x = e.pageX - canvas.offsetLeft;
        Settings.y = e.pageY - canvas.offsetTop;

        var lineWidth = parseInt(Settings.circle.linewidth());
        var lineColor = Settings.circle.lineColor();

        this.changeLineLenghtToDots();
        this.DrawCircle(Settings.x, Settings.y, parseInt(Settings.circle.radiusLength()), lineWidth, lineColor)
        this.makeInnerLines(Settings.x, Settings.y, parseInt(Settings.circle.radiusLength()), parseInt(Settings.circle.rotationAngle))
    }

    _inst.changeLineLenghtToDots = function () {
        var dots = parseInt(Settings.circle.linesCount());

        var reallinesCount = Math.round(dots / 4) * 4;
        Settings.circle.linesRealCount(reallinesCount);
        Settings.circle.rotationAngle = Math.round(360 / reallinesCount);
    }

    _inst.makeInnerLines = function (x, y, radius, angle) {

        this.makeInnerRect(x, y, radius);
        for (var i = 1; i < (Settings.circle.linesRealCount()/4) ; i++) {
            this.Rotation(this.inRad(angle * i));
            this.makeInnerRect(x, y, radius);
            this.Rotation(this.inRad(-(angle * i)));
        }
    }

    _inst.makeInnerRect = function (x, y, radius) {
        this.DrawLines(x - radius, y, x, y - radius);
        this.DrawLines(x, y - radius, x + radius, y);
        this.DrawLines(x + radius, y, x, y + radius);
        this.DrawLines(x, y + radius, x - radius, y);
    }

    return _inst;
}

// задаём наследование
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.DrawLines = function (fromX, fromY, toX, toY) {
    var lineWidth = parseInt(Settings.circle.linewidth());
    var lineColor = Settings.circle.lineColor();
    Shape.prototype.DrawLines.apply(this, [fromX, fromY, toX, toY, lineWidth, lineColor]);
}