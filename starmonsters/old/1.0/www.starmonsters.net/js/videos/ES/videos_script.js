var PLAYING_VIDEO = false;

var $videos_YT_ID = ['AFlakFyxVC0', 'eU3ffZXhgCA',  '59iZ9NwKG_w']

var video_index;

var iframe_player;

var YT_API_ready = false;

var video_player_ON = false;

$(function(){

	



	// Click on video to trigger actionj
	$('.owl-carousel .item .video_pic').on('click', function(){

		if(YT_API_ready == true) {

			// Get video index
			video_index = $(this).data('index');
			// Show Player
			$('.carousel_container .iframe_container').show();
			iframe_player.loadVideoById($videos_YT_ID[video_index], 'large');
			video_player_ON = true;
			PLAYING_VIDEO = true;

		} else {

		}

	})





	//  Init owl carousel
	$("#owl_carousel").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true
	});

	var owl = $(".owl-carousel.videos").data('owlCarousel');
	// Next 
	$('.arrow_container_video.right').on('click', function() {
		owl.next();
		hide_video_player()
	})
	// Prev
	$('.arrow_container_video.left').on('click', function() {
		owl.prev();
		hide_video_player()
	})
	// Dots menu
	$(document).on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
		hide_video_player();
	});


})


// Hide YT player on video end
// Show video picture
function hide_video_player(){

	if (PLAYING_VIDEO == true) {
		iframe_player.pauseVideo();
		PLAYING_VIDEO = false;
	}

	$('.carousel_container .iframe_container').hide();

}



// Youtube videos
window.onYouTubeIframeAPIReady = function() {
	
	iframe_player = new YT.Player('video_player', {
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
	
}

function onPlayerReady(event) {
	YT_API_ready = true;
	// console.log('player ready')
}

// Iframe events
function onPlayerStateChange(e) {
	if(e.data == YT.PlayerState.PLAYING) {
		// console.log('playing');
	} else if (e.data == YT.PlayerState.PAUSED) {
		// console.log('paused');
	} else if (e.data == YT.PlayerState.ENDED) {
		// console.log('ended');
		PLAYING_VIDEO = false;
		hide_video_player();
	} else if (e.data == YT.PlayerState.STOP) {
		
	}
}