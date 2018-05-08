import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from '../../common/header';
import { Footer } from '../../common/footer';
import { Content } from '../../common/content';
import { Product } from '../../common/content';
import Head from 'next/head';
export default class FeaturePageUi extends React.Component {
    showHeader = () => Header();
    showContents = () => Content();
    showContent = () => {
        return (

            <div>
                <div>
                    <Head>
                        <title>WEB Bán Mái Che</title>
                        <link href="/static/css/index.css" rel="stylesheet" ></link>
                        <link rel="stylesheet" href="/static/css/index.css"></link>
                        <script type="text/javascript" src="/static/js/index.js"></script>
                        
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato%3Aregular%2C700%2C400%2C700%7CDancing+Script%3Aregular%2Cdefault"
                        ></link>
                        
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                        <link rel="profile" href="http://gmpg.org/xfn/11" ></link>
                        <link rel="pingback" href="http://flatsome3.uxthemes.com/xmlrpc.php" ></link>

                        <script type="text/javascript" src="../static/js/index.js"></script>
                        <script src="../static/js/index.js"></script>

                        <link rel="canonical" href="http://flatsome3.uxthemes.com/demos/shop-demos/simple-slider/" ></link>
                        <meta property="og:locale" content="en_US" />
                        <meta property="og:type" content="article" />
                        <meta property="og:title" content="Simple Slider - Flatsome" />
                        <meta property="og:url" content="http://flatsome3.uxthemes.com/demos/shop-demos/simple-slider/" />
                        <meta property="og:site_name" content="Flatsome" />
                        <meta property="og:image" content="http://flatsome3.uxthemes.com/wp-content/uploads/2013/08/simple-slider.jpg" />
                        <meta property="og:image:width" content="435" />
                        <meta property="og:image:height" content="365" />
                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:title" content="Simple Slider - Flatsome" />
                        <meta name="twitter:image" content="http://flatsome3.uxthemes.com/wp-content/uploads/2013/08/simple-slider.jpg" />
                        <link rel='dns-prefetch' href='//fonts.googleapis.com' ></link>
                        <link rel='dns-prefetch' href='//s.w.org' ></link>
                        <link rel="alternate" type="application/rss+xml" title="Flatsome &raquo; Feed" href="http://flatsome3.uxthemes.com/feed/"
                        ></link>
                        <link rel="alternate" type="application/rss+xml" title="Flatsome &raquo; Comments Feed" href="http://flatsome3.uxthemes.com/comments/feed/"
                        ></link>
                        <script type="text/javascript" src="../static/js/index.js"></script>


                        <link rel='stylesheet' id='contact-form-7-css' href='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.0.1'
                            type='text/css' media='all' ></link>
                        <link rel='stylesheet' id='jquery-selectBox-css' href='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/plugins/yith-woocommerce-wishlist/assets/css/jquery.selectBox.css?ver=1.2.0'
                            type='text/css' media='all' ></link>
                        <link rel='stylesheet' id='flatsome-woocommerce-wishlist-css' href='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/themes/flatsome/inc/integrations/wc-yith-wishlist/wishlist.css?ver=3.4'
                            type='text/css' media='all' ></link>
                        <link rel='stylesheet' id='flatsome-main-css' href='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/themes/flatsome/assets/css/flatsome.css?ver=3.5.3'
                            type='text/css' media='all' ></link>
                        <link rel='stylesheet' id='flatsome-shop-css' href='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/themes/flatsome/assets/css/flatsome-shop.css?ver=3.5.3'
                            type='text/css' media='all' ></link>
                        <link rel='stylesheet' id='flatsome-style-css' href='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/themes/flatsome/style.css?ver=3.5.3'
                            type='text/css' media='all' ></link>
                        <script type='text/javascript' src='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-includes/js/jquery/jquery.js?ver=1.12.4'></script>
                        <script type='text/javascript' src='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1'></script>
                        <link rel='https://api.w.org/' href='http://flatsome3.uxthemes.com/wp-json/' ></link>
                        <link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://flatsome3.uxthemes.com/xmlrpc.php?rsd" ></link>
                        <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://flatsome3.uxthemes.com/wp-includes/wlwmanifest.xml"
                        ></link>
                        <link rel='shortlink' href='http://flatsome3.uxthemes.com/?p=501' ></link>
                        <link rel="alternate" type="application/json+oembed" href="http://flatsome3.uxthemes.com/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fflatsome3.uxthemes.com%2Fdemos%2Fshop-demos%2Fsimple-slider%2F"
                        ></link>
                        <link rel="alternate" type="text/xml+oembed" href="http://flatsome3.uxthemes.com/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fflatsome3.uxthemes.com%2Fdemos%2Fshop-demos%2Fsimple-slider%2F&#038;format=xml"
                        ></link>

                        <noscript>

                        </noscript>


                        <link rel="icon" href="http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/uploads/2016/04/cropped-logo_example-280x280.png"
                            sizes="32x32" ></link>
                        <link rel="icon" href="http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/uploads/2016/04/cropped-logo_example-280x280.png"
                            sizes="192x192" ></link>
                        <link rel="apple-touch-icon-precomposed" href="http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/uploads/2016/04/cropped-logo_example-280x280.png"
                        ></link>
                        <meta name="msapplication-TileImage" content="http://flatsome3.uxthemes.com/wp-content/uploads/2016/04/cropped-logo_example-280x280.png"
                        />

                        <style id="custom-css" type="text/css">

                        </style>
                    </Head>
                </div>
            </div>

        );
    }

    showDetail =() => Product();
    showDetailProducts = () => {
        return (
            <div>
                <div>
                    <Head>
                         <link href="/static/css/index.css" rel="stylesheet" ></link>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato%3Aregular%2C700%2C400%2C700%7CDancing+Script%3Aregular%2Cdefault"
                        />
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                        <link rel="profile" href="http://gmpg.org/xfn/11" />
                        <link rel="pingback" href="http://flatsome3.uxthemes.com/xmlrpc.php" />
                        <script type="text/javascript" src="../static/js/detailProducts.js"></script>
                        <script src="../static/js/detailProducts.js"></script>
                        <title>Chi Tiết Sản Phẩm</title>

                        <link rel="canonical" href="http://flatsome3.uxthemes.com/shop/men/osaka-entry-tee-superdry/" />
                        <meta property="og:locale" content="en_US" />
                        <meta property="og:type" content="article" />
                        <meta property="og:title" content="Osaka Entry Tee Superdry 12 - Flatsome" />
                        <meta property="og:description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis massa nec velit commodo lobortis. Quisque diam lacus, tincidunt vitae eros porta, sagittis rhoncus est. Quisque sed justo a erat lobortis gravida."
                        />
                        <meta property="og:url" content="http://flatsome3.uxthemes.com/shop/men/osaka-entry-tee-superdry/" />
                        <meta property="og:site_name" content="Flatsome" />
                        <meta property="og:image" content="http://flatsome3.uxthemes.com/wp-content/uploads/2013/08/538228-0286_1.jpeg" />
                        <meta property="og:image:width" content="1500" />
                        <meta property="og:image:height" content="1909" />
                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis massa nec velit commodo lobortis. Quisque diam lacus, tincidunt vitae eros porta, sagittis rhoncus est. Quisque sed justo a erat lobortis gravida."
                        />
                        <meta name="twitter:title" content="Osaka Entry Tee Superdry 12 - Flatsome" />
                        <meta name="twitter:image" content="http://flatsome3.uxthemes.com/wp-content/uploads/2013/08/538228-0286_1.jpeg" />
                        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
                        <link rel='dns-prefetch' href='//s.w.org' />
                        <link rel="alternate" type="application/rss+xml" title="Flatsome &raquo; Feed" href="http://flatsome3.uxthemes.com/feed/"
                        />
                        <link rel="alternate" type="application/rss+xml" title="Flatsome &raquo; Comments Feed" href="http://flatsome3.uxthemes.com/comments/feed/"
                        />
                        <link rel="alternate" type="application/rss+xml" title="Flatsome &raquo; Osaka Entry Tee Superdry 12 Comments Feed" href="http://flatsome3.uxthemes.com/shop/men/osaka-entry-tee-superdry/feed/"
                        />
                        <script type="text/javascript" src="../static/js/detailProducts.js"></script>

                        <link rel='stylesheet' id='contact-form-7-css' href='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.0.1'
                            type='text/css' media='all' />
                        <link rel='stylesheet' id='photoswipe-css' href='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/plugins/woocommerce/assets/css/photoswipe/photoswipe.css?ver=3.3.3'
                            type='text/css' media='all' />
                        <link rel='stylesheet' id='photoswipe-default-skin-css' href='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/plugins/woocommerce/assets/css/photoswipe/default-skin/default-skin.css?ver=3.3.3'
                            type='text/css' media='all' />
                        <link rel='stylesheet' id='jquery-selectBox-css' href='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/plugins/yith-woocommerce-wishlist/assets/css/jquery.selectBox.css?ver=1.2.0'
                            type='text/css' media='all' />
                        <link rel='stylesheet' id='flatsome-woocommerce-wishlist-css' href='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/themes/flatsome/inc/integrations/wc-yith-wishlist/wishlist.css?ver=3.4'
                            type='text/css' media='all' />
                        <link rel='stylesheet' id='flatsome-main-css' href='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/themes/flatsome/assets/css/flatsome.css?ver=3.5.3'
                            type='text/css' media='all' />
                        <link rel='stylesheet' id='flatsome-shop-css' href='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/themes/flatsome/assets/css/flatsome-shop.css?ver=3.5.3'
                            type='text/css' media='all' />
                        <link rel='stylesheet' id='flatsome-style-css' href='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/themes/flatsome/style.css?ver=3.5.3'
                            type='text/css' media='all' />
                        <script type='text/javascript' src='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-includes/js/jquery/jquery.js?ver=1.12.4'></script>
                        <script type='text/javascript' src='http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1'></script>
                        <link rel='https://api.w.org/' href='http://flatsome3.uxthemes.com/wp-json/' />
                        <link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://flatsome3.uxthemes.com/xmlrpc.php?rsd" />
                        <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://flatsome3.uxthemes.com/wp-includes/wlwmanifest.xml"
                        />
                        <link rel='shortlink' href='http://flatsome3.uxthemes.com/?p=395' />
                        <link rel="alternate" type="application/json+oembed" href="http://flatsome3.uxthemes.com/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fflatsome3.uxthemes.com%2Fshop%2Fmen%2Fosaka-entry-tee-superdry%2F"
                        />
                        <link rel="alternate" type="text/xml+oembed" href="http://flatsome3.uxthemes.com/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fflatsome3.uxthemes.com%2Fshop%2Fmen%2Fosaka-entry-tee-superdry%2F&#038;format=xml"
                        />


                        <link rel="icon" href="http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/uploads/2016/04/cropped-logo_example-280x280.png"
                            sizes="32x32" />
                        <link rel="icon" href="http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/uploads/2016/04/cropped-logo_example-280x280.png"
                            sizes="192x192" />
                        <link rel="apple-touch-icon-precomposed" href="http://fzi4k1gk2dw3t0fqy18sw8qi.wpengine.netdna-cdn.com/wp-content/uploads/2016/04/cropped-logo_example-280x280.png"
                        />
                        <meta name="msapplication-TileImage" content="http://flatsome3.uxthemes.com/wp-content/uploads/2016/04/cropped-logo_example-280x280.png"
                        />

                        <style id="custom-css" type="text/css">
                        </style>
                    </Head>

                </div>
            </div>
        );
    }
    showFooter = () => Footer();

    render() {
        return (
            <div>

                {this.showHeader()}
                {/* {this.showContent()}
                {this.showContents()}  */}
                {this.showDetail()}
                {this.showDetailProducts()} 
                {this.showFooter()}
            </div>
        )
    }
}
