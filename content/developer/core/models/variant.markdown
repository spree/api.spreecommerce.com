---
  title: "Core | Models | Variant"
---

# Variant

Variant records track the individual variants of a
[Product](/developer/core/models/product). Variants come in two flavours: master
variants and normal variants.

Variant records can track some individual properties regarding a variant, such
as height, width, depth, and cost price. These properties are unique to each
variant, and so are different from [Product
Properties](/developer/core/models/product_properties).

The price on a variant can be different in different currencies. For more
information, please see the [Prices](/developer/core/models/price) guide.

## The Master Variant

Every single product has a master 
variant, which tracks basic information such as a count on hand, a price and a
SKU.

By having a master variant, the code within Spree to track [Line
Items](/developer/core/models/line_item) is simplified.

## Normal Variants

Variants which are not the master variant, are unique based on [Option
Types](/developer/core/models/option_type) and [Option
Values](/developer/core/models/option_value). For instance, you may be selling
a product which is a Baseball Jersey, which comes in the sizes "Small", "Medium"
and "Large", as well as in the colors of "Red", "Green" and "Blue". For this
combination of sizes and colors, you would be able to create 9 unique variants:

* Small, Red
* Small, Green
* Small, Blue
* Medium, Red 
* Medium, Green
* Medium, Blue
* Large, Red
* Large, Green
* Large, Blue


