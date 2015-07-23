from rest_framework import serializers
from authentication.serializers import AccountSerializer
from company.serializers import PlaceSerializer
from invoice.models import Invoice


class InvoiceSerializer(serializers.ModelSerializer):
    account = AccountSerializer(read_only=True, required=False)
    place = PlaceSerializer(read_only=True, required=False)

    class Meta:
        model = Invoice

    fields = ('id', 'account', 'name', 'rtn', 'cai', 'created')
    read_only_fields = ('id', 'created', )

    def get_validation_exclusion(self):

        exclusions = super(InvoiceSerializer, self).get_validation_exclusions()

        return exclusions + ['account', 'place']
