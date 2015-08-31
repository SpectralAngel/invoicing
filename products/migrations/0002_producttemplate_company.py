# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0002_auto_20150730_1147'),
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='producttemplate',
            name='company',
            field=models.ForeignKey(blank=True, to='company.Company', null=True),
        ),
    ]
