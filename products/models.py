from django.db import models
from django_extensions.db.models import TimeStampedModel


class ProductTemplate(TimeStampedModel):
    name = models.CharField(max_length=255)
    part_number = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=11, decimal_places=2)
    cost = models.DecimalField(max_digits=11, decimal_places=2)
    active = models.BooleanField(default=True)
