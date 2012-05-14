from django.conf import settings

providers = {
  'main': {'facebook', 'twitter', 'pinterest',},
  'more': {'email',},
}

SHARE_PROVIDERS = getattr(settings, 'SHARE_PROVIDERS', providers)