from django import forms
from django.core import validators

class Employeeform(forms.Form):
    error_css_class = "error"
    emp_name=forms.CharField(max_length=250,required=True,widget=forms.TextInput(attrs={'class': "form-control input-lg","placeholder":'Employee name'}))
    email = forms.CharField(max_length=250,widget=forms.TextInput(attrs={'class': "form-control input-lg","placeholder":'Email'}))
    designation= forms.CharField(max_length=250,required=True,widget=forms.TextInput(attrs={'class': "form-control input-lg","placeholder":'Designation'}))
    profile = forms.ImageField(required=True)
