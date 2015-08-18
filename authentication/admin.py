from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from authentication.forms import AccountChangeForm
from authentication.models import Account


class AccountAdmin(UserAdmin):
    form = AccountChangeForm

    fieldsets = UserAdmin.fieldsets + (
        (None, {
            'fields': ('default_place',)
        }),
    )

admin.site.register(Account, AccountAdmin)
