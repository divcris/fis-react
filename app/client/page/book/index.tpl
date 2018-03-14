{% extends 'app:page/layout.tpl' %}

{% block content %}
    {% script %}
        require('./test.jsx')
    {% endscript %}
{% endblock %}