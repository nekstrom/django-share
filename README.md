### Django Share

Django Share allow users to share a web page in various social networks like bookmarking services, social blogs and similiar.
Most providers included are no using widgets but are based on theyre api's. Meaning you can customise the look and feel of every provider.

Installation
==============

Add to installed_apps:

    'share',
    
Include url patterns

    (r'^share/', include('share.urls')),

Load the template tags where needed

    {% load share_tags %}

Settings
==============

``SHARE_PROVIDERS``

A turple containing providers.

Defaults to:

    {'main': ('facebook', 'twitter', 'pinterest', 'googleplus',),
    'more': ('email', 'print', ),}

Template tags
==============

    {{ share_css }}
    {{ share_js }}
    
Needed css and js files for the sharing services    
    
    {{ share }}    
    
Renders a listing for all enabled providers. Its also possible to limit the list to a selection of providers.

    {{ share facebook twitter }}  
    
Returns a list with the given providers    

Templates
=========

The default listing/widget can found at ``share/links.html``

All providers are avaiable at ``share/providers/[provider].html``

ex: ``share/providers/facebook.html``

You can create a custom provider by adding it the ``SHARE_PROVIDERS`` setting and creating a template for it at: ``share/providers/[provider].html``
    
Included Providers
=========

    facebook
    twitter
    pinterest
    googleplus
 
custom providers
   
    email
    print