$(document).ready(function() {
    $(".character").css({
    	display: "none"
    });

    $(".name").hover(function() {
    	$(".character").toggle(300);
    });
});