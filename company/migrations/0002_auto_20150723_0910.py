# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='costumer',
            name='addresses',
            field=models.ManyToManyField(to='people.Address', null=True, blank=True),
        ),
    ]
