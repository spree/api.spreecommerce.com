---
  title: "Core | Models | Calculators"
  has_toc: true
---

## Calculators

Spree makes extensive use of the Spree::Calculator model and there are several
subclasses provided to deal with various types of calculations (flat rate,
percentage discount, sales tax, VAT, etc.) All calculators extend the
Spree::Calculator class and must provide the following methods:

    def self.description
      # Human readable description of the calculator
    end

    def compute(object=nil)
      # Returns the value after performing the required calculation
    end

## Available Calculators

### Default Tax

For information about this calculator, please read the "Taxation" guide.

### Flat Percent Per Item Total

This calculator has one preference: `flat_percent` and can be set like this:

    calculator.preferred_flat_percent = 10

This calculator takes an order and calculates an amount using this calculation:

    [item total] x [flat percentage]

For example, if an order had an item total of $31 and the calculator was
configured to have a flat percent amount of 10, the discount would be $3.10,
because:

    $31 x 10% = $3.10 

### Flat Rate

This calculator can be used to provide a flat rate discount.

This calculator has two preferences: `amount` and `currency`. These can be set
like this:

    calculator.preferred_amount = 10
    calculator.currency = "USD"

This calculator can take any object and will return simply the preferred amount.

### Flexi Rate

This calculator is typically used for promotional discounts when you want a
specific discount for the first product, and then subsequent discounts for other
products, up until a certain amount.

This calculator takes three preferences:

* `first_item`: The discounted price of the items.
* `max_items`: The maximum number of items this discount applies to.
* `additional_item`: The discounted price of subsequent items.

The calculator computes based on this:

([first item discount] x [max items]) + ([items_count] - [max items] x [additional item discount])





