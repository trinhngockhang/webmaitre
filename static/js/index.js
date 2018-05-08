document.documentElement.className = document.documentElement.className + ' yes-js js_active js';

(function (html) { html.className = html.className.replace(/\bno-js\b/, 'js') })(document.documentElement);

window._wpemojiSettings = { "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.3\/72x72\/", "ext": ".png", "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.3\/svg\/", "svgExt": ".svg", "source": { "concatemoji": "http:\/\/flatsome3.uxthemes.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.8.4" } };
!function (a, b, c) {
    function d(a) {
        var b, c, d, e, f = String.fromCharCode; if (!k || !k.fillText) return !1;
        switch (k.clearRect(0, 0, j.width, j.height), k.textBaseline = "top", k.font = "600 32px Arial", a) { case "flag": return k.fillText(f(55356, 56826, 55356, 56819), 0, 0), b = j.toDataURL(), k.clearRect(0, 0, j.width, j.height), k.fillText(f(55356, 56826, 8203, 55356, 56819), 0, 0), c = j.toDataURL(), b !== c && (k.clearRect(0, 0, j.width, j.height), k.fillText(f(55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447), 0, 0), b = j.toDataURL(), k.clearRect(0, 0, j.width, j.height), k.fillText(f(55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447), 0, 0), c = j.toDataURL(), b !== c); case "emoji4": return k.fillText(f(55358, 56794, 8205, 9794, 65039), 0, 0), d = j.toDataURL(), k.clearRect(0, 0, j.width, j.height), k.fillText(f(55358, 56794, 8203, 9794, 65039), 0, 0), e = j.toDataURL(), d !== e }return !1
    } function e(a) { var c = b.createElement("script"); c.src = a, c.defer = c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c) } var f, g, h, i, j = b.createElement("canvas"), k = j.getContext && j.getContext("2d"); for (i = Array("flag", "emoji4"), c.supports = { everything: !0, everythingExceptFlag: !0 }, h = 0; h < i.length; h++)c.supports[i[h]] = d(i[h]), c.supports.everything = c.supports.everything && c.supports[i[h]], "flag" !== i[h] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[i[h]]); c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function () { c.DOMReady = !0 }, c.supports.everything || (g = function () { c.readyCallback() }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1)) : (a.attachEvent("onload", g), b.attachEvent("onreadystatechange", function () { "complete" === b.readyState && c.readyCallback() })), f = c.source || {}, f.concatemoji ? e(f.concatemoji) : f.wpemoji && f.twemoji && (e(f.twemoji), e(f.wpemoji)))
}(window, document, window._wpemojiSettings);


jQuery('.header #menu-item-9823').replaceWith(jQuery('#shop-menu-replace').html());

var fl_icons = document.createElement('link');
fl_icons.rel = 'stylesheet';
fl_icons.href = 'http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/themes/flatsome/assets/css/fl-icons.css';
fl_icons.type = 'text/css';
var fl_icons_insert = document.getElementsByTagName('link')[0];
fl_icons_insert.parentNode.insertBefore(fl_icons, fl_icons_insert);





// ---
jQuery("#wrapper a:not(.not), .mobile-sidebar a").each(function () {
    var link = jQuery(this).attr("href");
    var link_end = "?style=";
    var style = "layout-simple-slider";
    if (link) {
        if (link.indexOf('style=') > -1) return;
        if (link.indexOf('?') > -1) { link_end = "&style="; }
        if (link.indexOf('#') > -1) { link_end = ""; style = "" }
        jQuery(this).attr("href", link + link_end + style);
    }
});

// Remove from demos
jQuery('#menu-item-3219 a, .logo a').each(function () {
    var old = jQuery(this).attr('href');
    old = old.replace("&style=layout-simple-slider", "");
    old = old.replace("?style=layout-simple-slider", "");
    jQuery(this).attr('href', old);
});

jQuery('#wrapper .cart-item').hover(function () {
    jQuery(this).find('a').each(function () {
        var link = jQuery(this).attr("href");
        var link_end = "?style=";
        var style = "layout-simple-slider";
        if (link) {
            if (link.indexOf('?') > -1) { link_end = "&style="; }
            if (link.indexOf('#') > -1) { link_end = ""; style = "" }
            jQuery(this).attr("href", link + link_end + style);
        }
    });
});



(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-84502185-1', 'auto');
ga('send', 'pageview');



// ---
(function (w, d) {
    var b = d.getElementsByTagName("body")[0];
    var s = d.createElement("script"); s.async = true;
    var v = !("IntersectionObserver" in w) ? "8.5.2" : "10.3.5";
    s.src = "http://flatsome3.uxthemes.com/wp-content/plugins/wp-rocket/inc/front/js/lazyload-" + v + ".min.js";
    w.lazyLoadOptions = {
        elements_selector: "img, iframe",
        data_src: "lazy-src",
        data_srcset: "lazy-srcset",
        skip_invisible: false,
        class_loading: "lazyloading",
        class_loaded: "lazyloaded",
        threshold: 300,
        callback_load: function (element) {
            if (element.tagName === "IFRAME" && element.dataset.rocketLazyload == "fitvidscompatible") {
                if (element.classList.contains("lazyloaded")) {
                    if (typeof window.jQuery != "undefined") {
                        if (jQuery.fn.fitVids) {
                            jQuery(element).parent().fitVids();
                        }
                    }
                }
            }
        }
    }; // Your options here. See "recipes" for more information about async.
    b.appendChild(s);
}(window, document));

// Listen to the Initialized event
window.addEventListener('LazyLoad::Initialized', function (e) {
    // Get the instance and puts it in the lazyLoadInstance variable
    var lazyLoadInstance = e.detail.instance;

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            lazyLoadInstance.update();
        });
    });

    var b = document.getElementsByTagName("body")[0];
    var config = { childList: true, subtree: true };

    observer.observe(b, config);
}, false);