from django.contrib import admin

# Register your models here.
from invoice.models import Invoice, Sale


class InvoiceAdmin(admin.ModelAdmin):
    list_display = ['costumer', 'place', 'account', 'discount', 'closed', 'created']
    ordering = ['discount', 'closed', 'created']


class SaleAdmin(admin.ModelAdmin):
    list_display = ['invoice', 'product', 'quantity', 'price', 'tax', 'total']
    ordering = ['invoice', 'product', 'quantity', 'price', 'tax', 'total']


admin.site.register(Invoice, InvoiceAdmin)
admin.site.register(Sale, SaleAdmin)
