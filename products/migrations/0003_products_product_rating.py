# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-09-08 11:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_remove_products_product_comments'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='product_rating',
            field=models.IntegerField(default=1, null=True),
        ),
    ]
