from django.db import models
from django.contrib.auth.models import AbstractUser


class Account(AbstractUser):

    default_place = models.ForeignKey('company.Place', blank=True, null=True)

    def get_full_name(self):
        return ' '.join([self.first_name, self.last_name])

    def get_short_name(self):
        return self.first_name
