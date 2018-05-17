
window.fbAsyncInit = function() {
    FB.init({
    appId            : '155109208441131',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.12'
    });
};

(function(d, s, id) { 
    console.log("aa");
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));