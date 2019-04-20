// временное меню
$(document).ready(function() {
	$(".burger").on("click", function(e){
		e.preventDefault();
		$(".nav-menu").toggleClass("nav-active");
	})
});

// наведение на search 

	var search = document.getElementById('search');
	var btn = document.getElementById('search_submit');

	// btn.onmouseover = function(){
	// 	this.style.background = 'yellow';
	// }

	// btn.onmouseout = function(){
	// 	this.style.background = 'transparent';
	// }
btn.onmouseover = menuShow;
// btn.onmouseout = menuHide;

function menuShow(){
	search.style.width = '90px';
}
function menuHide(){
	search.style.width = '0px';
}




