window.onload = function() {  

  Raphael.fn.arrow = function (x1, y1, x2, y2, size, color) {
      var angle = Math.atan2(x1-x2,y2-y1);
      angle = (angle / (2 * Math.PI)) * 360;
      var arrowPath = this.path("M" + x2 + " " + y2 + " L" + (x2  - size) + " " + (y2  - size) + " L" + (x2  - size)  + " " + (y2  + size) + " L" + x2 + " " + y2 ).attr({"fill": color, "fill-opacity": 1, "stroke": color, "stroke-width": 0}).rotate((90+angle),x2,y2);
      var linePath = this.path("M" + x1 + " " + y1 + " L" + x2 + " " + y2).attr({"fill": color, "fill-opacity": 1, "stroke": color});
      return [linePath,arrowPath];
    };


  // Polygon drawing
  function polygon(x, y, size, sides, rotate) {
    var self = this; 

    self.centrePoint = [x,y]; 
    self.size = size; 
    self.sides = sides; 
    self.rotated = rotate; 
    self.sizeMultiplier = 50; 
    self.points = []; 

    for (i = 0; i < sides; i++) { 
      self.points.push([(
                       x + 
                       (self.size * self.sizeMultiplier) * 
                       (rotate ? 
                          Math.sin(2 * 3.14159265 * i / sides) : 
                          Math.cos(2 * 3.14159265 * i / sides)
                       )
                      ), 
                      (
                       y + 
                       (self.size * self.sizeMultiplier) * 
                       (rotate ?
                         Math.cos(2 * 3.14159265 * i / sides) : 
                         Math.sin(2 * 3.14159265 * i / sides)
                       )
                      )
                      ]); 
    } 

    self.svgString = 'M' + self.points.join(' ') + ' L Z'; 
  }

  // Canvas
  var canvas = new Raphael(document.getElementById('api-objects'), 960, 400);

  var h_attr_out = {
    stroke:         "#9FBBEA",
    "stroke-width": "2",
    fill:           "white",
    "fill-opacity": 0.2
  }

  var h_attr_in = {
    fill: "#78AD2F", 
    "fill-opacity": '1', 
    stroke: '#fff'    
  }

  var t_attr_out = {
    fill:           "white",
    "font-size":    "13px",
    "font-family":  "Menlo",
    "fill-opacity": 0.5
  }

  var t_attr_in = {
    "fill-opacity": 1
  }

  var t_animate_in = function(this_object, hexagon_object) {
    hexagon_object.animate(h_attr_in, 200)
    this_object.animate({"fill": "white", "fill-opacity": 1}, 200)
  }

  var t_animate_out = function(this_object, hexagon_object) {
    hexagon_object.animate(h_attr_out, 200);
    this_object.animate({"fill-opacity": 0.2, "fill": "white"}, 200)
  }

  var h_animate_in = function(this_object, text_object) {
    this_object.animate(h_attr_in, 200)
    text_object.animate(t_attr_in, 200)
  }

  var h_animate_out = function(this_object, text_object) {
    this_object.animate(h_attr_out, 200);
    text_object.animate(t_attr_out, 200)
  }

  function h_object (id, pos_x, pos_y, href, t_object_id) {
    var self          = this;
    self.id           = id;
    self.pos_x        = pos_x;
    self.pos_y        = pos_y;
    self.href         = href;
    self.t_object_id  = t_object_id;

    var path = canvas.path(
                new polygon(self.pos_x, self.pos_y, 1.05, 6, 90).svgString
               );

    path.id = self.id;

    path.data("pos_x", self.pos_x);
    path.data("pos_y", self.pos_y);

    path.attr(h_attr_out);
    path.attr("href", self.href);

    path.hover(function(){
                 h_animate_in(path, canvas.getById(self.t_object_id))
               }, function(){
                 h_animate_out(path, canvas.getById(self.t_object_id))
               })
  }

  function t_object (id, text, h_object_id) {
    var self          = this;
    self.id           = id;
    self.text         = text;
    self.h_object_id  = h_object_id;
    self.pos_x        = canvas.getById(self.h_object_id).data("pos_x");
    self.pos_y        = canvas.getById(self.h_object_id).data("pos_y");

    var path = canvas.text(self.pos_x, self.pos_y, self.text)

    path.id = self.id;

    path.data("pos_x", self.pos_x);
    path.data("pos_y", self.pos_y);

    path.attr(t_attr_out)
    path.attr("href", canvas.getById(self.h_object_id).attr("href"))

    path.hover(function(){
                 t_animate_in(path, canvas.getById(self.h_object_id));
               }, function(){
                 t_animate_out(path, canvas.getById(self.h_object_id));
               })
  }

  // var orders_arrow_1 = canvas.arrow(102, 200, 123, 200, 7, "#9FBBEA");
  // var orders_arrow_2 = canvas.arrow(57, 255, 57, 273, 7, "#9FBBEA");
  // var orders_arrow_3 = canvas.arrow(57, 150, 57, 128, 7, "#9FBBEA");
  // var orders_arrow_4 = canvas.arrow(80, 160, 153, 117, 7, "#9FBBEA");

  var line_items = new h_object("h_line_items", 57, 74, "/v1/order/line_items/", "t_line_items")  
  var line_items_text = new t_object("t_line_items", "LINE ITEMS", "h_line_items")

  var return_auth = new h_object("h_return_auth", 170, 74, "/v1/order/return_authorizations/", "t_return_auth")
  var return_auth_text = new t_object("t_return_auth", "RETURN\nAUTHORI...", "h_return_auth")

  var orders = new h_object("h_orders", 57, 200, "/v1/orders/", "t_orders")
  var orders_text = new t_object("t_orders", "ORDERS", "h_orders")

  var payments = new h_object("h_payments", 170, 200, "/v1/order/payments/", "t_payments")
  var payments_text = new t_object("t_payments", "PAYMENTS", "h_payments")

  var shipments = new h_object("h_shipments", 57, 327, "/v1/order/shipments/", "t_shipments")  
  var shipments_text = new t_object("t_shipments", "SHIPMENTS", "h_shipments")

  var product_properties = new h_object("h_product_properties", 679, 200, "/v1/product/properties/", "t_product_properties")
  var product_properties_text = new t_object("t_product_properties", "PRODUCT\nPROPERTIES", "h_product_properties")

  var variants = new h_object("h_variants", 791, 74, "/v1/variants/", "t_variants")
  var variants_text = new t_object("t_variants", "VARIANTS", "h_variants")

  var images = new h_object("h_images", 905, 74, "/v1/images/", "t_images")
  var images_text = new t_object("t_images", "IMAGES", "h_images")

  var products = new h_object("h_products", 791, 200, "/v1/products/", "t_products")
  var products_text = new t_object("t_products", "PRODUCTS", "h_products")

  var taxons = new h_object("h_taxons", 791, 327, "/v1/taxonomy/taxons/", "t_taxons")
  var taxons_text = new t_object("t_taxons", "TAXONS", "h_taxons")

  var taxonomies = new h_object("h_taxonomies", 905, 327, "/v1/taxonomies/", "t_taxonomies")
  var taxonomies_text = new t_object("t_taxonomies", "TAXONOMIES", "h_taxonomies")

  var zones = new h_object("h_zones", 366, 327, "/v1/zones/", "t_zones")
  var zones_text = new t_object("t_zones", "ZONES", "h_zones")

  var countries = new h_object("h_countries", 477, 327, "/v1/countries/", "t_countries")
  var countries_text = new t_object("t_countries", "COUNTRIES", "h_countries")

  var addresses = new h_object("h_addresses", 588, 327, "/v1/addresses/", "t_addresses")
  var addresses_text = new t_object("t_addresses", "ADDRESSES", "h_addresses")
        
} 