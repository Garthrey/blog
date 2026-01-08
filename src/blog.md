---
title: blog posts
layout: base.njk
---
<p align="center">
  <img src="/_includes/img/viewbanner.png" />
</p>

my thoughts, feelings, and funny images:

{% for post in collections.blog | reverse %}
  [{{post.data.title}}](/blog/{{post.data.page.fileSlug}}) - {{ post.page.date.toLocaleDateString("en-UK") }}
{% endfor %}