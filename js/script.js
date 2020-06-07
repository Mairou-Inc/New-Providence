$(document).ready(function() {
	$('.menu_burger').click(function(event) {
		$('.menu_burger,.left-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.left-menu_close').click(function(event) {
		$('.left-menu').toggleClass('active');
	});

	$('.plan_button_left').click(function(event) {
		$('.plan_button_switch').addClass('left');
			$('.plan_button_switch').removeClass('right');
		$('.plan_button_left').addClass('active');
			$('.plan_button_right').removeClass('active');
		$('.starter_card').addClass('active');
			$('.pro_card').removeClass('active');					
					
	});
	$('.plan_button_right').click(function(event) {
		$('.plan_button_switch').addClass('right');
			$('.plan_button_switch').removeClass('left');
		$('.plan_button_right').addClass('active');
			$('.plan_button_left').removeClass('active');
		$('.pro_card').addClass('active');
			$('.starter_card').removeClass('active');					

	});
	$('.header_button a').click(function(event) {
		$('.header_player').toggleClass('active');
		$('.header_close').addClass('active');
	});
	$('.header_close').click(function(event) {
		$('.header_player').removeClass('active');
		$('.header_close').removeClass('active');
		player.stop();
	});






});