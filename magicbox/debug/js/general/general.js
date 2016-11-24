$(function(){
	


	// Display site when header 1st
	// img is loaded
	var header_image = new Image();

	// Detect browser size in order to load image
	var w = window.innerWidth;

	header_image.src = '../img/header/tin_header.png';

	header_image.onload = function(){
		$('.loading_gif_container').hide();
		$('.onload').fadeOut(1000);
	}




})