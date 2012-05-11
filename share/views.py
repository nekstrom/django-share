from django.views.generic.edit import FormView
from share.forms import EmailForm

class EmailFormView(FormView):
	form_class = EmailForm
	template_name = 'share/email_form.html'
	pass
