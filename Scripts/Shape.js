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