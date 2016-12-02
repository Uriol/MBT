<?php

	include("geoip.inc"); 
	$gi = geoip_open("GeoIP.dat",GEOIP_STANDARD);

	$origin = geoip_country_code_by_addr($gi, $_SERVER["REMOTE_ADDR"]);
	geoip_close($gi);

	
	if ($origin == 'ES'){
		header('Location: http://www.starmonsters.net/es/index.php');
	} else if ($origin == 'GB') {
		header('Location: http://www.starmonsters.net/uk/index.php');
	} else {
		header('Location: http://www.magicboxint.com');
	}

?>



<!DOCTYPE html>
<html lang='en'>
	<head>
		<title>Star Monsters - Pocket Friends</title>
		<!-- Description -->
		<meta name="description" content="Welcome to the Star Monsters official site! Meet your favourite characters, watch videos, download posters and discover new products! Star Monsters Series 2 is here with lots of surprises!" />
	</head>

	<body>
	</body>

</html>