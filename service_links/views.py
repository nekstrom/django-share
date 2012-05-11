from django.views.generic.edit import FormView
from service_links.forms import EmailForm

class EmailFormView(FormView):
	form_class = EmailForm
	template_name = 'service_links/email_form.html'
	pass
