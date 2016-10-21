$(function(){


	// Init owl carousel
	$('#owl_carousel_header').owlCarousel_beta({
		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		items : 1,
		responsiveRefreshRate: 20,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true
	})

	// Arrows
	var header_owl = $('#owl_carousel_header');
	// Next
	$('.arrow_container_header.right').on('click', function(){
		console.log('clicked')
		header_owl.trigger('next.owl.carousel');
	})
	// Prev
	$('.arrow_container_header.left').on('click', function(){
		header_owl.trigger('prev.owl.carousel');
	})


})