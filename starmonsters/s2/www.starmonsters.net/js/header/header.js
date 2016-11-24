$(function(){

	// Init header owl
	$('#header_owl').owlCarousel_beta({
		nav : false,
		dots: true,
		slideSpeed : 300,
		paginationSpeed : 400,
		autoWidth: false,
		items: 1,
		margin: 0,
		responsiveRefreshRate: 20,
		loop: true,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true
	})

	$('.arrow_container_header.right').on('click', function(){
		$('#header_owl').trigger('next.owl.carousel');
	})

	$('.arrow_container_header.left').on('click', function(){
		$('#header_owl').trigger('prev.owl.carousel');
	})
})