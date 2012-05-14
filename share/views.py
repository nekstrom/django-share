from django.views.generic.edit import FormView
from share.forms import EmailForm

class EmailFormView(FormView):
  form_class = EmailForm
  template_name = 'share/email_form.html'

  def get_initial(self):
    if self.request.GET:
      data = self.request.GET.copy()
    elif self.request.POST: 
      data = self.request.GET.copy() 
    
    next = data.get("next", None)

    initial = self.initial.copy()
    initial['next'] = next

    return initial

  def get_success_url(self):
    data = self.request.POST.copy()
    next = data.get("next", None)

    if next:
      self.success_url = next

    return super(EmailFormView, self).get_success_url()