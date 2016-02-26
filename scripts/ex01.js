$(document).ready(function() {
    $(".fadeitem").css({
    	background: "url(images/vancouver1.jpg)",
    	backgroundSize: "cover",
    	backgroundPosition: "center center"
    })
    .fadeTo(100, 0.3)
    .on ({
    	mouseenter: (function() {
    		$(this).fadeTo(100, 1);
    	}),
    	mouseleave: (function() {
    		$(this).fadeTo(100, 0.5);
    	})
    });

});