

var YT_API_READY = false;

var playerInfoList = [{
	id: 'player5',
    videoId: '1GoxKV2Ess8'
}, {
    id: 'player4',
    videoId: '1GoxKV2Ess8'
}, {
    id: 'player3',
    videoId: 'rpbA005ySM0'
}, {
    id: 'player2',
    videoId: '79iR2JPfoUk'
}, {
    id: 'player1',
    videoId: '1XMUtpSvKPE'
}];



$(function(){

	
	var owl = $('#videos_owl');

	owl.owlCarousel_beta({
	    stagePadding: 200,
	    loop:false,
	    margin: 0,
	    nav:false,
	    items:1,
	    lazyLoad: false,
	    responsiveRefreshRate: 20,
	    nav:false,
	    video: true,
		responsive:{
		    0:{
		        items:1,
		        margin: 15,
		        stagePadding: 60
		    },
		    540:{
		        items:1,
		        // margin: 15,
		        stagePadding: 100
		    },
		    769:{
		        items:1,
		        stagePadding: 170 //
		    },
		    1025:{
		        items:1,
		        stagePadding: 240 //
		    },
		    1200:{
		        items:1,
		        stagePadding: 280
		    },
		    1400:{
		        items:1,
		        stagePadding: 340
		    },
		    1600:{
		        items:1,
		        stagePadding: 380
		    },
		    1800:{
		        items:1,
		        // margin: -50,
		        stagePadding: 400
		    }
		}
	})
	
	$('.arrow_container.right').on('click', function(){
		stop_all_players()
		owl.trigger('next.owl.carousel');
	})
	// Scroll left
	$('.arrow_container.left').on('click', function(){
		stop_all_players()
		owl.trigger('prev.owl.carousel');
	})


	// Youtube videos
	window.onYouTubeIframeAPIReady = function() {
		    if (typeof playerInfoList === 'undefined') return;
	    
	    for (var i = 0; i < playerInfoList.length; i++) {
	        var curplayer = createPlayer(playerInfoList[i]);
	        players[i] = curplayer;
	    }
	}

	var players = new Array();

	function createPlayer(playerInfo) {
	    return new YT.Player(playerInfo.id, {
	        videoId: playerInfo.videoId, 
	     events: {
	     	'onReady': onPlayerReady,
	     	'onStateChange': onPlayerStateChange

	    }});
	}

	function onPlayerReady(){
		//console.log('ready')
		YT_API_READY = true;
	}

	function onPlayerStateChange(e){
		if(e.data == YT.PlayerState.PLAYING) {
			//console.log('playing');
		} else if (e.data == YT.PlayerState.PAUSED) {
			//console.log('paused');
		} else if (e.data == YT.PlayerState.ENDED) {
			//console.log('ended');
			stop_all_players();
			owl.trigger('next.owl.carousel');
		} else if (e.data == YT.PlayerState.STOP) {
			//console.log('stop');
		}
	}

	var video_index;
	var total_vids = (playerInfoList.length)-1;
	var video_index_inverted;
	// Click on video cover to play it
	$('.video_cover_container').on('click', function(){
		// Stop all so just on is playing at the same time
		stop_all_players();
		// Get video index pos
		video_index = $(this).data('index');
		// Invert order
		video_index_inverted = total_vids - video_index;

		// Show players
		$('.player_container').show();
		// Hide this video container
		$(this).fadeOut(0);
		// Play this video
		players[video_index_inverted].playVideo();
	})


	function stop_all_players(){
		$(players).each(function (i) {
            //console.log(this);
            this.stopVideo();
            $('.video_cover_container').fadeIn(0);
            // hide players
			$('.player_container').hide();
        });
	}

	// Start hiding left arrow
	$('.arrow_container.left').hide();
	var current_page, number_of_pages;
	// Update arrows on owl carousel on change
	owl.on('changed.owl.carousel',function(e){

		current_page = e.page.index;
		//console.log('current_page: ' + current_page)
		number_of_pages = e.page.count;

		// Last page
		if ((current_page+1) == number_of_pages) {
			$('.arrow_container.right').hide();
	    } else {
	    	$('.arrow_container.right').show();
	    }

	    //  First page
	    if ( current_page == 0  ) {
	    	$('.arrow_container.left').hide();
	    } else {
	    	$('.arrow_container.left').show();
	    }

	});

	owl.on('drag.owl.carousel', function(e){
		stop_all_players();
	})



});