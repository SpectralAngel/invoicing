# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0002_auto_20150715_1356'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='company',
            name='next_invoice_correlative',
        ),
        migrations.AddField(
            model_name='company',
            name='cai',
            field=models.CharField(max_length=255, null=True, blank=True),
        ),
    ]
