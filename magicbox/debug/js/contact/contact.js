
$(function(){

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
	
});