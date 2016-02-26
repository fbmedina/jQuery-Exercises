$(document).ready(function() {
    var fadeElem = $(".fadeitem");

    fadeElem.css({
    	background: "url(images/vancouver1.jpg)",
    	backgroundSize: "cover",
    	backgroundPosition: "center center"
    })
    .fadeTo(300, 0.3)
    .on ({
    	mouseenter: (function() {
    		$(this).fadeTo(300, 1);
    	}),
    	mouseleave: (function() {
    		$(this).fadeTo(300, 0.5);
    	})
    });

});