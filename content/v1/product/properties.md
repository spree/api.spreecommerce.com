---
title: Product Properties | Spree API
---

# Product Properties API

* TOC
{:toc}

<%= warning "Requests to this API will only succeed if the user making them has access to the underlying products. If the user is not an admin and the product is not available yet, users will receive a 404 response from this API." %>

## List product properties

List 

    GET /api/products/1/product_properties

### Response

<%= headers 200 %>
<%= json(:product_property) { |h| { :product_properties => [h] } } %>

## A single product property

To get information about a single product property, make a request like this:

    GET /api/products/1/product_properties/1

Or you can use a property's name:

    GET /api/products/1/product_properties/size

### Response

<%= headers 200 %>
<%= json(:product_property) %>

## Creating a product property

<%= admin_only %>

To create a new product property, make a request like this:

    POST /api/products/1/product_properties?product_property[property_name]=size&product_property[value]=10

If a property with that name does not already exist, then it will automatically be created.

### Response

<%= headers 201 %>
<%= json(:product_property) %>

## Updating a product property

To update an existing product property, make a request like this:

    PUT /api/products/1/product_properties/size?product_property[value]=10

You may also use a property's id if you know it:

    PUT /api/products/1/product_properties/1?product_property[value]=10

### Response

<%= headers 200 %>
<%= json(:product_property) %>

## Deleting a product property

To delete a product property, make a request like this:

    DELETE /api/prducts/1/product_porperties/size

<%= headers 204 %>

