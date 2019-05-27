// меню в адаптиве
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



	/*настраиваем слайдер блок services*/
	$('.services__container').slick({
		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
		  responsive: [
    
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});

	//делаем прокрутку load more 

	$(function(){
		$("div").slice(0, 12).show();
		$("#loadMore").on('click', function(e){
			e.preventDefault();
			$("div:hidden").slice(0, 12).slideDown();
		})
	})



//particles effect

	$('.item').mousemove(function(e) {

		var width = $(this).width() / 2;
		var height = $(this).height() / 2;
	
		var amountMovedX1 = ((width - e.pageX) * -3 / 26);
		var amountMovedY1 = ((height - e.pageY) * -3 / 26);
	
		var amountMovedX2 = ((width - e.pageX) / 60);
		var amountMovedY2 = ((height - e.pageY) / 50);
	
		var amountMovedX3 = ((width - e.pageX) / 20);
		var amountMovedY3 = ((height - e.pageY) / 40);
	
		var amountMovedX4 = ((width - e.pageX) * -2  / 10);
		var amountMovedY4 = ((height - e.pageY) * -2  / 30);
	
		$('.shapes1').css('marginLeft', amountMovedX1);
		$('.shapes1').css('marginTop', amountMovedY1);
	
		$('.shapes2').css('marginLeft', amountMovedX2);
		$('.shapes2').css('marginTop', amountMovedY2);
	
		$('.shapes3').css('marginLeft', amountMovedX3);
		$('.shapes3').css('marginTop', amountMovedY3);
	
		$('.shapes4').css('marginLeft', amountMovedX4);
		$('.shapes4').css('marginTop', amountMovedY4);
	
		$('.shapes5').css('marginLeft', amountMovedX1);
		$('.shapes5').css('marginTop', amountMovedY1);
	
		$('.shapes8').css('marginLeft', amountMovedX2);
		$('.shapes8').css('marginTop', amountMovedY2);
	
		$('.shapes7').css('marginLeft', amountMovedX3);
		$('.shapes7').css('marginTop', amountMovedY3);
	
	})