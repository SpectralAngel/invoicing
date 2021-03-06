# -*- coding: utf-8 -*-
"""invoicing URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from __future__ import unicode_literals
from django.conf.urls import include, url
from django.contrib import admin

from rest_framework_nested import routers

from authentication.views import AccountViewSet
from company.views import CostumerViewSet, AccountCostumersViewSet, \
    CompanyViewSet, PlaceViewSet, AccountCompanyViewSet, AccountPlacesViewSet
from invoice.views import InvoiceViewSet, SaleViewSet, InvoiceDetailView
from invoicing.views import IndexView
from products.views import ProductTemplateViewSet

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)
router.register(r'costumers', CostumerViewSet)
router.register(r'companies', CompanyViewSet)
router.register(r'places', PlaceViewSet)
router.register(r'invoices', InvoiceViewSet)
router.register(r'sales', SaleViewSet)
router.register(r'products', ProductTemplateViewSet)

costumer_router = routers.NestedSimpleRouter(
    router, r'accounts', lookup='account'
)

costumer_router.register(r'costumers', AccountCostumersViewSet)
costumer_router.register(r'companies', AccountCompanyViewSet)
costumer_router.register(r'places', AccountPlacesViewSet)

urlpatterns = [
    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/', include(costumer_router.urls)),

    url(r'^invoice/(?P<pk>\d+)$', InvoiceDetailView.as_view(), name='invoice'),

    url(r'^auth/', include('djoser.urls.authtoken')),

    url(r'^api/v1/api-auth/',
        include('rest_framework.urls', namespace='rest_framework')),
    # url(r'^docs/', include('rest_framework_swagger.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url('^$', IndexView.as_view(), name='index'),
]
