# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0001_initial'),
        ('people', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='costumer',
            name='addresses',
            field=models.ManyToManyField(to='people.Address'),
        ),
        migrations.AddField(
            model_name='company',
            name='addresses',
            field=models.ManyToManyField(to='people.Address'),
        ),
    ]
