<?php

?>

<!DOCTYPE html>
<html>
	<head>
		<title>Magic Box Toys - Company</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1.0">

		<!-- Owl beta -->
		<link href='../../css/libraries/(beta)owl.carousel.css' rel='stylesheet'>

		<!-- FONTS -->
		<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet">
		<!-- Icons Fonts -->
		<link rel="stylesheet" href="../../css/libraries/font_awesome/css/font-awesome.min.css">

		<!-- general styles -->
		<link href='../../css/reset.css' rel='stylesheet'>
		<link href='../../css/general/general.css' rel='stylesheet'>
		<!-- MENU -->
		<link href='../../css/menu/menu.css' rel='stylesheet'>
		<!-- Pre Footer -->
		<link href='../../css/pre_footer/pre_footer.css' rel='stylesheet'>
		<!-- Footer -->
		<link href='../../css/footer/footer.css' rel='stylesheet'>
		<!-- Company -->
		<link href='../../css/company/company_2.css' rel='stylesheet'>

	</head>

	<body>

		<section class='content'>

			<div class='bg_dark'></div>

			<?php
				include('../../sections/menu/UK/menu.php');
			?>

			<style>
				.menu_item_container p.green{ color: rgb(115, 189, 78); }
			</style>

			<div class='header'>
			</div>

			<div class='company_text_wrapper'>
				<div class='company_text_container'>
					<h2>Magic Box Toys is a global leader in the creation and distribution of collectable toys.</h2>
					<p>Our products are filled with imagination and surprise. We are proud of the excitement we bring to children through our well-designed and highly gratifying concepts. We love the challenge to create new products in order to continue to entertain children worldwide.</p>
					<!-- <h2 class='discover'>Discover our history.</h2> -->
				</div>
			</div>

			<?php
				include('../../sections/company/timeline_vertical.php');
			?>

			<?php
				include('../../sections/pre_footer/pre_footer.php');
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