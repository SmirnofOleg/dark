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

	// эффект с иконками на слайде

	$('.slider-text').mousemove(function(e) {

		var width = $(this).width() / 2;
		var height = $(this).height() / 2;
	
		var amountMovedX1 = ((width - e.pageX) * -1 / 16);
		var amountMovedY1 = ((height - e.pageY) * -1 / 16);
	
		var amountMovedX2 = ((width - e.pageX) / 40);
		var amountMovedY2 = ((height - e.pageY) / 30);
	
		var amountMovedX3 = ((width - e.pageX) / 20);
		var amountMovedY3 = ((height - e.pageY) / 20);
	
		var amountMovedX4 = ((width - e.pageX) * -1  / 10);
		var amountMovedY4 = ((height - e.pageY) * -1  / 20);
	
		$('.shapes1').css('marginLeft', amountMovedX1);
		$('.shapes1').css('marginTop', amountMovedY1);
	
		$('.shapes2').css('marginLeft', amountMovedX2);
		$('.shapes2').css('marginTop', amountMovedY2);
	
		$('.shapes3').css('marginLeft', amountMovedX3);
		$('.shapes3').css('marginTop', amountMovedY3);
	
		$('.shapes4').css('marginLeft', amountMovedX4);
		$('.shapes4').css('marginTop', amountMovedY4);

	})