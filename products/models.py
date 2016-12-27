from __future__ import unicode_literals

from django.db import models
from django.utils import timezone
from django.conf import settings
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User
# from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class ProductComments(models.Model):
    product_id = models.ForeignKey('products')
    comment = models.CharField(max_length = 1000)
    created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.product_id



class products(models.Model):
    product_name=models.CharField(max_length=100,blank=True)
    price = models.IntegerField(null=True)
    image = models.ImageField(verbose_name='Product Image')
    created = models.DateTimeField(default=timezone.now)
    product_updated_date = models.DateTimeField(auto_now=True)
    product_rating = models.IntegerField(null=True,default=0)
    product_desc = models.CharField(max_length=2000)


    def __str__(self):
        return self.product



class CartTable(models.Model):
    product_details = models.OneToOneField(products, unique=True,related_name = 'cart_products')


