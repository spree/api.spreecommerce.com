---
title: Zones | Spree API
---

# Zones API

* TOC
{:toc}

## List zones

To get a list of zones, make this request:


    GET /api/zones

### Response

<%= headers 200 %>
<%= json(:zone) { |h| [h] } %>

## A single zone

To get information for a single zone, make this request:

     GET /api/zones/1

### Response

<%= headers 200 %>
<%= json(:zone) %>

## Create a zone

<%= admin_only %>

To create a zone, make a request like this:

    POST /api/zones

Assuming in this instance that you want to create a zone containing
a zone member which is a `Spree::Country` record with the `id` attribute of 1, send through the parameters like this:

<%= json \
  :zone => {
    :name => "North Pole",
    :zone_members => [
      { 
        :zoneable_type => "Spree::Country",
        :zoneable_id => 1
      }
    ]
  } %>

### Response

<%= headers 201 %>
<%= json(:zone) %>

## Updating a zone

<%= admin_only %>

To update a zone, make a request like this:

    PUT /api/zones/1

To update zone and zone member information, use parameters like this:

<%= json \
  :id => 1,
  :zone => {
    :name => "North Pole",
    :zone_members => [
      { 
        :zoneable_type => "Spree::Country",
        :zoneable_id => 1
      }
    ]
  } %>

### Response

<%= headers 200 %>
<%= json(:zone) %>

## Deleting a zone

<%= admin_only %>

To delete a zone, make a request like this:

    DELETE /api/zones/1

This request will also delete any related `zone_member` records.

### Response

<%= headers 204 %>
