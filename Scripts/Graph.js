var Settings = {
    x: 0,
    y:0,
    backColor: "blueviolet",
    lineUserLength: 50,
    lineLength:50,
    linewidth: 1,
    lineColor: "blue",
    dotsCount: 10,
    step: 5
}

function changeLineLenghtToDots()
{
    var length = parseInt(document.getElementById("length").value);
    var dots = parseInt(document.getElementById("dotsCount").value);

    Settings.step = Math.floor(length / dots);
    Settings.lineLength = Settings.step * dots;
    Settings.dotsCount = dots;
    Settings.lineUserLength = length;
}

function startDrawing(e) {
    Settings.x = e.pageX - canvas.offsetLeft;
    Settings.y = e.pageY - canvas.offsetTop;

    changeLineLenghtToDots();
    makeBaseLines(Settings.x, Settings.y, Settings.lineLength);
    console.log(Settings);
}
function makeJoinLines()
{

}
function makeBaseLines(x, y, length) {

    DrawLines(x, y, x + length, y);
    DrawLines(x, y, x - length, y);
    DrawLines(x, y, x, y + length);
    DrawLines(x, y, x, y - length);
}

function DrawLines(fromX, fromY, toX, toY) {
    context.beginPath();
    context.lineWidth = Settings.linewidth;
    context.strokeStyle = Settings.lineColor;
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
    context.closePath();
}
