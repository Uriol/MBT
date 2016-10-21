<?php
	include('location.php');
?>


<!DOCTYPE html>
<html>
	<head>
		<title>Star Monsters - Pocket Friends</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1.0">
		<!-- <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"> -->
		<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
		<!-- Libraries -->
		<!-- <link href='../css/libraries/slick.css' rel='stylesheet'> -->
		<!-- <link href='../css/libraries/flickity_scroll/flickity.css' rel='stylesheet'> -->
		<link href='../css/libraries/owl.carousel.css' rel='stylesheet'>
		<link href='../css/libraries/owl.theme.css' rel='stylesheet'>

		<!-- general styles -->
		<link href='../css/reset.css' rel='stylesheet'>
		<link href='../css/onload/onload.css' rel='stylesheet'>
		<link href='../css/general/general.css' rel='stylesheet'>
		<!-- Menu -->
		<link href='../css/menu/menu.css' rel='stylesheet'>
		<link href='../css/menu/menu_animations.css' rel='stylesheet'>
		<!-- Header -->
		<link href='../css/header/header.css' rel='stylesheet'>
		<!-- Intro -->
		<!-- <link href='../css/intro/intro.css' rel='stylesheet'> -->
		<!-- Videos -->
		<!-- <link href='../css/videos/videos_style.css' rel='stylesheet'> -->
		<link href='../css/videos/videos_new.css' rel='stylesheet'>
		<!-- Characters -->
		<link href='../css/characters/characters_style.css' rel='stylesheet'>
		<link href='../css/characters/characters_info_style.css' rel='stylesheet'>
		<!-- Particles -->
		<link href='../css/particles/particles.css' rel='stylesheet'>
		<!-- Products -->
		<link href='../css/products/products.css' rel='stylesheet'>
		<!-- Downloads -->
		<link href='../css/downloads/downloads.css' rel='stylesheet'>
		<!-- YT Link -->
		<link href='../css/youtube_link/youtube_link.css' rel='stylesheet'>
		<!-- footer -->
		<link href='../css/footer/footer.css' rel='stylesheet'>

		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-18320013-14', 'auto');
			ga('send', 'pageview');
		</script>

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
			include('../sections/menu/ES/menu.php');
		?>

		<?php
			include('../sections/header/header.php');
		?>


		<!-- <div id='bg_particles'> -->
			<?php
				include('../sections/videos/ES/videos.php')
			?>

			<?php
				include('../sections/characters/ES/characters.php');
			?>
		<!-- </div> -->
		<?php 
			include('../sections/products/ES/products.php');
		?>

		<?php 
			include('../sections/downloads/ES/downloads.php');
		?>

		<?php 
			// include('../sections/youtube_link/youtube_link.php');
		?>

		<?php 
			include('../sections/footer/ES/footer.php');
		?>

		
		<!-- JS -->
		<script src='../js/libraries/jquery_min.js'></script>
		<!-- <script src='../js/libraries/jquery.mobile-1.4.5.min.js'></script> -->
		<!-- <script src='../js/libraries/slick.min.js'></script> -->
		<!-- <script src='../js/libraries/flickity.js'></script> -->
		<script src='../js/libraries/owl.carousel.js'></script>

		<!-- Menu -->
		<script src='../js/menu/menu.js'></script>

		<!-- Header -->
		<script src='../js/header/header.js'></script>

		<!-- videos interaction -->
		<script src='../js/videos/ES/videos_script.js'></script>
		<!-- <script src='../js/videos/videos_script_old.js'></script> -->

		<!-- Characters js -->
		<script src='../js/characters/ES/characters.js'></script>
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
