<?php

?>

<!DOCTYPE html>
<html>
	<head>
		<title>Magic Box Toys - Contacto</title>
		<!-- Description -->
		<meta name="description" content="En Magic Box Toys somos creadores, construimos marcas y generamos tendencias en el sector de los juguetes coleccionables. Somos los creadores de Zomlings - In The Town y Star Monsters - Pocket Friends.">

		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1.0">
		<!-- Favicon -->
		<link rel="icon" type="image/png" sizes="32x32" href="../../favicon.png">
		<!-- FONTS -->
		<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
		<!-- Icons Fonts -->
		<link rel="stylesheet" href="../../css/libraries/font_awesome/css/font-awesome.min.css">
		<!-- general styles -->
		<link href='../../css/reset.css' rel='stylesheet'>
		<link href='../../css/general/general.css' rel='stylesheet'>
		<!-- MENU -->
		<link href='../../css/menu/menu.css' rel='stylesheet'>
		<!-- Owl beta -->
		<link href='../../css/libraries/(beta)owl.carousel.css' rel='stylesheet'>
		<!-- Contact -->
		<link href='../../css/contact/contact_2.css' rel='stylesheet'>
		<!-- Footer -->
		<link href='../../css/footer/footer.css' rel='stylesheet'>
		<!-- Onload -->
		<link href='../../css/onload/onload.css' rel='stylesheet'>
	</head>

	<body>

		<div class='onload'>
		</div>

		<section class='content'>
			
			<!-- Form notifications -->
		 	<div class='form_notifications'>
				<div class='bg_dark_contact'></div>
				<!-- Contact notifications -->
				<div class='notification_container_full error'>
					<div class='message_notification_container'>
						<div class='info_text'>
							<p>Todos los campos están requeridos, por favor vuelve a rellenar el formulario.</p>
						</div>
						<div class='close_full'>
							<div class='close_container'>
								<h4>CERRAR</h4>
							</div>
						</div>
					</div>
				</div>

				<div class='notification_container_full email'>
					<div class='message_notification_container'>
						<div class='info_text'>
							<p>La dirección de correo electrónico no está en el formato correcto. Por favor, vuelve a rellenar el formulario.</p>
						</div>
						<div class='close_full'>
							<div class='close_container'>
								<h4>CERRAR</h4>
							</div>
						</div>
					</div>
				</div>

				<div class='notification_container_full success'>
					<div class='message_notification_container'>
						<div class='info_text'>
							<p>Gracias! Tu mensaje ha sido enviado y nos pondremos en contacto próximamente.</p>
						</div>
						<div class='close_full'>
							<div class='close_container'>
								<h4>CERRAR</h4>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- When brands menu is on -->
			<div class='bg_dark'></div>

			<?php
				include('../../sections/menu/es/menu.php');
			?>

			<!-- Select contacto option from menu -->
			<style>
				.menu_item_container p.yellow{ color: rgb(255,163,34); }
			</style>

			<!-- Header -->
			<div class='contact_header'>
			</div>

			<!-- Title -->
			<div class='title_container_contact'>
				<h2>Contáctenos</h2>
				<p>Cualquier duda, sugerencia o simplemente nos quieres decir lo que más te gusta de nuestros productos, lo puedes hacer aquí. Prometemos contestar lo más rápido posible.</p>
			</div>

			<!-- Form -->
			<div class='contact_form_wrapper'>
				<?php
					include('../../sections/contact/es/contact.php');
				?>
			</div>

			<!-- Footer -->
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
		<!-- Contact -->
		<script src='../../js/contact/contact.js'></script>
		<!-- Load -->
		<script src='../../js/general/load_contact.js'></script>

	</body>

</html>