
// Mobile
var SUBMENU_MOBILE = false;
var BRANDS_ON_MOBIILE = false;

// Desktop
var MOUSE_IN_BRANDS_MENU = false;
var MOUSE_IN_SUBMENU = false;

$(function(){

	// Mobile menu
	// Open / Close submenu on mobile
	$('.menu_icon_container').on('click', function(){

		if(SUBMENU_MOBILE == false){
			// Dark bg on
			$('.bg_dark').fadeIn(200);
			// Show subemnu
			$('.submenu_container_mobile').addClass('on');
			$('.menu_icon_container').addClass('open');
			$('.menu_container_mobile').addClass('on');
			SUBMENU_MOBILE = true;
		} else {
			// Hide subemnu
			$('.submenu_container_mobile').removeClass('on');
			// Dark bg off
			$('.bg_dark').fadeOut(200);
			$('.menu_icon_container').removeClass('open');
			$('.menu_container_mobile').removeClass('on');
			SUBMENU_MOBILE = false;
		}

	});

	// Hide submenu mobile on click on bg
	$('.bg_dark').on('click', function(){
		// Hide subemnu
			$('.submenu_container_mobile').removeClass('on');
			// Dark bg off
			$('.bg_dark').fadeOut(200);
			$('.menu_icon_container').removeClass('open');
			$('.menu_container_mobile').removeClass('on');
			SUBMENU_MOBILE = false;
	})

	// Show / hide brands in submenu mobile
	$('.submenu_mobile_item_wrapper.brands').on('click', function(e){
		// Except children brand cover
		if (!$(e.target).hasClass('brand_cover')) {
	        // Show brands
			if (BRANDS_ON_MOBIILE == false) {
				$('.submenu_brand_image_container').fadeIn(200);
				BRANDS_ON_MOBIILE = true;
			} else {
				$('.submenu_brand_image_container').fadeOut(200);
				BRANDS_ON_MOBIILE = false;
			}
	    } 
	});


	//  Desktop menu
	//  Submenu carousel
	// Carousel
	$('#submenu_desktop_owl').owlCarousel_beta({
		nav : false,
		dots: false,
		slideSpeed : 300,
		paginationSpeed : 400,
		autoWidth: false,
		items: 2,
		margin: 0,
		responsiveRefreshRate: 20,
		loop: false,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true
		// margin: 20
	})

	// Hover in out mouse menu
	$('.menu_item_container.brands').on('mouseenter', function(){
		MOUSE_IN_BRANDS_MENU = true;
		$('.submenu_container_desktop').addClass('on');
		$('.menu_item_container p.red').addClass('on');
		// $('.bg_dark').fadeIn(300);
	}).on('mouseleave', function(){
		MOUSE_IN_BRANDS_MENU = false;
		setTimeout(close_submenu, 200);
	})

	// Detect when mouse is in / out submenu
	$('.submenu_container_desktop').on('mouseenter', function(){
		MOUSE_IN_SUBMENU = true;
		$('.menu_item_container p.red').addClass('on');
	}).on('mouseleave', function(){
		MOUSE_IN_SUBMENU = false;
		setTimeout(close_submenu, 200);
	}) 

	// Close submenu
	function close_submenu(){
		if( MOUSE_IN_BRANDS_MENU == false && MOUSE_IN_SUBMENU == false){
			$('.submenu_container_desktop').removeClass('on');
			$('.menu_item_container p.red').removeClass('on');
			// $('.bg_dark').fadeOut(300);
		}
	}


	// Mobile detect
	var md = new MobileDetect(window.navigator.userAgent);

	// Device
	if(md.mobile() || md.tablet()){
		// Device
	} else {
		// Desktop

	}

	// Resize events
	var w;
	$( window ).resize(function() {
		// Hide submenu dark bg on desktop size if open
		w = $( window ).width();
		if (w > 900 && SUBMENU_MOBILE == true){
			// Hide subemnu
			$('.submenu_container_mobile').removeClass('on');
			// Dark bg off
			$('.bg_dark').fadeOut(200);
			$('.menu_icon_container').removeClass('open');
			$('.menu_container_mobile').removeClass('on');
			SUBMENU_MOBILE = false;
		}
	});

})

