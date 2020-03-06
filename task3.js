$(document).ready(function () {
    $('#at1').hide();
    $('#at2').show(3000);
    $('#switcher').click(function () {
        $('#at1').toggle(3000);
        $('#at2').toggle(3000);
    });
});