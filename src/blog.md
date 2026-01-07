---
title: This Is My Blog
layout: base.njk
---

These are all of my amazing blog posts, enjoy!
{% for post in collections.blog | reverse %}
  [{{post.data.title}}](/blog/{{post.data.page.fileSlug}})
{% endfor %}