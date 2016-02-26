$(document).ready(function() {
   $(".panel").css({
    	display: "none"
    });

   $(".one").css({
    	display: "block"
    });

   $("#p1").click(function() {
    	$(".one").toggle(300);
    });

   $("#p2").click(function() {
    	$(".two").slideToggle(300);
    });

   $("#p3").click(function() {
    	$(".three").fadeToggle(300);
    });

   $("#p4").click(function() {
    	$(".four").toggle(300);
    });
});