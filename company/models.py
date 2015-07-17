from django.contrib.contenttypes.fields import GenericRelation
from django.db import models
from django.utils.six import python_2_unicode_compatible
from django_extensions.db.models import TimeStampedModel
from authentication.models import Account

from people.models import Address, PhoneNumber


@python_2_unicode_compatible
class Company(TimeStampedModel):
    account = models.ForeignKey(Account)
    name = models.CharField(max_length=255)
    rtn = models.CharField(max_length=255)
    cai = models.CharField(max_length=255, blank=True, null=True)
    addresses = GenericRelation(Address)
    phone_numbers = GenericRelation(PhoneNumber)

    def __str__(self):
        return self.name


@python_2_unicode_compatible
class Place(TimeStampedModel):
    company = models.ForeignKey(Company)
    name = models.CharField(max_length=255)
    prefix = models.CharField(max_length=255)
    next_receipt_number = models.IntegerField(default=0)

    def __str__(self):
        return u'{0} en {1}'.format(self.company, self.name)


@python_2_unicode_compatible
class Costumer(TimeStampedModel):
    account = models.ForeignKey(Account)
    name = models.CharField(max_length=255)
    rtn = models.CharField(max_length=14)
    addresses = models.ManyToManyField(Address)
    phone_numbers = GenericRelation(PhoneNumber)

    def __str__(self):
        return self.name
