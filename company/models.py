from django.contrib.contenttypes.fields import GenericRelation
from django.db import models
from django_extensions.db.models import TimeStampedModel
from people.models import Address, PhoneNumber


class Company(TimeStampedModel):
    name = models.CharField(max_length=255)
    rtn = models.CharField(max_length=255)
    next_invoice_correlative = models.IntegerField(default=0)
    addresses = models.ManyToManyField(Address)
    phone_numbers = GenericRelation(PhoneNumber)


class Costumer(TimeStampedModel):
    company = models.ForeignKey(Company)
    name = models.CharField(max_length=255)
    rtn = models.CharField(max_length=14)
    addresses = models.ManyToManyField(Address)
    phone_numbers = GenericRelation(PhoneNumber)
