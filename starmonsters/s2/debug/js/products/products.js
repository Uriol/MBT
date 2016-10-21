
var $product_series = ['series_one', 'series_two'];
var actual_index_serie = 1;
var serie_on_display_products = $product_series[actual_index_serie];



$(function() {

	//display_current_serie()
	// Display current serie
	function display_current_serie(){
		var value = $('#series_selection_products').val();
		// Write current seri on selector
		$('#series_selection_products').val(serie_on_display_products);
		// Show products for selected serie
		$('.owl_container_' + serie_on_display_products).show();
	}

	var owl_series_one = $('#products_owl_s_one')
	// Init owl carousel s1
	owl_series_one.owlCarousel({
		scrollPerPage: true,
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		items : 3.5,
		itemsDesktop : [1024,3], //5 items between 1000px and 901px
      	itemsDesktopSmall : [900,2], // betweem 900px and 601px
      	// itemsTablet: [600,2],
      	itemsMobile : [540,1]
	});
	var owl_one = $('#products_owl_s_one').data('owlCarousel');



	var owl_series_two = $('#products_owl')
	// Init owl carousel s2
	owl_series_two.owlCarousel({
		scrollPerPage: true,
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		items : 3,
		itemsDesktop : [1000,3], //5 items between 1000px and 901px
      	itemsDesktopSmall : [900,2], // betweem 900px and 601px
      	itemsTablet: [600,2],
      	itemsMobile : [540,1]
	});
	var owl_two = $('#products_owl').data('owlCarousel');


	// Arrows 
	$('.arrow_container_products.left').on('click', function(){
		if (actual_index_serie == 0) {
			owl_one.prev();
		}
		else if(actual_index_serie == 1){
			owl_two.prev();
		}
	})
	$('.arrow_container_products.right').on('click', function(){
		if (actual_index_serie == 0) {
			owl_one.next();
		}
		else if(actual_index_serie == 1){
			owl_two.next();
		}
	})


	// Detect select change
	$('#series_selection_products').on('change', function(){
		// Unshow actual serie
		$('.owl_container_' + serie_on_display_products).hide();
		// Update serie index
		actual_index_serie = $('#series_selection_products option:selected').index();
		// Update selected serie
		serie_on_display_products = $product_series[actual_index_serie];
		// Show new serie
		$('.owl_container_' + serie_on_display_products).show();
	})

})