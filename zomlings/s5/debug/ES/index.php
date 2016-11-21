<?php

	

?>


<!DOCTYPE html>
<html>
	<head>
		<title>Zomlings - In The Town</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1.0">
		<!-- <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"> -->
		<!-- Libraries -->
		<link href='../css/libraries/(beta)owl.carousel.css' rel='stylesheet'>
		<link href='../css/libraries/owl.theme.css' rel='stylesheet'>
		<link href='../css/libraries/owl.carousel.css' rel='stylesheet'>
		<!-- Icons Fonts -->
		<link rel="stylesheet" href="../css/libraries/font_awesome/css/font-awesome.min.css">
		<!-- general styles -->
		<link href='../css/reset.css' rel='stylesheet'>
		<link href='../css/onload/onload.css' rel='stylesheet'>
		<link href='../css/general/general.css' rel='stylesheet'>
		<!-- Menu -->
		<link href='../css/menu/menu.css' rel='stylesheet'>
		<link href='../css/menu/menu_animations.css' rel='stylesheet'>
		<!-- Header -->
		<link href='../css/header/header.css' rel='stylesheet'>
		<!-- Videos -->
		<link href='../css/videos/videos.css' rel='stylesheet'>
		<!-- Characters -->
		<link href='../css/characters/characters_style.css' rel='stylesheet'>
		<!-- Products -->
		<link href='../css/products/products.css' rel='stylesheet'>
		<!-- Downloads -->
		<link href='../css/downloads/downloads.css' rel='stylesheet'>
		<link href='../css/downloads/es/downloads.css' rel='stylesheet'>
		<!-- footer -->
		<link href='../css/footer/footer.css' rel='stylesheet'>

	</head>

	<body>
		
		
		<div class='onload'>
			<div class='loading_gif_container'>
				<div class='sm_logo'>
					<img src='../img/loading/z_logo.png'>
					<img class='gif' src='../img/loading/sm_6.gif'>
				</div>
			</div>
		</div>


		<?php
			include('../sections/menu/ES/menu.php');
		?>

		<?php
			include('../sections/header/header.php');
		?>
		
		<?php
			include('../sections/videos/videos.php')
		?>

		<?php
			include('../sections/characters/characters.php');
		?>
		
		<?php 
			include('../sections/products/products.php');
		?>

		<?php 
			include('../sections/downloads/es/downloads.php');
		?>

		<?php 
			// include('../sections/youtube_link/youtube_link.php');
		?>

		<?php 
			include('../sections/footer/footer.php');
		?>

		
		<!-- JS -->
		<script src='../js/libraries/jquery_min.js'></script>
		<script src='../js/libraries/(beta_)owl.carousel.js'></script>
		<script src='../js/libraries/owl.carousel.js'></script>

		<!-- Menu -->
		<script src='../js/menu/menu.js'></script>

		<!-- Header -->
		<script src='../js/header/header.js'></script>

		<!-- videos interaction -->
		<script src='../js/videos/es/videos.js'></script>
		

		<!-- Characters js -->
		<script src='../js/characters/es/characters.js'></script>

		<!-- Products -->
		<script src='../js/products/es/products.js'></script>

		<!-- Downloads -->
		<!-- <script src='../js/downloads/downloads_particles.js'></script> -->
		<script src='../js/downloads/downloads.js'></script>

		<!-- general -->
		<script src='../js/general/general.js'></script>

		<!-- YOUTUBE -->
		<script src='https://www.youtube.com/iframe_api'></script>

	</body>

</html>
