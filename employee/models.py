from __future__ import unicode_literals

from django.db import models
from django.utils import timezone
from django.conf import settings
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User
# Create your models here.

class employinfo(models.Model):
    emp_name=models.CharField(max_length=100)
    email = models.EmailField(max_length=250)
    designation=models.CharField(max_length=100)
    profile = models.ImageField(verbose_name='employee profile')
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(auto_now=True)
    performance = models.IntegerField(null=True,default=1)
    team_work = models.IntegerField(null=True,default=1)
    behavioral_skill = models.IntegerField(null=True,default=1)


