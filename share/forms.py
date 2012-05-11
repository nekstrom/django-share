from django import forms
from django.forms import *

class EmailForm(forms.Form):
  email_to = EmailField(required=True)
  email_from = EmailField(required=True)
  message = CharField(required=False)