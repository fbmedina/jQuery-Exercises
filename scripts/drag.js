$(document).ready(function() {
	$(".dragger").html("<img src='images/rocket.png'>");

	$(".dragger img").css({
		margin: "0 auto",
		display: "block"
	});

	$(window).mousemove(function(e){
	    $(".dragger").offset({
	        left: e.pageX,
	        top: e.pageY
    	});
	});

});