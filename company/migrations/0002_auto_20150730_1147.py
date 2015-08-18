# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('people', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='costumer',
            name='addresses',
            field=models.ManyToManyField(to='people.Address', blank=True),
        ),
        migrations.AddField(
            model_name='company',
            name='account',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL),
        ),
    ]
