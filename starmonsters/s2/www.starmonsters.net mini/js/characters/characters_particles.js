var particles_container=document.getElementById("particles_container"),$particle_positions=[[150,-30],[1400,100],[680,330],[1900,400],[1e3,425],[50,600],[1250,850],[1850,1300],[220,1050],[350,1250],[1100,1500],[100,1800],[600,2300],[-50,2700],[140,3200],[0,3400],[-100,4e3],[40,4650],[150,4900]],$particle_sizes=[1.5,.7,.3,1.7,2.3,2,1.2,2,.3,1.7,1.5,1.2,1.7,1.2,1.5,.3,2,.3,1.7],totalParticles=$particle_sizes.length;$(function(){function e(){for(var e,t=($("#particles").outerWidth(),$("#particles").outerHeight(),0);totalParticles>t;t++){e=document.createElement("div"),e.className="particle";var a=$particle_positions[t][0],i=$particle_positions[t][1],r=256-512*Math.random(),n=$particle_sizes[t],l="translateX( "+a+"px ) translateY( "+i+"px ) translateZ( "+r+"px ) scale( "+n+" )";e.style.webkitTransform=l,e.style.MozTransform=l,e.style.oTransform=l;var s=Math.random();s>=.6?e.style.opacity=.7:s>=.3?e.style.opacity=.4:e.style.opacity=.2,particles_container.appendChild(e),$(".particle").addClass("s2")}return e}e(),window.addEventListener("mousemove",function(e){worldYAngle=180*-(.5-e.clientX/window.innerWidth),worldYAngle/=30,worldXAngle=180*(.5-e.clientY/window.innerHeight),worldXAngle/=15})});