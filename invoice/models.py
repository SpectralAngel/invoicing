from decimal import Decimal
from django.core.urlresolvers import reverse
from django.db import models
from django.db.models import F, Sum
from django.db.models.functions import Coalesce

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
    discount = models.DecimalField(decimal_places=2, max_digits=3, default=0)
    closed = models.BooleanField(default=False)

    def subtotal(self):

        subtotal = Sale.objects.filter(invoice=self).aggregate(
            total=Sum('total')
        )['total']

        if subtotal is None:
            subtotal = Decimal()

        return subtotal

    def tax(self):

        return Sale.objects.filter(invoice=self).aggregate(
            total=Coalesce(Sum('tax'), Decimal())
        )['total']

    def total(self):

        return self.tax() + self.subtotal() - self.discount

    def __str__(self):
        return u'{0} {1}'.format(self.number, self.costumer.name)

    def save(self, *args, **kwargs):

        if self.pk is None:
            place = self.account.default_place
            self.number = place.next_receipt_number
            place.next_receipt_number = F('next_receipt_number') + 1
            place.save()

        super(Invoice, self).save(*args, **kwargs)

    def get_absolute_url(self):

        return reverse('invoice', args=[self.id])


class Sale(TimeStampedModel):
    invoice = models.ForeignKey(Invoice)
    product = models.ForeignKey(ProductTemplate)
    quantity = models.IntegerField()
    detail = models.CharField(max_length=255, blank=True)
    price = models.DecimalField(decimal_places=2, max_digits=11, blank=True,
                                null=True)
    tax = models.DecimalField(decimal_places=2, max_digits=11, blank=True,
                              null=True)
    total = models.DecimalField(decimal_places=2, max_digits=11, blank=True,
                                null=True)
