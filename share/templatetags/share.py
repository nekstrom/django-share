import urlparse

from django.template import Library
from django.utils.http import urlquote
from django.conf import settings

register = Library()

@register.simple_tag
def share_css():
	return "<link href='" + settings.STATIC_URL +"css/share.css' type='text/css' rel='stylesheet' />"

@register.simple_tag
def share_js():
	return "<script src='" + settings.STATIC_URL +"js/share.js' type='text/javascript'></script>"

@register.inclusion_tag('share/links.html', takes_context=True)
def share(context, providers=None):
  providers = {
  	'facebook',
  	'twitter',
  	'email',
  	#'googleplus',
  }
  return {'providers': providers}