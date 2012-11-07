---
title: Return Authorizations | Spree API
---

# Return Authorizations API

<%= admin_only %>

* TOC
{:toc}

## List return authorizations 

To list all return authorizations for an order, make a request like this:

    GET /api/orders/R1234567/return_authorizations

### Response

<%= headers 200 %>
<%= json(:return_authorization) { |h| [h] } %>

## A single return authorization

To get information for a single return authorization, make a request like this:

     GET /api/orders/R1234567/return_authorizations/1

### Response

<%= headers 200 %>
<%= json(:return_authorization) %>

## Creating a return authorization

<%= admin_only %>

To create a return authorization, make a request like this:

     POST /api/orders/R1234567/return_authorizations

For instance, if you want to create a return authorization with a number, make
this request:

     POST /api/orders/R1234567/return_authorizations?return_authorization[number]=123456

## Response

<%= headers 201 %>
<%= json(:return_authorization) %>

## Updating a return authorization

<%= admin_only %>

To update a return authorization, make a request like this:

     PUT /api/orders/R1234567/return_authorizations/1

For instance, to update a return authorization's number, make this request:

     PUT /api/orders/R1234567/return_authorizations/1?return_authorization[number]=123456

### Response

<%= headers 200 %>
<%= json(:return_authorization) %>

## Deleting a return authorization 

<%= admin_only %>

To delete a return authorization, make a request like this:

    DELETE /api/orders/R1234567/return_authorizations/1

### Response

<%= headers 204 %>

