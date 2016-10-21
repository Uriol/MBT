$(function(){
	


	// Display site when header 1st
	// img is loaded
	var header_image = new Image();

	// Detect browser size in order to load image
	var w = window.innerWidth;

	if (w >= 1200) {
		header_image.src = '../img/header/s4_header.png';
	} else {
		header_image.src = '../img/header/s4_header_small.png';
	}

	header_image.onload = function(){
		$('.loading_gif_container').hide();
		$('.onload').fadeOut(1000);
	}




})