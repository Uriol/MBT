
var $sections = ['videos', 'characters', 'products', 'downloads'];
var section_index;

$(function(){

	// Show menu column on icon click
	$('#menu_icon_container').on('click', function(){
		show_menu();
	})

	// Close menu colum from column option
	$('.menu_item.close').on('click', function(){
		hide_menu();
	})

	// Click on menu BG to hide menu column
	$('.menu_BG').on('click', function(){
		hide_menu();
	})

	function hide_menu(){
		// Hide column
		$('.menu_column_container').removeClass('on').addClass('off');
		// Hide menu BG
		$('.menu_BG').fadeOut(400);
	}

	function show_menu(){
		// Display menu BG
		$('.menu_BG').fadeIn(400);
		// Display column
		$('.menu_column_container').removeClass('off').addClass('on');
	}

	// Go to section from column item
	$('.menu_column_container .menu_item.go-to').on('click', function(){
		// Get index
		section_index = $(this).data('index');
		// Scroll to section
		$('html,body').animate({ scrollTop: $('section.' + $sections[section_index]).offset().top }, 'fast');
		// Hide menu
		hide_menu();
	})

})