### Django Share

Django Share allow users to share a web page in various social networks like bookmarking services, social blogs and similiar.

Installation
==============

Add to installed_apps:

    'share',
    
Include url patterns

    (r'^share/', include('share.urls')),

Load the template tags where needed

    {% load share %}

Template tags
==============

    {{share_css}}
    {{share_js}}
    
Needed css and js files for the sharing services    
    
    {{share}}    
    
Renders a listing for all enabled providers

Templates
=========

The default listing can found at ``share/links.html``

All providers will be avaiable at ''share/providers/[provider].html''

ex: ''share/providers/facebook.html''
    
Providers
=========

    facebook
    twitter
 
custom providers
   
    email