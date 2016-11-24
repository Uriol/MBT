<?php

?>

<!DOCTYPE html>
<html>
	<head>
		<title>Magic Box Toys - Compañia</title>
		<!-- Description -->
		<meta name=“description” content=“En Magic Box Toys somos creadores, construimos marcas y generamos tendencias en el sector de los juguetes coleccionables. Somos los creadores de Zomlings - In The Town y Star Monsters - Pocket Friends.”>

		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1.0">
		<!-- Favicon -->
		<link rel="icon" type="image/png" sizes="32x32" href="../../favicon.png">
		<!-- Owl beta -->
		<link href='../../css/libraries/(beta)owl.carousel.css' rel='stylesheet'>
		<!-- FONTS -->
		<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
		<!-- Icons Fonts -->
		<link rel="stylesheet" href="../../css/libraries/font_awesome/css/font-awesome.min.css">
		<!-- general styles -->
		<link href='../../css/reset.css' rel='stylesheet'>
		<link href='../../css/general/general.css' rel='stylesheet'>
		<!-- MENU -->
		<link href='../../css/menu/menu.css' rel='stylesheet'>
		<!-- Footer -->
		<link href='../../css/footer/footer.css' rel='stylesheet'>
		<!-- Company -->
		<link href='../../css/company/company.css' rel='stylesheet'>

	</head>

	<body>

		<section class='content'>

			<div class='bg_dark'></div>

			<?php
				include('../../sections/menu/es/menu.php');
			?>

			<style>
				.menu_item_container p.green{ color: rgb(115, 189, 78); }
			</style>

			<div class='header'>
			</div>

			<div class='company_text_wrapper'>
				<div class='company_text_container'>
					<h2>Magic Box Toys es una empresa líder mundial en la creación y distribución de juguetes coleccionables.</h2>
					<p>Nuestros productos logran despertar la imaginación, sorpresa e ilusión de los niños a través de conceptos sólidos, bien diseñados y altamente gratificantes. Nos apasiona el reto de seguir creando para continuar divirtiendo a niños y niñas en todo el mundo.</p>
				</div>
			</div>

			<?php
				include('../../sections/company/es/timeline_vertical.php');
			?>

			<?php
				include('../../sections/footer/footer.php');
			?>

		</section>

		<!-- JS -->
		<script src='../../js/libraries/jquery_min.js'></script>
		<script src='../../js/libraries/mobile_detect_min.js'></script>
		<!-- Owl Beta -->
		<script src='../../js/libraries/(beta_)owl.carousel.js'></script>
		<!-- Menu -->
		<script src='../../js/menu/menu.js'></script>
		<!-- Company -->
		<script src='../../js/company/company.js'></script>

	</body>

</html>