$(function(){

	// Get items
	var items = document.querySelectorAll('.timeline_container ul li');

	// Check if element is in viewport
	function isElementInViewport(el){
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= $(window).height() &&
			rect.right <= $(window).width()

		);
	}

	// Show elements
	function show_elements(){
		for(var i = 0; i < items.length; i++) {
			if (isElementInViewport(items[i])) {
				items[i].classList.add('on');
				console.log('in view')
			}
		}
	}

	// listen for events
	window.addEventListener("load", show_elements);
	window.addEventListener("resize", show_elements);
	window.addEventListener("scroll", show_elements);

})