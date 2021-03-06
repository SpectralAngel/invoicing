from rest_framework import viewsets, permissions

from company.models import Costumer, Company, Place
from company.serializers import CostumerSerializer, CompanySerializer, \
    PlaceSerializer


class IsOwnerOf(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.user:
            return obj.account == request.user
        return False


class IsOwnerOfPlace(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.user:
            return obj.company.account == request.user
        return False


class CostumerViewSet(viewsets.ModelViewSet):
    queryset = Costumer.objects.all()
    serializer_class = CostumerSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return permissions.AllowAny(),

        return permissions.IsAuthenticated(), IsOwnerOf()

    def perform_create(self, serializer):
        serializer.save(account=self.request.user)

        return super(CostumerViewSet, self).perform_create(serializer)


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return permissions.AllowAny(),

        return permissions.IsAuthenticated(), IsOwnerOf()

    def perform_create(self, serializer):
        serializer.save(account=self.request.user)

        return super(CompanyViewSet, self).perform_create(serializer)


class PlaceViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    filter_fields = ('company',)

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return permissions.AllowAny(),

        return permissions.IsAuthenticated(), IsOwnerOfPlace()


class AccountCostumersViewSet(viewsets.ModelViewSet):
    queryset = Costumer.objects.select_related('account').all()
    serializer_class = CostumerSerializer

    def filter_queryset(self, queryset):
        return self.queryset.filter(account__username=self.account_name)

    def list(self, request, account_username=None, **kwargs):
        self.account_name = account_username

        return super(AccountCostumersViewSet, self).list(request, [], **kwargs)


class CompanyPlacesViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.select_related('company').all()
    serializer_class = CompanySerializer

    def filter_queryset(self, queryset):
        return self.queryset.filter(company=self.company)

    def list(self, request, company=None, **kwargs):
        self.company = Company.objects.get(pk=company)
        return super(CompanyPlacesViewSet, self).list(request, [], **kwargs)


class AccountCompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.select_related('account').all()
    serializer_class = CompanySerializer

    def filter_queryset(self, queryset):
        return self.queryset.filter(account__username=self.account_name)

    def list(self, request, account_username=None, **kwargs):
        self.account_name = account_username

        return super(AccountCompanyViewSet, self).list(request, [], **kwargs)


class AccountPlacesViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.select_related('company__account').all()
    serializer_class = PlaceSerializer

    def filter_queryset(self, queryset):
        return self.queryset.filter(
            company__account__username=self.account_name
        )

    def list(self, request, account_username=None, **kwargs):
        self.account_name = account_username

        return super(AccountPlacesViewSet, self).list(request, [], **kwargs)
