// конструктор
var Stars = function () {
    var st = this;
    this.title = "star" 

    st.ElementSettings = {
        lineUserLength: ko.observable(500),  // введено пользователем
        lineLength: ko.observable(0),      // применяется
        linewidth: ko.observable(2),
        lineColor: ko.observable("#000000"),
        dotsCount: ko.observable(10),
        step: 5,
        rotationAngle: ko.observable(0)
    }
    st.AddButton = function (container) {
        var html = '<div class="panel panel-default">' +
                        '<div class="panel-heading">' +
                            '<h4 class="panel-title">' +
                                '<a data-toggle="collapse" data-parent="#collapse-group" href="#star">Звезда</a>' +
                            '</h4>' +
                        '</div>' +
                       ' <div id="star" class="panel-collapse collapse">' +
                            '<div class="panel-body">' +
                                '<div data-bind="template: { name: \'SettingsTemplate\', data: star }"></div>' +
                            '</div></div></div>'
        return $(container).append(html);

    }

   st.startDrawing = function (e) {
        Settings.x = e.pageX - canvas.offsetLeft;
        Settings.y = e.pageY - canvas.offsetTop;
        
        this.changeLineLenghtToDots();


        this.Rotation(this.inRad(Settings.star.rotationAngle()));

        this.makeBaseLines(Settings.x, Settings.y, Settings.star.lineLength());
        this.makeJoinLines(Settings.x, Settings.y, Settings.star.dotsCount(), Settings.star.lineLength());

        this.Rotation(-this.inRad(Settings.star.rotationAngle()));
        //console.log(Settings);  
    }

   st.changeLineLenghtToDots = function () {
       var length = parseInt(Settings.star.lineUserLength());
       var dots = parseInt(Settings.star.dotsCount());

       Settings.star.step = Math.round(length / dots);

       var realLenght = Settings.star.step * dots
       Settings.star.lineLength(realLenght);
   }
   st.makeJoinLines = function (x, y, dotsCount, lenght) {
       var centre, end = 0;
       for (i = 0; i < dotsCount; i++) {
           end = i * Settings.star.step;
           centre = (i + 1) * Settings.star.step;
            
           this.DrawLines(x, y + centre, x + lenght - end, y); // право - низ
           this.DrawLines(x, y - centre, x + lenght - end, y); // право - верх
           this.DrawLines(x, y + centre, x - lenght + end, y); // лево - низ
           this.DrawLines(x, y - centre, x - lenght + end, y); // лево - верх
       }
   }

   st.makeBaseLines = function (x, y, length) {
       this.DrawLines(x, y, x + length, y);
       this.DrawLines(x, y, x - length, y);
       this.DrawLines(x, y, x, y + length);
       this.DrawLines(x, y, x, y - length);
   }
    return st;
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

