<?php

?>

<!DOCTYPE html>
<html>
	<head>
		<title>Magic Box Toys</title>
		<meta name=“description” content=“En Magic Box Toys somos creadores, construimos marcas y generamos tendencias en el sector de los juguetes coleccionables. Somos los creadores de Zomlings - In The Town y Star Monsters - Pocket Friends.”>

		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1.0">
		<!-- Favicon -->
		<link rel="icon" type="image/png" sizes="32x32" href="../favicon.png">
		<!-- Owl beta -->
		<link href='../css/libraries/(beta)owl.carousel.css' rel='stylesheet'>
		<!-- Owl -->
		<link href='../css/libraries/owl.carousel.css' rel='stylesheet'>
		<link href='../css/libraries/owl.theme.css' rel='stylesheet'>
		<!-- FONTS -->
		<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
		<!-- Icons Fonts -->
		<link rel="stylesheet" href="../css/libraries/font_awesome/css/font-awesome.min.css">
		<!-- general styles -->
		<link href='../css/reset.css' rel='stylesheet'>
		<link href='../css/general/general.css' rel='stylesheet'>
		<!-- MENU -->
		<link href='../css/menu/menu.css' rel='stylesheet'>
		<!-- Header -->
		<link href='../css/header/header.css' rel='stylesheet'>
		<!-- Videos -->
		<link href='../css/videos/videos.css' rel='stylesheet'>
		<!-- Products -->
		<link href='../css/products/products.css' rel='stylesheet'>
		<!-- Pre Footer -->
		<link href='../css/pre_footer/pre_footer.css' rel='stylesheet'>
		<!-- Footer -->
		<link href='../css/footer/footer.css' rel='stylesheet'>
		<!-- Onload -->
		<link href='../css/onload/onload.css' rel='stylesheet'>

	</head>

	<body>

		<div class='onload'>
			<div class='loading_gif_container'>
				<div class='mbt_logo'>
					<img src='../img/general/mbt_logo.png'>
					<img class='gif' src='../img/general/loading.gif'>
				</div>
			</div>
		</div>


		<section class='content'>

			<div class='bg_dark'></div>

			
			<?php
				include('../sections/menu/es/menu.php');
			?>


			<?php
				include('../sections/header/header.php');
			?>

			<?php
				include('../sections/videos/es/videos.php');
			?>

			<?php
				include('../sections/products/es/products.php');
			?>

			<?php
				include('../sections/footer/footer.php');
			?>


		</section>

		<!-- JS -->
		<script src='../js/libraries/jquery_min.js'></script>
		<script src='../js/libraries/mobile_detect_min.js'></script>
		<!-- Owl Beta -->
		<script src='../js/libraries/(beta_)owl.carousel.js'></script>
		<!-- Owl -->
		<script src='../js/libraries/owl.carousel.js'></script>
		<!-- Menu -->
		<script src='../js/menu/menu.js'></script>
		<!-- Header -->
		<script src='../js/header/header.js'></script>
		<!-- Videos -->
		<script src='../js/videos/videos.js'></script>
		<!-- Products -->
		<script src='../js/products/products.js'></script>
		<!-- General -->
		<script src='../js/general/general.js'></script>

		<!-- YOUTUBE -->
		<script src='https://www.youtube.com/iframe_api'></script>

	</body>
</html>

