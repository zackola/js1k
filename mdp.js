a = function() {
  var m = Math;
  var r = m.random;
  var R = m.round;
  var f = m.floor;

  var compute_color = function(c)
  {   
    var red   = (c < 0.5) ? (c * 2) : ((1.0 - c) * 2);
    var green = (c >= 0.3 && c < 0.8) ? ((c - 0.3) * 2) : (c < 0.3) ? ((0.3 - c) * 2) : (1.3 - c) * 2;
    var blue  = (c >= 0.5) ? ((c - 0.5) * 2) : ((0.5 - c) * 2);
    return 'rgb(' + R(red * 255) + ',' + R(green * 255) + ',' + R(blue * 255) + ')';
  };

  var displace = function(num){
    var max = num / (width + height) * 10;
    return (r() - 0.5) * max;
  };

  var average_colors = function(array) {
    var num     = array.length;
    var total   = 0;
    for(var i = 0; i < num; i++ ) {
      total += array[i];
    }
    return (total / num);
  };

  var iterate = function(x, y, w, h, c1, c2, c3, c4) {
    if (w > 1 || h > 1) {
      var new_w = f(w / 2);
      var new_h = f(h / 2);

      var midpoint = average_colors([c1, c2, c3, c4]) + displace(new_w + new_h);
      if (midpoint < 0)
        midpoint = 0;
      else if (midpoint > 1.0)
        midpoint = 1.0;
    
      var e1 = average_colors([c1, c2]);
      var e2 = average_colors([c2, c3]);
      var e3 = average_colors([c3, c4]);
      var e4 = average_colors([c4, c1]);
    
      iterate(x, y, new_w, new_h, c1, e1, midpoint, e4);
      iterate(x + new_w, y, new_w, new_h, e1, c2, e2, midpoint);
      iterate(x + new_w, y + new_h, new_w, new_h, midpoint, e2, c3, e3);
      iterate(x, y + new_h, new_w, new_h, e4, midpoint, e3, c4);
    } else  {
      map[y][x] = average_colors([c1, c2, c3, c4]);
    }
  };
  
  var cycle = function() {
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        map[y][x] += 0.02;
        if (map[y][x] > 1.0) 
          map[y][x] = 0.0;
      }
    }
    render();
  };
  
  var render = function() {
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        context.scale(0.5);
        context.fillStyle = compute_color(map[y][x]);
        context.fillRect(x + x*scale, y + y*scale, scale, scale);
      }
    }
    setTimeout(function() { cycle(); }, 50);
  };
  
  var go = function() {
    iterate(0, 0, width, height, r(), r(), r(), r());
    render();
  };

  var canvas  = document.getElementById("c");
  var context = canvas.getContext("2d");
  var i_w  = window.innerWidth-20;
  var i_h  = window.innerHeight-20;
  var biggest  = (i_w >= i_h) ? i_h : i_w;
  var width   = 128;
  var height  = 128;
  var scale   = biggest / width;
  canvas.width = biggest;
  canvas.height = biggest;

  var map = new Array(height);
  for (var y = 0; y < height; y++) {
    map[y] = new Array(width);
  }

  go();
}();