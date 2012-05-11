$(function() {
    url = document.location;
    
    // Facebook
    $.getJSON('http://graph.facebook.com/'+url+'&callback=?',
        function(data) {  
            $('.share-link-facebook .button').attr("target", "_blank");   
            $('.share-link-facebook .button').attr("href", "http://www.facebook.com/sharer.php?u=" + url); // should make it overidable
            $('.share-link-facebook .count').append(data.shares);
    });

    // Twitter
    $.getJSON('http://urls.api.twitter.com/1/urls/count.json?url='+url+'&callback=?',
        function(data) {
            $('.share-link-twitter .button').attr("target", "_blank"); 
            $('.share-link-twitter .button').attr("href", "https://twitter.com/share?url=" + url); // should make it overidable
            $('.share-link-twitter .count').append(data.count);
    });
});