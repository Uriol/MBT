<?php

?>

<!DOCTYPE html>
<html>
	<head>
		<title>Magic Box Toys - Contact</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1.0">
		<!-- FONTS -->
		<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
		<!-- Icons Fonts -->
		<link rel="stylesheet" href="../../css/libraries/font_awesome/css/font-awesome.min.css">
		<!-- general styles -->
		<link href='../../css/reset.css' rel='stylesheet'>
		<link href='../../css/general/general.css' rel='stylesheet'>
		<!-- Owl beta -->
		<link href='../../css/libraries/(beta)owl.carousel.css' rel='stylesheet'>
		<!-- MENU -->
		<link href='../../css/menu/menu.css' rel='stylesheet'>
		<!-- Contact -->
		<link href='../../css/contact/contact.css' rel='stylesheet'>
		<!-- Pre Footer -->
		<link href='../../css/pre_footer/pre_footer.css' rel='stylesheet'>
		<!-- Footer -->
		<link href='../../css/footer/footer.css' rel='stylesheet'>
		<!-- Onload -->
		<link href='../../css/onload/onload.css' rel='stylesheet'>
	</head>

	<body>

		<div class='onload'>
			<!-- <div class='loading_gif_container'>
				<div class='mbt_logo'>
					<img src='../../img/general/mbt_logo.png'>
					<img class='gif' src='../../img/general/loading.gif'>
				</div>
			</div> -->
		</div>

		<section class='content'>
			
			<div class='bg_dark_contact'></div>

			<!-- Contact notifications -->
			<div class='notification_container_full error'>
				<div class='message_notification_container'>
					<div class='info_text'>
						<p>All fields are required, please fill the form again.</p>
					</div>
					<div class='close_full'>
						<div class='close_container'>
							<h4>CLOSE</h4>
						</div>
					</div>
				</div>
			</div>

			<div class='notification_container_full email'>
				<div class='message_notification_container'>
					<div class='info_text'>
						<p>The email address is not in the correct format. Please, fill out the form again.</p>
					</div>
					<div class='close_full'>
						<div class='close_container'>
							<h4>CLOSE</h4>
						</div>
					</div>
				</div>
			</div>

			<div class='notification_container_full success'>
				<div class='message_notification_container'>
					<div class='info_text'>
						<p>Thanks! Your message has been sent and we will get back to you as soon as possible.</p>
					</div>
					<div class='close_full'>
						<div class='close_container'>
							<h4>CLOSE</h4>
						</div>
					</div>
				</div>
			</div>




			<div class='bg_dark'></div>

			<?php
				include('../../sections/menu/uk/menu.php');
			?>

			<style>
				.menu_item_container p.yellow{ color: rgb(255,163,34); }
			</style>

			<!-- Header -->
			<div class='contact_header'>
			</div>

			<div class='title_container_contact'>
				<h2>Contact us</h2>
				<!-- <h2>CONTÁCTENOS</h2> -->
			</div>

			<!-- Contact Form -->
			<div class='contact_form_wrapper'>
				<?php
					include('../../sections/contact/uk/contact.php');
				?>
			</div>

			<!-- Footer -->
			<?php
				include('../../sections/pre_footer/pre_footer.php');
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
		<!-- Contact -->
		<script src='../../js/contact/contact.js'></script>
		<!-- Load -->
		<script src='../../js/general/load_contact.js'></script>

	</body>

</html>