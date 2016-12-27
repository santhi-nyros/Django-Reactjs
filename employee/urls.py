from django.conf.urls import url
from . import views
from django.conf import settings
from django.views.generic import TemplateView
from rest_framework import routers
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
  url(r'^$', TemplateView.as_view(template_name='view1.html')),
  url(r'^add_emp', views.AddEmployee, name="AddEmp"),
  url(r'^update_emp', views.UpdateEmployee, name="UpdateEmp")
]
urlpatterns+=staticfiles_urlpatterns()
