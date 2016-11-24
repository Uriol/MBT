$(function(){


	// Init owl carousel
	$('#owl_carousel_header').owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true
	})

	// Arrows
	var header_owl = $('#owl_carousel_header').data('owlCarousel');
	// Next
	$('.header_arrows_container .arrow_container.right').on('click', function(){
		header_owl.next();
	})
	// Prev
	$('.header_arrows_container .arrow_container.left').on('click', function(){
		header_owl.prev();
	})

	// Update all owl carousels on resize
	window.addEventListener("resize", onResize);
	function onResize(){
		 $(".owl-carousel").each(function(){
		    $(this).data('owlCarousel').updateVars();
		 });
	}


})