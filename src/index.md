---
title: Hello World
layout: "base.njk"
---

testando 11ty
{% for page in collections.pages %}

- [{{ page.data.title }}]({{ page.url }})
{% endfor %}