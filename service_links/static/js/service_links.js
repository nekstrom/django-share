$(function() {
    url = document.location;
    // Get Number of Facebook Shares
    $.getJSON('http://graph.facebook.com/'+url+'&callback=?',
        function(data) {  
            $('.service-link-facebook .button').attr("target", "_blank");   
            $('.service-link-facebook .button').attr("href", "http://www.facebook.com/sharer.php?u=" + url); // should make it overidable
            $('.service-link-facebook .count').append(data.shares);
    });

    // Get Number of Tweet Count
    $.getJSON('http://urls.api.twitter.com/1/urls/count.json?url='+url+'&callback=?',
        function(data) {
            $('.service-link-twitter .button').attr("target", "_blank"); 
            $('.service-link-twitter .button').attr("href", "https://twitter.com/share?url=" + url); // should make it overidable
            $('.service-link-twitter .count').append(data.count);
    });
});