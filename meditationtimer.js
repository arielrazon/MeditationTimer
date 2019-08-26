var meditationTime = 60;

var meditate = function () {
    setInterval(function () {
        if (meditationTime >= 60) {
            meditationTime--;
            $("#meditationButton").html("<h3>Breathe.....</h3>" + '<div id="meditationTimer"><h5>' + meditationTime + "</div>")
        } else if (meditationTime = 0) {
            meditationTime = 60
        }
    }, 1000)

}

$(document).on("click", "#meditationButton", function () {


    meditate();
})