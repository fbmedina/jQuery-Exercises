$(document).ready(function() {
	$("span").hide();

	$("td").mouseenter(function() {
		$(this).children().show();
	}).mouseleave(function() {
		$(this).children().hide();
	});
});