---
  title: "Core | Models | Order"
---

# Order

The Order model is one of the central models in Spree, providing a central place to
collect information about the order, including [Line Items](/developer/core/models/line_item),
  [Adjustments](/developer/core/models/adjustment),
  [Payments](/developer/core/models/payment),
[Addresses](/developer/core/models/address), [Return
  Authorizations](/developer/core/models/return_authorizations), [Inventory
  Units](/developer/core/models/inventory_unit) and
  [Shipments](/developer/core/models/shipments).

Every order that is created within Spree is given its own unique identifier,
beginning with the letter R and ending in a 9-digit number. This unique number
is shown to the users, and can be used to find the Order by calling
`Spree::Order.find_by_number(number)`.

## The Order State Machine

Orders flow through a state machine, beginning at a "cart" start and ending up
at a "complete" state. The intermediary states can be configured using the
[Checkout Flow API](/developer/core/customization/checkout_flow).

The default states are as follows:

* Cart
* Address
* Delivery
* Payment
* Confirm
* Complete

The "Payment" state will only be triggered if
[`Spree::Order#payment_required?`](/api/classes/Spree::Order/methods/payment_required?)
returns `true`.

The "Confirm" state will only be triggered if
[`Spree::Order#confirmation_required?`](/api/classes/Spree::Order/methods/confirmation_required?)
returns `true`.

The "Complete" state can only be reached in one of two states:

1. No payment is required on the order.
2. Payment is required on the order, and at least the order total has been
received as payment.


