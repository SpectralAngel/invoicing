from rest_framework import serializers
from authentication.models import Account

from authentication.serializers import AccountSerializer
from company.models import Costumer, Company, Place


class CostumerSerializer(serializers.ModelSerializer):
    """Serializes the :class:`Costumer` for consumption in the API"""
    account = AccountSerializer(read_only=True, required=False)

    class Meta:
        model = Costumer

        fields = ('id', 'account', 'name', 'rtn', 'created',)
        read_only_fields = ('id', 'created')

    def get_validation_exclusion(self):
        exclusions = super(CostumerSerializer, self).get_validation_exclusions()

        return exclusions + ['account']


class CompanySerializer(serializers.HyperlinkedModelSerializer):
    account = serializers.SlugRelatedField(
        slug_field=Account.USERNAME_FIELD,
        queryset=Account.objects.all()
    )
    place_set = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='place-detail'
    )

    class Meta:
        model = Company

        fields = (
            'id', 'account', 'name', 'rtn', 'cai', 'created', 'place_set',
        )
        read_only_fields = ('id', 'created',)

    def get_validation_exclusion(self):
        exclusions = super(CompanySerializer, self).get_validation_exclusions()

        return exclusions + ['account']


class PlaceSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Place

        fields = ('id', 'name', 'company', 'prefix', 'next_receipt_number',
                  'max_emission_date',)
        read_only_fields = ('id', 'created',)

    def get_validation_exclusion(self):
        exclusions = super(PlaceSerializer, self).get_validation_exclusions()

        return exclusions + ['account']
