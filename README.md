### Django Share

Django Share allow users to share a web page in various social networks like bookmarking services, social blogs and similiar.

Template tags:
==============

    {% load share %}

first load the tag file

    {{share_css}}
    {{share_js}}
    
Needed css and js files for the sharing services    
    
    {{share}}    
    
Renders a lsiting for all enabled providers
    
Providers
=========

    facebook
    twitter
 
custom providers
   
    email