from rest_framework import viewsets, permissions
from products.models import ProductTemplate
from products.serializers import ProductTemplateSerializer


class ProductTemplateViewSet(viewsets.ModelViewSet):
    queryset = ProductTemplate.objects.all()
    serializer_class = ProductTemplateSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return permissions.AllowAny(),

        return permissions.IsAuthenticated(),
