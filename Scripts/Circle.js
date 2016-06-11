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