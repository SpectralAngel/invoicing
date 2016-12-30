# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.contenttypes.fields import GenericRelation
from django.db import models
from django.utils import timezone
from django.utils.six import python_2_unicode_compatible
from django_extensions.db.models import TimeStampedModel
from django.utils.translation import ugettext_lazy as _

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
class CAI(TimeStampedModel):
    """
    Allows to store the multiple CAI values granted
    """
    cai = models.CharField(max_length=255, blank=True)
    next_correlative = models.IntegerField(default=1)
    max_emission_date = models.DateField(default=timezone.now)
    aproved_range = models.CharField(max_length=255)
    prefix = models.CharField(max_length=255)

    def __str__(self):

        return self.cai


@python_2_unicode_compatible
class Place(TimeStampedModel):
    company = models.ForeignKey(Company)
    name = models.CharField(max_length=255)
    prefix = models.CharField(max_length=255)
    next_receipt_number = models.IntegerField(default=1)
    max_emission_date = models.DateField(default=timezone.now)
    aproved_range = models.CharField(max_length=255)

    def __str__(self):
        return _('{0} en {1}').format(self.company, self.name)


@python_2_unicode_compatible
class Costumer(TimeStampedModel):
    account = models.ForeignKey(Account)
    name = models.CharField(max_length=255)
    rtn = models.CharField(max_length=14)
    addresses = models.ManyToManyField(Address, blank=True)
    phone_numbers = GenericRelation(PhoneNumber)

    def __str__(self):
        return self.name
