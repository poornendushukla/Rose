var canvas, context, width, height;
var t = 0;
function rose(theta, n, d, amplitude) {
    var k = n / d;
    var x = amplitude * Math.cos(k * theta) * Math.cos(theta);
    var y = amplitude * Math.cos(k * theta) * Math.sin(theta);  
    return {"x":x, "y": y};
  }
  
  function point(x, y, context) {
      context.beginPath();
      context.arc(x, y, 1, 0, 2 * Math.PI, true);
      context.stroke();
  }
  
  function setup() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    context.shadowBlur = 15;
    context.shadowColor = '#fff';
    
    context.strokeStyle = 'rgba(255, 255, 255, 255)';
  }
  
  function loop() {
    window.requestAnimationFrame(loop);
  
    context.translate(width/2, height/2); 
    var n = document.getElementById('numerator').value;
    var d = document.getElementById('denomenator').value;
    var p = rose(t, n, d, 100.0);
    point(p.x, p.y, context);
    context.translate(-width/2, -height/2); 
    
    t += 0.05;
  }
  
  function initialize(){
    setup();
    loop();
  }
  