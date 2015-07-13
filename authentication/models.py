from django.db import models
from django.contrib.auth.models import AbstractUser
from company.models import Place


class Account(AbstractUser):

    place = models.ForeignKey(Place)

    def get_full_name(self):
        return ' '.join([self.first_name, self.last_name])

    def get_short_name(self):
        return self.first_name
