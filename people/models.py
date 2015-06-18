from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models
from django_extensions.db.models import TimeStampedModel
from django.utils.translation import ugettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField


class Address(TimeStampedModel):
    line_1 = models.CharField(max_length=255)
    line_2 = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    zip_code = models.CharField(max_length=255)


class PhoneNumber(TimeStampedModel):
    TYPES = (
        (1, _('Main')),
        (2, _('Home')),
        (3, _('Mobile')),
        (4, _('Fax')),
        (5, _('Work')),
        (6, _('Other'))
    )
    content_type = models.ForeignKey(ContentType)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')
    type = models.CharField(max_length=50, choices=TYPES)
    phone_number = PhoneNumberField(blank=True)
