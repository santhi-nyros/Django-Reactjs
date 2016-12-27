from django import forms
# from wtforms import SelectField, TextField, PasswordField, IntegerField,validators, DateField, TextAreaField
from django.core import validators

class Addproductform(forms.Form):
    error_css_class = "error"
    product_name=forms.CharField(max_length=25,min_length=5,required=True,widget=forms.TextInput(attrs={'class': "form-control input-lg","placeholder":'Product name'}))
    price = forms.CharField(max_length=10,min_length=3,widget=forms.TextInput(attrs={'class': "form-control input-lg","placeholder":'Price'}))
    image = forms.ImageField()

# class Employeeform(forms.Form):
#     error_css_class = "error"
#     ename=forms.CharField(max_length=250,required=True,widget=forms.TextInput(attrs={'class': "form-control input-lg","placeholder":'Product name'}))
#     phone = forms.CharField(max_length=250,widget=forms.TextInput(attrs={'class': "form-control input-lg","placeholder":'Price'}))
#     designation= forms.CharField(max_length=250,required=True,widget=forms.TextInput(attrs={'class': "form-control input-lg","placeholder":'Product name'}))
#     image = forms.ImageField(required=True,)

class CommentsForm(forms.Form):
	error_css_class = "error"
	comment = forms.CharField(max_length=250,required=True,widget=forms.Textarea)


class ShippingForm(forms.Form):
	error_css_class = "error"
	OPTIONS = (('Cash on delivery','Cash on delivery'),
				('Spot Payment','Spot Payment'),)
	customer_name = forms.CharField(max_length=25,min_length=3, required=True,widget=forms.TextInput(attrs={'class': "form-control input-lg","placeholder":'Customer name'}))
	phone = forms.IntegerField(required = True,widget=forms.TextInput(attrs={'class':'form-control input-lg','placeholder':'Phone'}))
	street = forms.CharField(required=True,min_length=5,widget=forms.TextInput(attrs={'class':'form-control input-lg','placeholder':'Door.no/Street'}))
	village = forms.CharField(required=True,min_length=5,widget=forms.TextInput(attrs={'class':'form-control input-lg','placeholder':'Village'}))
	city = forms.CharField(required=True,min_length=5,widget=forms.TextInput(attrs={'class':'form-control input-lg','placeholder':'City/Town'}))
	dist = forms.CharField(required=True,min_length=5,widget=forms.TextInput(attrs={'class':'form-control input-lg','placeholder':'District'}))
	pincode = forms.IntegerField(required=True,widget=forms.TextInput(attrs={'class':'form-control input-lg','placeholder':'Pincode'}))
	# address = forms.CharField(max_length=250, required=True, widget=forms.Textarea(attrs={'class':'form-control input-lg','placeholder':'Address'}))
	shipping_type = forms.ChoiceField(widget=forms.Select(attrs={'class': "form-control input-lg","placeholder":'payment type'}),choices=OPTIONS)
