
$(function(){

	var owl_products = $('#products_owl');
	// Init owl carousel s2
	owl_products.owlCarousel({
		scrollPerPage: true,
		navigation : false,
		pagination: false,
		slideSpeed : 300,
		paginationSpeed : 400,
		items : 3,
		itemsDesktop : [1000,3], //5 items between 1000px and 901px
      	itemsDesktopSmall : [900,2], // betweem 900px and 601px
      	itemsTablet: [600,2],
      	itemsMobile : [540,1],
      	textholder: true,
      	booleanValue: false
	});
	var owl_products = $('#products_owl').data('owlCarousel');

	// Arrows 
	$('.arrow_container_products.left').on('click', function(){
		owl_products.prev();
	});

	$('.arrow_container_products.right').on('click', function(){
		owl_products.next();
	});
	
})