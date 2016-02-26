$(document).ready(function() {
	$(document).keydown(function(e){
	    if (e.which === 37) {
			$("#rocket").finish().animate({
				left: "-=50"
			});
	    } else if (e.which === 38) {
			$("#rocket").finish().animate({
	            top: "-=50"
	        });
	    } else if (e.which === 39) {
	        $("#rocket").finish().animate({
	            left: "+=50"
	        });
	    } else if (e.which === 40) {
	        $("#rocket").finish().animate({
	            top: "+=50"
	        });
	    }
	}); 
});