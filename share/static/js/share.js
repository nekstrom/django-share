$(function() {
    url = document.location;
    
    // Facebook
    $.getJSON('http://graph.facebook.com/'+url+'&callback=?',
      function(data) {  
          $('.share-facebook-count').text(data.shares);
    });

    // Twitter
    $.getJSON('http://urls.api.twitter.com/1/urls/count.json?url='+url+'&callback=?',
      function(data) {
        $('.share-link-twitter .button').attr("target", "_blank"); 
        $('.share-link-twitter .button').attr("href", "https://twitter.com/share?url=" + url); // should make it overidable
        $('.share-link-twitter .count').text(data.count);
    });

    // Pinterest
    $.getJSON('http://api.pinterest.com/v1/urls/count.json?callback=receiveCount&url=' + url,
      function(data) {  
        $('.share-pinterest-count').text(data.shares);
    });

    // Sliding 'more' actions
    $('.share-bar a.more').click(function() {
      if ($("ul.share-bar-more").hasClass('closed')) {
        $('ul.share-bar-more').removeClass('closed');
        $('ul.share-bar-more').addClass('open');
        $('.share-bar').animate({
          "width": "100%"
        }), 2000;
      } else {
        $('ul.share-bar-more').removeClass('open');
        $('ul.share-bar-more').addClass('closed');
        $('.share-bar').animate({
          "width": "340px"
        }), 2000;
      }
    });    

    // $('.share-bar a.more').click(function() {
    //   $('ul.share-bar-more').slideToggle('slow');
    // });
  /*
  ($ "a[data-toggle=modal]").click ->
  target = ($ @).attr('data-target')
  url = ($ @).attr('href')
  ($ target).load(url)
  */
});