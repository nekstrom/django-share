from django.conf.urls.defaults import patterns, url
from service_links.views import EmailFormView

urlpatterns = patterns('',
  url(r'^email/$', EmailFormView.as_view(), name='service_links_email'),
)