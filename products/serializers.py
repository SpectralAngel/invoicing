from rest_framework import serializers
from products.models import ProductTemplate


class ProductTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductTemplate

    fields = ('id', 'name', 'part', 'price', 'cost', 'active',)
    read_only_fields = ('id', 'created',)
