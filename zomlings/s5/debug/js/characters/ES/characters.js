

var $series_bg = [ 'rgb(234,33,45)' , 'rgb(0,142,220)'];
var $particles_colors = ['rgb(171,31,46)' , 'rgb(0,115,185)'];
var $series = ['series_one', 'series_two', 'series_three', 'series_four', 'series_five'];
var $series_canvas_bg = [];
var $character_info_img_class = ['s1' , 's2', 's3', 's4', 's5'];

var actual_serie_index = 4;
var serie_on_display = $series[actual_serie_index];
var new_serie_index;

var left_disabled = false, right_disabled = false;

var info_clicked = false;

$(function(){

		display_current_serie();
		// Display current serie 
		function display_current_serie() {
			var value = $('#series_selection').val();
			$('#series_selection').val(serie_on_display);
			// Activate checklist for selected serie
			$('#' + serie_on_display + '_container').show();
			// Add tittle
			$('.top_wood_image_container_characters').css('background-image', 'url(../img/characters/titles/ES/' + serie_on_display + '_full.png)')
			//$('.characters_title').css('background-image', 'url(../img/characters/bg/title_' + serie_on_display + '.png)');
			// Add bottom wood
			$('.footer_wood').css('background-image', 'url(../img/characters/bottom/' + serie_on_display + '.png)')
			// Add BG sky img
			$('.checklist_BG').css('background-image', 'url(../img/characters/bg/' + serie_on_display + '.png)');
		}


		// Detect select change
		$('#series_selection').on('change', function(){
			// Unshow actual serie
			$('#' + serie_on_display + '_container').hide();
			// Update serie index
			actual_serie_index = $('#series_selection option:selected').index()
			// Update selected serie
			serie_on_display = $series[actual_serie_index];
			//  Show new serie
			$('#' + serie_on_display + '_container').fadeIn(500);
			// Add tittle
			$('.top_wood_image_container_characters').css('background-image', 'url(../img/characters/titles/ES/' + serie_on_display + '_full.png)')
			// Add bottom wood
			$('.footer_wood').css('background-image', 'url(../img/characters/bottom/' + serie_on_display + '.png)')
			// Add BG sky img
			$('.checklist_BG').css('background-image', 'url(../img/characters/bg/' + serie_on_display + '.png)');
		});


		var character_index;
		//  Open character info
		$('.character').on('click', function(){
			if (info_clicked == false) { info_clicked = true;}
			 $('section.character_info').fadeIn(200);
			// Get character data index
			character_index = $(this).data('index');
			//  Setup swipe options
			info_swipe_setup();
			// Add class to info img
			$('section.character_info .character_info_container img').removeClass().addClass($character_info_img_class[actual_serie_index]);

			updateImg();
		})

		//  Close character info when clicking BG
		$('.character_info_container').on('click', function(e){
			if (e.target !== this)
			return;
			$('section.character_info').fadeOut(200);
			$('#character_info_img').hide();
		})
		// Close character info when clicking close icon
		$('.close_container').on('click', function(){
			$('section.character_info').fadeOut(200);
			$('#character_info_img').hide();
		})


		
		// Disable next / prev on first / last characters info
		function info_swipe_setup(){

			// left
			if (character_index == 1 || character_index == 73) {
				$('.character_info_container .arrow_container.left').removeClass('able').addClass('disabled');
				// console.log('disable')
				left_disabled = true;
			} else {
				$('.character_info_container .arrow_container.left').removeClass('disabled').addClass('able');
				// console.log('able')
				left_disabled = false;
			}
			// Right
			if (character_index == 72 || character_index == 144) {
				$('.character_info_container .arrow_container.right').removeClass('able').addClass('disabled');
				// console.log('disable')
				right_disabled = true;
			} else {
				$('.character_info_container .arrow_container.right').removeClass('disabled').addClass('able');
				// console.log('able')
				right_disabled = false;
			}
		}


		// Click left
		$(document).on('click', '.arrow_container.left.able', function() {
			
			if (left_disabled == false) {
				character_index -= 1;
				updateImg();
			}

			// Update swipe setup
			info_swipe_setup();
						
		})

		// Click right
		$(document).on('click', '.arrow_container.right.able', function() {
			
			if (right_disabled == false) {
				character_index += 1;
				updateImg();
			}

			// Update swipe setup
			info_swipe_setup();
						
		})

		function updateImg() {
			if (info_clicked == true){
				// Remove image src
				$('#character_info_img').removeAttr('src');
			}
			// Hide img
			$('#character_info_img').hide();
			// Show gif
			$('#loading_gif').show();

			// Once loaded remove gif and show image
			document.getElementById('character_info_img').onload = function(){
				$('#loading_gif').hide();
				// Show img
				$('#character_info_img').fadeIn(500);
			}
			// Attr src to img
			$('#character_info_img').attr('src', '../img/characters/characters_info/' + character_index + '.png')
		}

});




