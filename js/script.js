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