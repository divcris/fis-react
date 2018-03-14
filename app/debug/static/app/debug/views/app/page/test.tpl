{% extends 'app:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "app:widget/test/test.tpl"%}
     </div>
{% require "app:page/test.tpl" %}{% endblock %}