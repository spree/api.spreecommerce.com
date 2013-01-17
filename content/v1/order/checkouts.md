---
title: Checkouts
---

# Checkouts API

* TOC
{:toc}

## Introduction

The checkout API functionality can be used to advance an existing order's state. Sending a `PUT` request to `/api/checkouts/ORDER_NUMBER` will advance an order's state or, failing that, report any errors.

The checkout API can also be used to create a new, empty order. Send a `POST` request to `/api/checkouts` in order to accomplish this.

The following sections will walk through creating a new order and advancing an order from its `cart` state to its `complete state.

## Creating a new order 

To create a new, empty order, make this request:

    POST /api/checkouts


### Response

<%= headers 200 %>
<%= json :order %>

## Cart to address

The newly created order is currently in the `cart` state. After [adding line items](/v1/order/line_items) to the order, it can be advanced to its next state, `address`, by making this request:

    PUT /api/checkouts/R335381310

### Response

<%= headers 200 %>
<%= json(:order_show_address_state) %>

## Address to delivery

After [updating the order's addresses](/v1/orders/#modifying-address-information) the order can be advanced to the `delivery` state and the available shipping methods can be viewed by making this request:

    PUT /api/checkouts/R335381310

### Response

<%= headers 200 %>
<%= json(:order_show_delivery_state) %>

## Delivery to payment

After [selecting a shipping method](/v1/orders/#selecting-a-delivery-method) the order can be advanced to the `payment` state and the available payment methods can be viewed by making this request:

    PUT /api/checkouts/R335381310

### Response

<%= headers 201 %>
<%= json(:order_show_payment_state) %>

## Payment to confirm

After [creating a payment](/v1/order/payments/#a-new-payment) the order can be advanced to the `confirm` state by making this request:

    PUT /api/checkouts/R335381310

### Response

<%= headers 200 %>
<%= json(:order_show_confirm_state) %>

## Confirm to complete

Now the order is ready to be advanced to the final state, `complete`. To accomplish this, make this request:

    PUT /api/checkouts/R335381310

### Response

<%= headers 200 %>
<%= json (:order_show_complete_state) %>
