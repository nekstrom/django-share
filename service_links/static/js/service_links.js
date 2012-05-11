$(function() {
    url = "http://www.nu.nl/";

    // Get Number of Facebook Shares
    $.getJSON('http://graph.facebook.com/'+url+'&callback=?',
        function(data) {
            $('.service-link-facebook .count').append(data.shares);
    });

    // Get Number of Tweet Count
    $.getJSON('http://urls.api.twitter.com/1/urls/count.json?url='+url+'&callback=?',
        function(data) {
            $('.service-link-twitter .count').append(data.count);
    });
});