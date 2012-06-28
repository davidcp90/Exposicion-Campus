/**
 * @author David Felipe Camargo Polo
 */

 window.onload = function() {
        var canvas = document.getElementById('canvasEj');
        var context = canvas.getContext('2d');

        context.beginPath();
        context.rect(0, 0, 200, 100);
        // create radial gradient
        var grd = context.createRadialGradient(138, 50, 10, 138, 50, 200);
        // light blue
        grd.addColorStop(0, "#8E66FF");
        // dark blue
        grd.addColorStop(1, "#094CB3");
        context.fillStyle = grd;
        context.fill();
        context.font = "40px Arial";
        context.fillStyle = "white";
        context.fillText("Canvas", 40, 60);
        context.lineWidth = 5;
        context.strokeStyle = 'black';
        context.stroke();
      };
      
		for (var i =0; i< naves.length;i++){
	        
	        var vel=Math.sqrt(naves[i].vx*naves[i].vx+naves[i].vy+naves[i].vy);
	        if (vel>=PG.velMax){
	                
	                naves[i].vx *= PG.velMax/vel;
	                naves[i].vx *= PG.velMax/vel;
	        }
	        
	        naves[i].vx*=PG.friccion;
	        naves[i].vy*=PG.friccion;
	        
		}
		}
	        
		
        