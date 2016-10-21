
var $product_series = ['series_one', 'series_two', 'series_three', 'series_four', 'special'];
var actual_index_serie = 3;
var serie_on_display_products = $product_series[actual_index_serie];
// s1,s2,s3,s4,special
var series_colors = ['rgb(157,41,56)', 'rgb(248, 165, 49)', 'rgb(0,102,47)', 'rgb(113,45,127)', 'rgb(157,41,56)'];



$(function() {

	var owl_products = $('#products_owl');
	// Init owl carousel s2
	owl_products.owlCarousel({
		scrollPerPage: true,
		navigation : true,
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



	display_current_serie();
	var item;
	// Display current serie
	function display_current_serie(){
		var value = $('#series_selection_products').val();
		// Write current seri on selector
		$('#series_selection_products').val(serie_on_display_products);
		// Update Title
		$('.section_title_container.products img').attr('src', '../img/products/titles/ES/' + $product_series[actual_index_serie] + '.png');
		// Add items
		// Loop through all items
		for(var i = 0; i < $items_series[actual_index_serie].length; i++){
			item = $items_series[actual_index_serie][i];
			owl_products.addItem(item);
		}
	}

	// Arrows 
	$('.arrow_container_products.left').on('click', function(){
		owl_products.prev();
	});

	$('.arrow_container_products.right').on('click', function(){
		owl_products.next();
	});


	var prev_serie_items;
	//  Detect select change
	$('#series_selection_products').on('change', function(e){
		// Stop auto scroll
		e.preventDefault();


		prev_serie_items = $items_series[actual_index_serie].length;
		console.log(prev_serie_items)

		// Unshow actual serie
		// Remove all items
		for(var i = 0; i < $items_series[actual_index_serie].length; i++){
			owl_products.removeItem();
		}
		// Update serie index
		actual_index_serie = $('#series_selection_products option:selected').index()
		// Update Title
		$('.section_title_container.products img').attr('src', '../img/products/titles/ES/' + $product_series[actual_index_serie] + '.png');
		// Show new series items
		for(var i = 0; i < $items_series[actual_index_serie].length; i++){
			item = $items_series[actual_index_serie][i];
			owl_products.addItem(item);
		}

		// Remove prev items
		// for (var i=0; i < prev_serie_items; i++){
		// 	owl_products.removeItem(0);
		// }

	})

	// console.log($items_series[0].length)

});


// var $items_series_one = [["<div class='item'><img src='../img/products/s1/one_pack.png'><div class='filet'></div><div class='product_description'><h1>PACKET</h1><p>1 Zomling + Checklist</p></div></div>"], 
// 							["<div class='item'><img src='../img/products/s1/tower_pack.png'><div class='filet'></div><div class='product_description'><h1>TORRE</h1><p>1 Torre + 1 Zomling + Checklist</p></div></div>"], 
// 							["<div class='item'><img src='../img/products/s1/house_pack.png'><div class='filet'></div><div class='product_description'><h1>CASA</h1><p>1 Casa + 2 Zomlings + Checklist</p></div></div>"], 
// 							["<div class='item'><img src='../img/products/s1/blister_house.png'><div class='filet'></div><div class='product_description'><h1>Blister 4</h1><p>4 Zomlings + 3 Torres + 1 Casa</p></div></div>"],
// 							["<div class='item'><img src='../img/products/s1/blister_mansion.png'><div class='filet'></div><div class='product_description'><h1>BLISTER 7</h1><p>7 Zomlings + 4 Torres + 1 Mansión</p></div></div>"]];

var $items_series_one = [["<div class='item'><div class='item_image' id='s1_1'></div><div class='filet'></div><div class='product_description'><h1>PACKET</h1><p>1 Zomling + Checklist</p></div></div>"], 
							["<div class='item'><div class='item_image' id='s1_2'></div><div class='filet'></div><div class='product_description'><h1>TORRE</h1><p>1 Torre + 1 Zomling + Checklist</p></div></div>"], 
							["<div class='item'><div class='item_image' id='s1_3'></div><div class='filet'></div><div class='product_description'><h1>CASA</h1><p>1 Casa + 2 Zomlings + Checklist</p></div></div>"], 
							["<div class='item'><div class='item_image' id='s1_4'></div><div class='filet'></div><div class='product_description'><h1>Blister 4</h1><p>4 Zomlings + 3 Torres + 1 Casa</p></div></div>"],
							["<div class='item'><div class='item_image' id='s1_5'></div><div class='filet'></div><div class='product_description'><h1>BLISTER 7</h1><p>7 Zomlings + 4 Torres + 1 Mansión</p></div></div>"]];



// var $items_series_two = [["<div class='item'><img src='../img/products/s2/one_pack.png'><div class='filet'></div><div class='product_description'><h1>PACKET</h1><p>1 Zomling + Checklist</p></div></div>"], 
// 							["<div class='item'><img src='../img/products/s2/tower_pack.png'><div class='filet'></div><div class='product_description'><h1>TORRE</h1><p>1 Torre + 1 Zomling + Checklist</p></div></div>"], 
// 							["<div class='item'><img src='../img/products/s2/house_pack.png'><div class='filet'></div><div class='product_description'><h1>CASA</h1><p>1 Casa + 2 Zomlings + Checklist</p></div></div>"], 
// 							["<div class='item'><img src='../img/products/s2/blister_house.png'><div class='filet'></div><div class='product_description'><h1>BLISTER</h1><p>4 Zomlings + 3 Torres + 1 Casa</p></div></div>"]];

var $items_series_two = [["<div class='item'><div class='item_image' id='s2_1'></div><div class='filet'></div><div class='product_description'><h1>PACKET</h1><p>1 Zomling + Checklist</p></div></div>"], 
							["<div class='item'><div class='item_image' id='s2_2'></div><div class='filet'></div><div class='product_description'><h1>TORRE</h1><p>1 Torre + 1 Zomling + Checklist</p></div></div>"], 
							["<div class='item'><div class='item_image' id='s2_3'></div><div class='filet'></div><div class='product_description'><h1>CASA</h1><p>1 Casa + 2 Zomlings + Checklist</p></div></div>"], 
							["<div class='item'><div class='item_image' id='s2_4'></div><div class='filet'></div><div class='product_description'><h1>BLISTER</h1><p>4 Zomlings + 3 Torres + 1 Casa</p></div></div>"]];

// var $items_series_three = [["<div class='item'><img src='../img/products/s3/one_pack.png'><div class='filet'></div><div class='product_description'><h1>PACKET</h1><p>1 Zomling + Checklist</p></div></div>"], 
// 							["<div class='item'><img src='../img/products/s3/train_pack.png'><div class='filet'></div><div class='product_description'><h1>TREN ZOMLING</h1><p>1 Tren/Vagón + 1 Zomling + Checklist</p></div></div>"], 
// 							["<div class='item'><img src='../img/products/s3/house_pack.png'><div class='filet'></div><div class='product_description'><h1>CASA</h1><p>1 Casa + 2 Zomlings + Checklist</p></div></div>"], 
// 							["<div class='item'><img src='../img/products/s3/blister.png'><div class='filet'></div><div class='product_description'><h1>BLISTER</h1><p>4 Zomlings + 3 Vagones + 1 Tren</p></div></div>"]];

var $items_series_three = [["<div class='item'><div class='item_image' id='s3_1'></div><div class='filet'></div><div class='product_description'><h1>PACKET</h1><p>1 Zomling + Checklist</p></div></div>"], 
							["<div class='item'><div class='item_image' id='s3_2'></div><div class='filet'></div><div class='product_description'><h1>TREN ZOMLING</h1><p>1 Tren/Vagón + 1 Zomling + Checklist</p></div></div>"], 
							["<div class='item'><div class='item_image' id='s3_3'></div><div class='filet'></div><div class='product_description'><h1>CASA</h1><p>1 Casa + 2 Zomlings + Checklist</p></div></div>"], 
							["<div class='item'><div class='item_image' id='s3_4'></div><div class='filet'></div><div class='product_description'><h1>BLISTER</h1><p>4 Zomlings + 3 Vagones + 1 Tren</p></div></div>"]];


// Items series four [4]
// var $items_series_four = [["<div class='item'><img src='../img/products/s4/one_pack.png'><div class='filet'></div><div class='product_description'><h1>PACKET</h1><p>1 Zomling + Checklist</p></div></div>"], 
// 							["<div class='item'><img src='../img/products/s4/vehicle.png'><div class='filet'></div><div class='product_description'><h1>ZOM-MOBILE</h1><p>1 Zom-mobile + 1 Zomling + Checklist</p></div></div>"], 
// 							["<div class='item'><img src='../img/products/s4/bus.png'><div class='filet'></div><div class='product_description'><h1>BUS</h1><p>1 Bus + 2 Zomlings + Checklist</p></div></div>"], 
// 							["<div class='item'><img src='../img/products/s4/blister.png'><div class='filet'></div><div class='product_description'><h1>BLISTER</h1><p>4 Zomlings + 4 Zom-mobiles</p></div></div>"]];

var $items_series_four = [["<div class='item'><div class='item_image' id='s4_1'></div><div class='filet'></div><div class='product_description'><h1>PACKET</h1><p>1 Zomling + Checklist</p></div></div>"], 
							["<div class='item'><div class='item_image' id='s4_2'></div><div class='filet'></div><div class='product_description'><h1>ZOM-MOBILE</h1><p>1 Zom-mobile + 1 Zomling + Checklist</p></div></div>"], 
							["<div class='item'><div class='item_image' id='s4_3'></div><div class='filet'></div><div class='product_description'><h1>BUS</h1><p>1 Bus + 2 Zomlings + Checklist</p></div></div>"], 
							["<div class='item'><div class='item_image' id='s4_4'></div><div class='filet'></div><div class='product_description'><h1>BLISTER</h1><p>4 Zomlings + 4 Zom-mobiles</p></div></div>"]];

// var $items_special = [["<div class='item'><img src='../img/products/special/z_games.png'><div class='filet'></div><div class='product_description'><h1>Z-GAMES COLLECTOR TIN</h1><p>5 Athletes Zomlings</p></div></div>"], 
// 							["<div class='item'><img src='../img/products/special/tin.png'><div class='filet'></div><div class='product_description'><h1>ADVENTURE COLLECTOR TIN</h1><p>5 Adventure Zomlings</p></div></div>"], 
// 							["<div class='item'><img src='../img/products/special/hotel2.png'><div class='filet'></div><div class='product_description'><h1>MAGIC TRICK HOTEL</h1><p>1 Hotel + 2 Zomlings</p></div></div>"]];

var $items_special = [["<div class='item'><div class='item_image' id='s_1'></div><div class='filet'></div><div class='product_description'><h1>Z-GAMES COLLECTOR TIN</h1><p>5 Athletes Zomlings</p></div></div>"], 
							["<div class='item'><div class='item_image' id='s_2'></div><div class='filet'></div><div class='product_description'><h1>ADVENTURE COLLECTOR TIN</h1><p>5 Adventure Zomlings</p></div></div>"], 
							["<div class='item'><div class='item_image' id='s_3'></div><div class='filet'></div><div class='product_description'><h1>MAGIC TRICK HOTEL</h1><p>1 Hotel + 2 Zomlings</p></div></div>"]];

// All series / toys items
var $items_series = [$items_series_one, $items_series_two, $items_series_three, $items_series_four, $items_special];


