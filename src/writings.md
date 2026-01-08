---
title: writings
layout: base.njk
---

i like to write to organise my thoughts and express things, here's a collection of some of the more complete pieces (often from my notes app):
{% for post in collections.writings | reverse %}
  [{{post.data.title}}](/writings/{{post.data.page.fileSlug}}) - {{ post.page.date.toLocaleDateString("en-UK") }}
{% endfor %}