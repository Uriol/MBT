var particles_container = document.getElementById('particles_container');

// x,y
var $particle_positions = [[150, -30], [1400, 100], [680, 330], [1900, 400], [1000, 425], [50, 600], [1250, 850] , [1850,1300] ,[220, 1050], [350, 1250], [1100, 1500], [100, 1800], [600, 2300], [-50, 2700], [140, 3200], [0, 3400], [-100, 4000], [40, 4650], [150, 4900]];
//  scale
var $particle_sizes = [1.5, 0.7, 0.3, 1.7, 2.3, 2,  1.2, 2, 0.3, 1.7, 1.5, 1.2, 1.7, 1.2, 1.5, 0.3, 2, 0.3, 1.7];
var totalParticles = $particle_sizes.length;


$(function() { 

	


	createParticles();
	// Create particle divs
	function createParticles() {

		// Get Size
		var container_width = $('#particles').outerWidth();
		var container_height = $('#particles').outerHeight();

		var div;
		for(var i = 0; i < totalParticles; i++) {
			div = document.createElement( 'div' );
			div.className = 'particle';

			// var x = container_width * Math.random();
			// var y = container_height * Math.random();
			var x = $particle_positions[i][0];
			var y = $particle_positions[i][1];
			var z = 256 - ( Math.random() * 512 );
			// var s = 2 * Math.random();
			var s = $particle_sizes[i];
			var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) scale( ' + s + ' )';
			// var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';
			div.style.webkitTransform = t;
			div.style.MozTransform = t;
			div.style.oTransform = t;

			// Opacity
			var random_opacity = Math.random();
			if (random_opacity >= 0.6) {
				div.style.opacity = 0.7;
			} else if(random_opacity >= 0.3) {
				div.style.opacity = 0.4;
			} else {
				div.style.opacity = 0.2;
			}

			particles_container.appendChild( div );
			$('.particle').addClass('s2');

		}

		return div;
	}

	// On mouse move
	window.addEventListener( 'mousemove', function( e ) {

		worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 180;
		worldYAngle = worldYAngle/30;

		worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 180;
		worldXAngle = worldXAngle/15;


	})



});




















	