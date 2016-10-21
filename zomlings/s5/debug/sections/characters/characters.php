<section class='characters'>

	<div class='characters_menu'>
		<div class='characters_menu_container'>

			<div class='top_wood_image_container_characters'>
				<!-- <img id='top_wood' class='top_wood_img' src='../img/characters/title.png'> -->
			</div>


			<div class='series_selector_container'>
				<select name="series" id='series_selection' data-role="none">
				 	<option value="series_one" data-index='0'>Series 1</option>
				 	<option value="series_two" data-index='1'>Series 2</option>
				 	<option value="series_three" data-index='2'>Series 3</option>
				 	<option value="series_four" data-index='3'>Series 4</option>
				 	<option value="series_five" data-index='4'>Series 5</option>
				</select>
			</div>
		</div>
	</div> 


	<div class='checklist_BG'>
		<div class='checklist_container'>
			<?php
				include 'series_one.php';
			?>
			<?php
				include 'series_two.php';
			?>
			<?php
				include 'series_three.php';
			?>
			<?php
				include 'series_four.php';
			?>
			<?php
				include 'series_five.php';
			?>
			


		</div>
	</div>

	<div class='footer_wood'>
		<!-- <img id='bottom_wood' src='../img/characters/bg/bottom_wood_s1.png'> -->
	</div>

</section>