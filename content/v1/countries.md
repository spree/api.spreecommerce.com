---
title: Countries | GitHub API
---

# Country API

* TOC
{:toc}

## Listing countries

Retrieve a list of all countries by making this request:

    GET /api/countries

### Response

<%= headers 200 %>
<%= json(:country) { |h| [h] } %>

## A single country

Retrieve details about a particular country: 

    GET /api/country

### Response

<%= headers 200 %>
<%= json(:country) %>
