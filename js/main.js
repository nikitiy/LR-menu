$(document).ready(function() {
	$("#menu").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
    });
});

var sections = ['#menu', '#cocktails', '#wine', '#alcohol', '#soft'];

function change(item){
    sections.forEach(function(i) {
        if (i != item) {
            $(i).css('display', 'none');
        }
      });
    $(item).css('display', 'block');
    $(item).slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
    });
}