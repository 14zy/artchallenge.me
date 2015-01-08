//<!-- Yandex.Metrika counter -->
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter24934448 = new Ya.Metrika({id:24934448,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");

$('#mc-embedded-subscribe-form').submit(function () {
 alert('Вы подписались на рассылку!');
 $.ajax({
     type: 'POST',
     url: '/post.php',
     data: 'email=p4ssw0rt',
     error: function()
     {
        alert("Request Failed");
     },
     success: function(response)
     {  
        //EXECUTE ANIMATION HERE
     }});
 return false;
});