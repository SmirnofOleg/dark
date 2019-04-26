$(document).ready(function(){
	var link = $('.menu-link');
	var link_active = $('.menu-link_actve');
	var menu = $('.nav-menu');
	var nav_link = $('.menu a')//убираем меню по клику на ссылку

	link.click(function(){
		link.toggleClass('menu-link_active');
		menu.toggleClass('nav-menu_active');
	});
	
	nav_link.click(function(){
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});
});

// временное меню
// $(document).ready(function() {
// 	$(".burger").on("click", function(e){
// 		e.preventDefault();
// 		$(".nav-menu").toggleClass("nav-active");
// 	})
// });

// наведение на search 
	var search = document.getElementById('search');
	var btn = document.getElementById('search_submit');
	btn.onmouseover = menuShow;
	// btn.onmouseout = menuHide;

	function menuShow(){
	search.style.width = '90px';
	}

	// function menuHide(){
	// 	search.style.width = '0px';
	// }


	/*настраиваем слайдер*/
	$('.slider-block').slick();
