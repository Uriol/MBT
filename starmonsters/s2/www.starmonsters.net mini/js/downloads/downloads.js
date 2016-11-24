
$(function(){

	// Show download link
	$('.item_wrapper').on('mouseenter', function(){
		$(this).children('.item_info').show();
	}).on('mouseleave', function(){
		$(this).children('.item_info').hide();
	})
	
})