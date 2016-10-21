
$(function(){

	// Show download link
	$('.download_item').on('mouseenter', function(){
		$(this).children('.item_info').fadeIn(400);
	}).on('mouseleave', function(){
		$(this).children('.item_info').fadeOut(400);
	})
	
})