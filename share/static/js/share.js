$(function() {
    url = document.location;
    
    // Facebook
    $.getJSON('http://graph.facebook.com/'+url+'&callback=?',
        function(data) {  
            $('.share-facebook .button').attr("target", "_blank");   
            $('.share-facebook .button').attr("href", "http://www.facebook.com/sharer.php?u=" + url); // should make it overidable
            $('.share-facebook .count').append(data.shares);
    });

    // Twitter
    $.getJSON('http://urls.api.twitter.com/1/urls/count.json?url='+url+'&callback=?',
        function(data) {
            $('.share-twitter .button').attr("target", "_blank"); 
            $('.share-twitter .button').attr("href", "https://twitter.com/share?url=" + url); // should make it overidable
            $('.share-twitter .count').append(data.count);
    });
});