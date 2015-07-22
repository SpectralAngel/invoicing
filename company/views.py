from rest_framework import viewsets, permissions
from rest_framework.response import Response
from company.models import Costumer
from company.serializers import CostumerSerializer


class IsOwnerOfCostumer(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.user:
            return obj.account == request.user
        return False


class CostumerViewSet(viewsets.ModelViewSet):
    queryset = Costumer.objects.all()
    serializer_class = CostumerSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return permissions.AllowAny(),

        return permissions.IsAuthenticated(), IsOwnerOfCostumer()

    def perform_create(self, serializer):

        serializer.save(account=self.request.user)

        return super(CostumerViewSet, self).perform_create(serializer)


class AccountCostumersViewSet(viewsets.ModelViewSet):
    queryset = Costumer.objects.select_related('account').all()
    serializer_class = CostumerSerializer

    def list(self, request, account_username=None, **kwargs):
        queryset = self.queryset.filter(account__username=account_username)
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)
