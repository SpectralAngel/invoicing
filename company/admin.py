from django.contrib import admin

# Register your models here.
from company.models import Company, Costumer, Place


class CompanyAdmin(admin.ModelAdmin):
    list_display = ['name', 'rtn', 'cai']
    ordering = ['name', 'rtn', 'cai']


class CostumerAdmin(admin.ModelAdmin):
    list_display = ['name', 'rtn']
    ordering = ['name', 'rtn']


class PlaceAdmin(admin.ModelAdmin):
    list_display = ['company', 'name', 'prefix', 'next_receipt_number']
    ordering = ['company', 'name', 'prefix', 'next_receipt_number']


admin.site.register(Company, CompanyAdmin)
admin.site.register(Costumer, CostumerAdmin)
admin.site.register(Place, PlaceAdmin)
