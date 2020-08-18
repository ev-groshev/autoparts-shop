$(function () {
	$('.menu-categories__link').on('click', function () {
		$('.active').removeClass('active');
		$(this).addClass('active');
	});

	$('.banner-section__slider').slick({
		prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrows-left.svg" alt=""></button>',
		nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrows-right.svg" alt=""></button>',
		dots: true,
	});

	$('.tab').on('click', function (e) {
		e.preventDefault();

		$($(this).siblings()).removeClass('tab--active');
		$($(this).parent().siblings().find('div')).removeClass('tabs__content--active');

		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs__content--active');
	});

	$('.product__favorite').on('click', function () {
		$(this).toggleClass('product__favorite--active');
	});

	$('.products-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="products-slider__btn products-slider__btnprev"><img src="images/arrows-right.svg" alt=""></button>',
		nextArrow: '<button class="products-slider__btn products-slider__btnnext"><img src="images/arrows-left.svg" alt=""></button>',
	});
});