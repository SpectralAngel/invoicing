# Create your views here.
from rest_framework import viewsets, permissions

from invoice.models import Sale, Invoice
from invoice.serializers import SaleSerializer, InvoiceSerializer


class IsOwnerOf(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.user:
            return obj.account == request.user
        return False


class SaleViewSet(viewsets.ModelViewSet):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return permissions.AllowAny(),

        return permissions.IsAuthenticated(),


class InvoiceViewSet(viewsets.ModelViewSet):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return permissions.AllowAny(),

        return permissions.IsAuthenticated(), IsOwnerOf()

    def perform_create(self, serializer):
        serializer.save(account=self.request.user)

        return super(InvoiceViewSet, self).perform_create(serializer)
