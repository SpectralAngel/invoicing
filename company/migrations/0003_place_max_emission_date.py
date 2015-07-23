# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0002_auto_20150723_0910'),
    ]

    operations = [
        migrations.AddField(
            model_name='place',
            name='max_emission_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]
