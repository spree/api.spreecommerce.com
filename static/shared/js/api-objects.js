// window.onload = function() {  

//   // Polygon drawing
//   function polygon(x, y, size, sides, rotate) {
//     var self = this; 

//     self.centrePoint = [x,y]; 
//     self.size = size; 
//     self.sides = sides; 
//     self.rotated = rotate; 
//     self.sizeMultiplier = 50; 
//     self.points = []; 

//     for (i = 0; i < sides; i++) { 
//       self.points.push([(
//                        x + 
//                        (self.size * self.sizeMultiplier) * 
//                        (rotate ? 
//                           Math.sin(2 * 3.14159265 * i / sides) : 
//                           Math.cos(2 * 3.14159265 * i / sides)
//                        )
//                       ), 
//                       (
//                        y + 
//                        (self.size * self.sizeMultiplier) * 
//                        (rotate ?
//                          Math.cos(2 * 3.14159265 * i / sides) : 
//                          Math.sin(2 * 3.14159265 * i / sides)
//                        )
//                       )
//                       ]); 
//     } 

//     self.svgString = 'M' + self.points.join(' ') + ' L Z'; 
//   }

//   // Canvas
//   var canvas = new Raphael(document.getElementById('api-objects'), 960, 400);

//   var h_attr = {
//     stroke:         "#9FBBEA",
//     "stroke-width": "2",
//     fill:           "white",
//     "fill-opacity": "0.2"
//   }

//   var t_attr = {
//     fill:           "white",
//     "font-size":    "13px",
//     "font-family":  "Menlo",
//     "fill-opacity": 0.2
//   }

//   var line_items = canvas.path(new polygon(57, 74, 1.05, 6, false).svgString)                 
//                  .attr(h_attr)
//                  .attr("href", "/v1/products")
//                  .hover(function(icontext){
//                     this.animate({"fill-opacity": "1"}, 200);
//                     line_items_text.animate({"fill": "#007CDB", "fill-opacity": 1}, 200)
//                  }, function(){
//                     this.animate({"fill-opacity": "0.2"}, 200);
//                     line_items_text.animate({"fill-opacity": 0.2, "fill": "white"}, 200)
//                  })
//                  .rotate(90);  

//   var line_items_text = canvas.text(57, 74, "LINE ITEMS")
//                         .attr(t_attr)


// } 