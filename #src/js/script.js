$(function () {
	$('.menu-categories__link').on('click', function () {
		$('.active').removeClass('active');
		$(this).addClass('active');
	});

	$('.banner-section__slider').slick({
		prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrows-left.svg" alt=""></button>',
		nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrows-right.svg" alt=""></button>',
		dots: true,
		responsive: [{
			breakpoint: 875,
			settings: {
				arrows: false,
			}
		}]
	});

	$('.tab').on('click', function (e) {
		e.preventDefault();

		$($(this).siblings()).removeClass('tab--active');
		$($(this).closest('.tabs__wrapper').siblings().find('div')).removeClass('tabs__content--active');

		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs__content--active');

		$('.product__slider').slick('setPosition');
	});

	$('.product__favorite').on('click', function () {
		$(this).toggleClass('product__favorite--active');
	});

	$('.products-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="products-slider__btn products-slider__btnprev"><img src="images/arrows-right.svg" alt=""></button>',
		nextArrow: '<button class="products-slider__btn products-slider__btnnext"><img src="images/arrows-left.svg" alt=""></button>',
		responsive: [{
				breakpoint: 1300,
				settings: {
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 1125,
				settings: {
					slidesToShow: 3,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 860,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});

	$('.filter-style').styler();
	$('.filter-item__drop').on('click', function () {
		$(this).toggleClass('filter-item__drop--active');
		$(this).next().slideToggle(200);
	});

	$(".js-range-slider").ionRangeSlider({
		grid: false,
		type: "double",
	});


	$('.catalog__filter-btngrid').on('click', function () {
		$(this).addClass('catalog__filter-button--active');
		$('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
		$('.product').removeClass('product--list');
	});

	$('.catalog__filter-btnline').on('click', function () {
		$(this).addClass('catalog__filter-button--active');
		$('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
		$('.product').addClass('product--list');
	});

	$('.rateYo').rateYo({
		ratedFill: "#FF7931",
		normalFill: "#E2E2E2",
		starWidth: "23px",
		spacing: "7px",
		fullStar: true
	});
	$('.menu__btn').on('click', function () {
		$('.mobile-menu__gamburger').toggleClass('mobile-menu__gamburger--active');
	});
	$('.footer__top-drop').on('click', function () {
		$(this).next().slideToggle();
		$(this).toggleClass('footer__top-drop--active');
	});
	$('.catalog-filter__btn').on('click', function () {
		$(".left-filters").slideToggle();
	});
});