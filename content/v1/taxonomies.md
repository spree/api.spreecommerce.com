---
title: Taxonomies | Spree API
---

# Taxonomies API

* TOC
{:toc}

## List taxonomies 

To get a list of all the taxonomies -- including their root nodes and the
immediate children for the root node -- , make a request like this:

    GET /api/taxonomies

### Response

<%= headers 200 %>
<%= json(:taxonomy) { |h| [h] } %>

## A single taxonomy

To get information for a single taxonomy -- including its root node and the immediate children of the root node --, make a request like this:

     GET /api/taxonomies/1

### Response

<%= headers 200 %>
<%= json(:taxonomy) %>

## Creating a taxonomy

<%= admin_only %>

To create a taxonomy, make a request like this:

     POST /api/taxonomies

For instance, if you want to create a taxonomy with the name "Brands", make
this request:

     POST /api/taxonomies?taxonomy[name]=Brand

If you're creating a taxonomy without a root taxon, a root taxon will automatically be
created for you with the same name as the taxon.

## Response

<%= headers 201 %>
<%= json(:new_taxonomy) %>

## Updating a taxonomy

<%= admin_only %>

To update a taxonomy, make a request like this:

     PUT /api/taxonomies/1

For instance, to update a taxonomy's name, make this request:

     PUT /api/taxonomies/1?taxonomy[name]=Brand

### Response

<%= headers 200 %>
<%= json(:taxonomy) %>

## Deleting a taxonomy

<%= admin_only %>

To delete a taxonomy, make a request like this:

    DELETE /api/taxonomies/1

### Response

<%= headers 204 %>

