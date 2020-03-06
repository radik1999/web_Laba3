$(document).ready(function () {
    $('#form1').submit(function (event) {
        event.preventDefault();//Щоб не перезагружалась сторінка при натисканні submit
        $('#form1').append("<br><input type='text'>");
        $("#inp").css('background-color', randomColor(colors));
    });
});

var colors = ['blue', 'red', 'black', 'green', 'yellow'];

function randomColor(colors) {
    let index = Math.round(Math.random()*(colors.length-1));
    return colors[index]
}
