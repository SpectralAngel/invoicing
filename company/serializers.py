from rest_framework import serializers
from authentication.serializers import AccountSerializer
from company.models import Costumer


class CostumerSerializer(serializers.ModelSerializer):
    account = AccountSerializer(read_only=True, required=False)

    class Meta:
        model = Costumer

        fields = ('id', 'account', 'name', 'rtn', 'created', )
        read_only_fields = ('id', 'created')

    def get_validation_exclusion(self):

        exclusions = super(CostumerSerializer, self).get_validation_exclusions()

        return exclusions + ['account']
