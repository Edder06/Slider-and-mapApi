$(document).ready(function () {
    // puede configurar esto, siempre que no sea mayor que la longitud de las diapositivas
    // si cambias show cambia el numero de diapositivas
    var show = 4;
    var w = $('#slider').width() / show;
    var l = $('.slide').length;
    console.log(w);
    
    $('.slide').width(w);
    $('#slide-container').width(w * l)
    
    function slider() {
        $('.slide:first-child').animate({
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({marginLeft: 0});
        });
    }
    var timer = setInterval(slider, 2000);
    
    $('#slider').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(slider, 2000);
    });
});