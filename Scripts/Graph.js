

function changeLineLenghtToDots()
{
    var length = parseInt(Settings.lineUserLength());
    var dots = parseInt(Settings.linesCount());

    Settings.step = Math.round(length / dots);

    var realLenght = Settings.step * dots
    Settings.lineLength(realLenght);
}

function inRad(angle)
{
    return angle * Math.PI / 180;
}
function Rotation(angle)
{
    context.translate(Settings.x, Settings.y); // сместили начало координат в точки клика
    context.rotate(angle);                       // повернули все, относительно точки клика
    context.translate(-Settings.x, -Settings.y); // вернули начало координат в левый верхний угол + учет поворота, т.е. она сместилась на угол
}

function startDrawing(e) {
    Settings.x = e.pageX - canvas.offsetLeft;
    Settings.y = e.pageY - canvas.offsetTop;

    changeLineLenghtToDots();


    Rotation(inRad(Settings.rotationAngle()));

    makeBaseLines(Settings.x, Settings.y, Settings.lineLength());
    makeJoinLines(Settings.x, Settings.y, Settings.linesCount(), Settings.lineLength());

    Rotation(-inRad(Settings.rotationAngle()));
    //console.log(Settings);  
}

function makeJoinLines(x, y, linesCount, lenght)
{
    var centre, end = 0;
    for (i = 0; i < linesCount; i++)
    {
        end = i * Settings.step;
        centre = (i + 1) * Settings.step;
        
        DrawLines(x, y + centre, x + lenght - end, y); // право - низ
        DrawLines(x, y - centre, x + lenght - end, y); // право - верх
        DrawLines(x, y + centre, x - lenght + end, y); // лево - низ
        DrawLines(x, y - centre, x - lenght + end, y); // лево - верх
    }
}

function makeBaseLines(x, y, length) {
    DrawLines(x, y, x + length, y);
    DrawLines(x, y, x - length, y);
    DrawLines(x, y, x, y + length);
    DrawLines(x, y, x, y - length);
}

function DrawLines(fromX, fromY, toX, toY) {
    context.beginPath();
    context.lineWidth = parseInt(Settings.linewidth());
    context.strokeStyle = Settings.lineColor();
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
    context.closePath();
}
