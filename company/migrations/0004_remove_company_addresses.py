# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0003_auto_20150716_1342'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='company',
            name='addresses',
        ),
    ]