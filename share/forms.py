from django import forms
from django.forms import *

class EmailForm(forms.Form):
  name = CharField(required=True)