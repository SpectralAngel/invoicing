from rest_framework import serializers

from invoice.models import Invoice, Sale


class InvoiceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Invoice

    fields = (
        'id', 'costumer', 'account', 'place', 'number', 'created', 'discount'
    )
    read_only_fields = ('id', 'created',)


class SaleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Sale

    fields = ('id', 'invoice', 'product', 'quantity', 'price', 'tax', 'total',)
    read_only_fields = ('id', 'created',)
