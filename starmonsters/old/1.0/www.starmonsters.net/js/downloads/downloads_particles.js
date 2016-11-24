var particles_container_dl = document.getElementById('particles_container_downloads');

// x,y
var $particle_positions_dl = [[120, -35], [570, 10], [700, 80], [1200, -45], [-60, 280], [250, 450], [1110, 550], [1700, 250]];
//  scale
var $particle_sizes_dl = [1.7, 0.2, 1, 2, 0.7, 2, 1.7, 1];

var totalParticles_dl = $particle_sizes_dl.length;

$(function(){

	createParticles_dl();
	// Create Particles divs
	function createParticles_dl(){

		// Get size
		var container_width = $('#particles_downloads').outerWidth();
		var container_height = $('#particles_downloads').outerHeight();

		var div;
		for(var i = 0; i < totalParticles_dl; i++){
			div = document.createElement( 'div' );
			div.className = 'particle';

			var x = $particle_positions_dl[i][0];
			var y = $particle_positions_dl[i][1];
			var z = 256 - ( Math.random() * 512 );

			var s = $particle_sizes_dl[i];
			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) scale( ' + s + ' )';

			div.style.webkitTransform = t;
			div.style.MozTransform = t;
			div.style.oTransform = t;

			var random_opacity = Math.random();
			if (random_opacity >= 0.6) {
				div.style.opacity = 0.7;
			} else if(random_opacity >= 0.3) {
				div.style.opacity = 0.4;
			} else {
				div.style.opacity = 0.2;
			}

			particles_container_dl.appendChild( div );

		}

		return div;
	}


})	