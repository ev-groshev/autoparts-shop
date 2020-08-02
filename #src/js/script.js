$(function () {
	$('.menu-categories__link').on('click', function () {
		$('.active').removeClass('active');
		$(this).addClass('active');
	});

});