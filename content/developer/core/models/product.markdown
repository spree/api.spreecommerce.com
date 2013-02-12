---
  title: "Core | Models | Product"
---

# Product

Product records track unique products within your store. These differ from
[Variants](/developer/core/models/variant), which track the unique variations of
a product. For instance, a product that's a T-shirt would have variants denoting
its different colors.

Products can have many [Product
Properties](/developer/core/models/product_properties), which are displayed
along with product information when a user views the product in the checkout.

The price on a product can be different in different currencies. For more
information, please see the [Prices](/developer/core/models/price) guide. If a
product does not have a price set for the current currency
(`Spree::Config[:currency]`) then that product will not appear in the frontend.
