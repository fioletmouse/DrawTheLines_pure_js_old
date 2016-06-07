var Settings = {
    x: 0,
    y:0,
    lineUserLength: ko.observable(100),  // введено пользователем
    lineLength: ko.observable(0),      // применяется
    linewidth: ko.observable(1),
    lineColor: ko.observable("#000000"),
    dotsCount: ko.observable(10),
    step: 5
}
ko.applyBindings(Settings);

function changeLineLenghtToDots()
{
    var length = parseInt(Settings.lineUserLength());
    var dots = parseInt(Settings.dotsCount());

    Settings.step = Math.round(length / dots);

    var realLenght = Settings.step * dots
    Settings.lineLength(realLenght);
}

function startDrawing(e) {
    Settings.x = e.pageX - canvas.offsetLeft;
    Settings.y = e.pageY - canvas.offsetTop;

    changeLineLenghtToDots();
    makeBaseLines(Settings.x, Settings.y, Settings.lineLength());
   // makeJoinLines(Settings.x, Settings.y, Settings.dotsCount(), Settings.lineLength());
    //console.log(Settings);
}

function makeJoinLines(x, y, dotsCount, lenght)
{
    var centre, end = 0;
    for (i = 0; i < dotsCount; i++)
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
   // DrawLines(x, y, x - length, y);
   // DrawLines(x, y, x, y + length);
   // DrawLines(x, y, x, y - length);
}

function DrawLines(fromX, fromY, toX, toY) {
    context.beginPath();
    context.lineWidth = parseInt(Settings.linewidth());
    context.strokeStyle = Settings.lineColor();
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
    context.closePath();
    //var red = 90 * Math.PI / 180;
    //context.translate(fromX, fromY);
    //context.rotate(red);

    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
        // Clear the canvas
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        // Move registration point to the center of the canvas
        //context.translate(canvasWidth / 2, canvasWidth / 2);

        // Rotate 1 degree
        //context.rotate(Math.PI / 180);

        // Move registration point back to the top left corner of canvas
        //context.translate(-canvasWidth / 2, -canvasWidth / 2);

        context.fillStyle = "red";
        context.fillRect(canvasWidth / 4, canvasWidth / 4, canvasWidth / 2, canvasHeight / 4);
        context.fillStyle = "blue";
        context.fillRect(canvasWidth / 4, canvasWidth / 2, canvasWidth / 2, canvasHeight / 4);

}
