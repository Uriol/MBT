$(function(){
	


	// Display site when header 1st
	// img is loaded
	var s2_header_image = new Image();

	// Detect browser size in order to load image
	var w = window.innerWidth;

	if (w >= 1200) {
		s2_header_image.src = '../img/header/sm2_header.png';
	} else {
		s2_header_image.src = '../img/header/sm2_header_small.png';
	}

	s2_header_image.onload = function(){
		$('.loading_gif_container').hide();
		$('.onload').fadeOut(1000);
	}

	


})