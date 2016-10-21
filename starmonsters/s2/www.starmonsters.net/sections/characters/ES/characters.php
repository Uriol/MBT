<section class='characters'>

	<div id='particles' class='series_two'>
		<div id='particles_container'></div>
	</div>

	<div class='section_tittle_container' id='characters_tittle'>
		<img src="../img/general/titles/ES/personajes.png" alt="characters_tittle">
	</div>

	<div class='series_selector_container'>
		<select name="series" id='series_selection' data-role="none">
		 	<option value="series_one" data-index='0'>Series 1</option>
		 	<option value="series_two" data-index='1'>Series 2</option>
			<!-- <option value="series_three">Series 3</option>
			<option value="series_four">Series 4</option> -->
		</select>
	</div>

	<?php
		include '../downloads/downloads.php';
	?>

	<div class='checklist_BG'>
		<div class='checklist_container'>
			<?php
				include 'series_one.php';
			?>
			<?php
				include 'series_two.php';
			?>
			<?php
				// include 'series_three.php';
			?>
			<?php
				// include 'series_four.php';
			?>

		</div>
	</div>

</section>