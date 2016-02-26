$(document).ready(function() {
	$(".character").css({
		display: "none"
	});

    $(".name").hover(function() {
    	var data_person = $(this).attr("data-person");
     	$("" + data_person + "").toggle(300);
    });
});