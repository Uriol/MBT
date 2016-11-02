$(function(){

	// Show contact when clicking menu desktop
	// $('.menu_item_container.contact').on('click', function(){
	// 	$('.bg_dark_full').fadeIn(200);
	// 	$('section.contact').fadeIn(200);
	// })

	// // Hide page on bg click
	// $('.bg_dark_full').on('click', function(){
	// 	$(this).fadeOut(200);
	// })

	// $('.close_form_container').on('click', function(){
	// 	$('.bg_dark_full').fadeOut(200);
	// 	$('section.contact').fadeOut(200);
	// })

	// Show notifications on message sent
	// function onMessageSent(){
	// 	// Show dark bg
	// 	$('.bg_dark_contact').fadeIn(200);
	// }

})

function test(){
		// alert('test function')
	}


	var message_result;

	function onMessageSent(message_error_success){

		// Disable scroll
		$('html, body').css({
			'overflow': 'hidden',
			'height': '100%'
		});

		if(message_error_success == 'error'){
			console.log('error');
			// Show error screenshot
			$('.notification_container_full.error').fadeIn(200);

		} else if(message_error_success == 'email_error'){
			console.log('email error');
			// Show email error screenshot
			$('.notification_container_full.email').fadeIn(200);
		} else {
			console.log('succes');
			$('.notification_container_full.success').fadeIn(200);
		}

		// Show dark bg
		
		$('.bg_dark_contact').fadeIn(200);
		//$('.notification_container_full').fadeIn(200);
	}

	$('.notification_container_full').on('click', function(){

		// Activate Scroll
		$('html, body').css({
			'overflow': 'auto',
			'height': 'auto'
		});

		$('.bg_dark_contact').fadeOut(200);
		$('.notification_container_full').fadeOut(200);

	})