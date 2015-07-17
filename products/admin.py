from django.contrib import admin

# Register your models here.
from products.models import ProductTemplate


class ProductTemplateAdmin(admin.ModelAdmin):
    list_display = ['name', 'part_number', 'price', 'cost', 'active']
    ordering = ['name', 'part_number', 'price', 'cost', 'active']

admin.site.register(ProductTemplate, ProductTemplateAdmin)
