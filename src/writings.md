---
title: writings
layout: base.njk
---

writings:
{% for post in collections.writings | reverse %}
  [{{post.data.title}}](/writings/{{post.data.page.fileSlug}}) - {{ post.page.date.toLocaleDateString("en-UK") }}
{% endfor %}