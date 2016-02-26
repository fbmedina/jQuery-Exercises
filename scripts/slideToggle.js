$(document).ready(function() {
	$(".box").css({
    	display: "none"
    });

	$("#b1").click(function() {
    	$(".one").slideToggle(300);
    });

    $("#b2").click(function() {
    	$(".two").slideToggle(300);
    });

    $("#b3").click(function() {
    	$(".three").slideToggle(300);
    });

    $("#b4").click(function() {
    	$(".four").slideToggle(300);
    });
});