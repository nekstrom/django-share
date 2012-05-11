import urlparse

from django.template import Library
from django.utils.http import urlquote
from django.conf import settings

register = Library()

@register.simple_tag
def service_links_css():
	return "<link href='" + settings.STATIC_URL +"css/service_links.css' type='text/css' rel='stylesheet' />"

@register.simple_tag
def service_links_js():
	return "<script src='" + settings.STATIC_URL +"js/service_links.js' type='text/javascript'></script>"

@register.inclusion_tag('service_links/links.html', takes_context=True)
def service_links(context, providers=None):
  providers = {
  	'facebook',
  	'twitter',
  	'email',
  	#'googleplus',
  }
  return {'providers':providers}