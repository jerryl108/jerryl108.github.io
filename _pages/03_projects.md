---
layout: page
title: Projects
permalink: /projects/
header-text: "A portfolio of some of my projects."
---

This page will be a portfolio of my projects.
<ul>
<!--
<li><h3><a href="/projects/coding">Coding</a></h3></li>
<li>
<h3><a href="/projects/media">Media</a></h3>
multimedia projects including videos, photos, and graphic design
</li>
<li><h3><a href="/projects/writing">Writing</a></h3></li>
-->
{% for pg in site.pages %}
{% if pg.nav-parent == page.title %}
    <li>
    <h3><a href="{{ pg.url | prepend: site.baseurl }}">{{ pg.title }}</a></h3>
    {{ pg.description }}
    </li>
{% endif %}
{% endfor %}
</ul>
