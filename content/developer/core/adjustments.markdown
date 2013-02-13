---
  title: "Core | Models | Adjustments"
---

# Adjustments

An adjustment in Spree tracks an adjustment to the price of an
[Order](/developer/core/models/order) within Spree. 

Adjustments can be either positive or negative. Adjustments with a positive
value are sometimes referred to as “charges” while adjustments with a negative
value are sometimes referred to as “credits.” These are just terms of
convenience since there is only one Spree::Adjustment model in Spree which
handles this by allowing either positive or negative values.

Adjustments can come from one of three locations:

* [Tax Rates](/developer/core/models/tax_rate)
* [Shipping Methods](/developer/core/models/shipping_method)
* [Promotions](/developer/core/models/promotion)

An adjustment's `label` attribute can be used as a good indicator of where the
adjustment is coming from.

An adjustment links three separate components together:

* A source
* An adjustable
* An originator

The *source* is where an adjustment was triggered from. For tax and promotional
adjustments, this will be the order itself. For shipping adjustments, this will
be the shipment which corresponds with the shipping method for this order.

The *adjustable* is the object being adjusted, which is the order.

The *originator* is the object responsible for the adjustment. For promotional
adjustments, this will be a `Spree::Promotion::Actions::CreateAdjustment`
object. For tax adjustments, a `Spree::TaxRate` object. For shipping
adjustments, a `Spree::ShippingMethod` object.



