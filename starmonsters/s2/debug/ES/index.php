<?php

	

?>


<!DOCTYPE html>
<html lang='es'>
	<head>
		<title>Star Monsters - Pocket Friends</title>
		<!-- Description -->
		<meta name=“description” content=“¡Ya están aquí los Star Monsters! Cada personaje se ha formado de una estrella que ha caído a la tierra. Hay 72 Star Monsters para coleccionar, incluyendo personajes plateados, dorados y evolucionados. ¡Descúbrelos, llévatelos contigo y juega con ellos! ¡La diversión está asegurada!”>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1.0">
		<!-- Favicon -->
		<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">

		<!-- Owl -->
		<link href='../css/libraries/owl.carousel.css' rel='stylesheet'>
		<link href='../css/libraries/owl.theme.css' rel='stylesheet'>

		<!-- Owl beta -->
		<link href='../css/libraries/(beta)owl.carousel.css' rel='stylesheet'>
		<!-- general styles -->
		<link href='../css/reset.css' rel='stylesheet'>
		<link href='../css/onload/onload.css' rel='stylesheet'>
		<link href='../css/general/general.css' rel='stylesheet'>
		<!-- Icons Fonts -->
		<link rel="stylesheet" href="../css/libraries/font_awesome/css/font-awesome.min.css">
		<!-- FONTS -->
		<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
		<!-- Menu -->
		<link href='../css/menu/menu.css' rel='stylesheet'>
		<link href='../css/menu/menu_animations.css' rel='stylesheet'>
		<!-- Header -->
		<link href='../css/header/header.css' rel='stylesheet'>
		<!-- Videos -->
		<link href='../css/videos/videos.css' rel='stylesheet'>
		<!-- Characters -->
		<link href='../css/characters/characters_style.css' rel='stylesheet'>
		<link href='../css/characters/characters_info_style.css' rel='stylesheet'>
		<!-- Products -->
		<link href='../css/products/products.css' rel='stylesheet'>
		<!-- Downloads -->
		<link href='../css/downloads/downloads.css' rel='stylesheet'>
		<!-- footer -->
		<link href='../css/footer/footer.css' rel='stylesheet'>

	</head>

	<body>
		
		
		<div class='onload'>
			<div class='loading_gif_container'>
				<div class='sm_logo'>
					<img src='../img/loading/logo_sm.png'>
					<img class='gif' src='../img/loading/loading.gif'>
				</div>
			</div>
		</div>
		


		<?php
			include('../sections/characters/characters_info.php')
		?>

		<?php
			include('../sections/menu/es/menu.php');
		?>

		<?php
			include('../sections/header/header.php');
		?>

		<?php
			include('../sections/videos/es/videos.php')
		?>

		<?php
			include('../sections/characters/es/characters.php');
		?>

		<?php 
			include('../sections/products/es/products.php');
		?>

		<?php 
			include('../sections/downloads/es/downloads.php');
		?>


		<?php 
			include('../sections/footer/footer.php');
		?>

		
		<!-- JS -->
		<script src='../js/libraries/jquery_min.js'></script>
		
		<!-- Owl -->
		<script src='../js/libraries/owl.carousel.js'></script>
		<!-- Owl Beta -->
		<script src='../js/libraries/(beta_)owl.carousel.js'></script>

		<!-- Menu -->
		<script src='../js/menu/menu.js'></script>

		<!-- Header -->
		<script src='../js/header/header.js'></script>

		<!-- videos interaction -->
		<script src='../js/videos/es/videos.js'></script>
		<!-- <script src='../js/videos/videos_script_old.js'></script> -->

		<!-- Characters js -->
		<script src='../js/characters/es/characters.js'></script>
		<script src='../js/characters/characters_particles.js'></script>

		<!-- Products -->
		<script src='../js/products/products.js'></script>

		<!-- Downloads -->
		<script src='../js/downloads/downloads_particles.js'></script>
		<script src='../js/downloads/downloads.js'></script>

		<!-- general -->
		<script src='../js/general/general.js'></script>

		<!-- YOUTUBE -->
		<script src='https://www.youtube.com/iframe_api'></script>

	</body>

</html>
