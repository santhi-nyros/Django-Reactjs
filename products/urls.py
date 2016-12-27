from django.conf.urls import url
from . import views
from django.conf import settings
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
url(r'^(?P<pid>[A-Za-z0-9\w@%._-]+)/addrating/$', views.updateProductRating, name='update_rating'),
url(r'^view/(?P<pid>[A-Za-z0-9\w@%._-]+)/$', views.addComment, name='view_product'),
]
