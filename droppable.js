$(document).ready(function () {
    $('#drag_list li').draggable();
    $('#div2_drop').droppable({
        drop: function (event, ui) {
            alert('Element dropped')
        }

    });
});