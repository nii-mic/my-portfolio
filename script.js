var canvas = document.getElementById("topcanvas");
var tcContext = canvas.getContext("2d");

canvas.width = 2000;
canvas.height = 500;

function rect(x, y) {
    var xx = x * 100;
    var yy = y * 100;
    tcContext.fillStyle = "rgba(137, 218, 89, 0.2)"
    tcContext.fillRect(xx, yy, 100, 100);
}
for (let i = 0; i < canvas.height / 100; i++) {
    for (let j = 0; j < canvas.width / 100; j++) {
        if (i % 2 === 1 && j % 2 === 1) {
            rect(j, i);
            rect(j - 1, i - 1);
        }
    }
}