$(document).ready(function() {
	$(".burger").on("click", function(e){
		e.preventDefault();
		$(".nav-menu").toggleClass("nav-active");
	})
});