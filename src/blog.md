---
title: blog posts
layout: base.njk
---

blog posts:
{% for post in collections.blog | reverse %}
  [{{post.data.title}}](/blog/{{post.data.page.fileSlug}})
{% endfor %} 