// конструктор
var Stars = function () {
    var st = this;

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
        return $(container).append('<button type="button" class="btn btn-primary" data-toggle="starPopover" title="Настройки звезды" onclick="GetEvent(star)">Звезда</button>');
    }
    st.MakePopover = function ()
    {
        var tmp = $("#settingsPanel").clone();
        tmp.attr("data-bind", "with: star");
        return $('[data-toggle="starPopover"]').popover({
            //Установление направления отображения popover
            placement: 'bottom',
            html: true,
            trigger: "click",
            content: tmp // $("#settingsPanel")
        }).on("click", function () {

            //$("#settingsPanel").show();
            tmp.show();
        });
    }
   st.startDrawing = function (e) {
        Settings.x = e.pageX - canvas.offsetLeft;
        Settings.y = e.pageY - canvas.offsetTop;
        
        console.log(Settings.star.lineUserLength());
        this.changeLineLenghtToDots();


        this.Rotation(this.inRad(Settings.rotationAngle()));

        this.makeBaseLines(Settings.x, Settings.y, Settings.lineLength());
        this.makeJoinLines(Settings.x, Settings.y, Settings.dotsCount(), Settings.lineLength());

        this.Rotation(-this.inRad(Settings.rotationAngle()));
        //console.log(Settings);  
    }

   st.changeLineLenghtToDots = function () {
       var length = parseInt(Settings.lineUserLength());
       var dots = parseInt(Settings.dotsCount());

       Settings.step = Math.round(length / dots);

       var realLenght = Settings.step * dots
       Settings.lineLength(realLenght);
   }
   st.makeJoinLines = function (x, y, dotsCount, lenght) {
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


