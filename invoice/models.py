from django.db import models
from django.db.models import F

from django.utils.encoding import python_2_unicode_compatible

from django_extensions.db.models import TimeStampedModel

from authentication.models import Account
from company.models import Costumer, Place
from products.models import ProductTemplate


@python_2_unicode_compatible
class Invoice(TimeStampedModel):
    costumer = models.ForeignKey(Costumer)
    number = models.IntegerField(default=0)
    place = models.ForeignKey(Place)
    account = models.ForeignKey(Account)

    def __str__(self):
        return u'{0} {1}'.format(self.numero, self.client)

    def save(self, *args, **kwargs):

        if self.pk is None:
            place = self.account.place
            self.number = place.next_receipt_number
            place.next_receipt_number = F('next_receipt_number') + 1
            place.save()

        if self.ciudad is None and self.pk is not None:
            self.ciudad = self.cajero.profile.ciudad

        super(Invoice, self).save(*args, **kwargs)


class Sale(TimeStampedModel):
    invoice = models.ForeignKey(Invoice)
    product = models.ForeignKey(ProductTemplate)
    quantity = models.IntegerField()
    price = models.DecimalField(decimal_places=2, max_digits=11, blank=True,
                                null=True)
    tax = models.DecimalField(decimal_places=2, max_digits=11, blank=True,
                              null=True)
    total = models.DecimalField(decimal_places=2, max_digits=11, blank=True,
                                null=True)
