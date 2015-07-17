from django.contrib.auth.forms import UserChangeForm
from authentication.models import Account


class AccountForm(UserChangeForm):
    class Meta(UserChangeForm.Meta):
        model = Account
