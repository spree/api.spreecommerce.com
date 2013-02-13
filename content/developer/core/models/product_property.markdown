---
  title: "Core | Models | Product Properties"
---

# Product Properties

Product properties track individual attributes for a
[Product](/developer/core/models/product) which don't typically apply to
products. These are typically additional information about the item. For
instance, a T-Shirt may have properties representing information about the kind
of material used, as well as the type of fit the shirt is.

Product properties should not be confused with [Option
Values](/developer/core/models/option_values), which are used when defining
unique [Variants](/developer/core/models/variants) for a product.

You can retrieve the value for a property on a `Product` object by calling the
`property` method on it and passing through that property's name:

<%= ruby do %>
  product.property("material")
  => "100% Cotton"
<% end %> 

You can set a property on a product by calling the `set_property` method:

<%= ruby do %>
  product.set_property("material", "100% cotton")
<% end %>

If this property doesn't already exist, a new `Property` instance with this name
will be created.
