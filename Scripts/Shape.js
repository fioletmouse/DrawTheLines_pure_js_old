// конструктор
function Shape()
{
}

Shape.prototype.inRad = function (angle) {
    return angle * Math.PI / 180;
};

Shape.prototype.Rotation = function (angle) {
    context.translate(Settings.x, Settings.y);   // сместили начало координат в точки клика
    context.rotate(angle);                       // повернули все, относительно точки клика
    context.translate(-Settings.x, -Settings.y); // вернули начало координат в левый верхний угол + учет поворота, т.е. она сместилась на угол
};

Shape.prototype.DrawLines = function (fromX, fromY, toX, toY, lineWidth, lineColor) {
    context.beginPath();
    context.lineWidth = lineWidth;
    context.strokeStyle = lineColor;
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
    context.closePath();
};

Shape.prototype.DrawCircle = function (fromX, fromY, radius, lineWidth, lineColor) {
    context.beginPath();
    context.lineWidth = lineWidth;
    context.strokeStyle = lineColor;
    context.arc(fromX, fromY, radius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();
};

Shape.prototype.AddContainer = function (container, title, name, templateName ) {
    var html = '<div class="panel panel-default">' +
                       '<div class="panel-heading">' +
                           '<h4 class="panel-title">' +
                               '<a data-toggle="collapse" data-parent="#collapse-group" href="#' + title + '">' + name + '</a>' +
                           '</h4>' +
                       '</div>' +
                      ' <div id="' + title + '" class="panel-collapse collapse">' +
                           '<div class="panel-body">' +
                               '<div data-bind="template: { name: \'' + templateName + '\', data: ' + title + ' }"></div>' +
                           '</div></div></div>'
    return $(container).find(".panel-default").last().before(html);
}