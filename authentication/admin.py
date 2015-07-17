from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from authentication.forms import AccountForm
from authentication.models import Account


class AccountAdmin(UserAdmin):
    form = AccountForm

admin.site.register(Account, UserAdmin)
