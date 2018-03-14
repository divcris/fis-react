{% extends 'app:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "app:widget/message/message.tpl"%}
     </div>
{% require "app:page/index.tpl" %}{% endblock %}