export function libary() {
    if(typeof window !== undefined) {
        $ = window.$;
      
        $(".back-to-top a").click(function(n) {
            n.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 500)
        });
        $(window).scroll(function() {
            $(document).scrollTop() > 1e3 ? $(".back-to-top").addClass("display") : $(".back-to-top").removeClass("display")
        }); 
    
        $('#grid-sort').mixitup();

        $(document).ready(function(){
            let $html=$('.nav-desktop').html(); 
            
            $('.nav-mobie').html($html);
            
        
            var overlay = $('.sidebar-overlay');
            $('.sidebar-toggle').on('click', function() {
                var sidebar = $('#sidebar');
                sidebar.toggleClass('open');
                overlay.addClass('active');
            });
            overlay.on('click', function() {
                $(this).removeClass('active');
                $('#sidebar').removeClass('open');
            });  
            $('.nav-mobie li .a-open-down').on('click', function() {
                $(this).removeAttr('href');
                var element = $(this).parent('li');
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('li').removeClass('open');
                    element.find('ul').slideUp();
                } else {
                    element.addClass('open');
                    element.children('ul').slideDown();
                    element.siblings('li').children('ul').slideUp();
                    element.siblings('li').removeClass('open');
                    element.siblings('li').find('li').removeClass('open');
                    element.siblings('li').find('ul').slideUp();
                }
            }); 
            var slideTop = $('#akr_home');
            slideTop.owlCarousel({
                autoPlay: 3000,
                navigation: false,
                pagination: false,
                slideSpeed: 500,
                paginationSpeed: 500,
                singleItem: true ,
                pagination : true,
            });
            $('#akr_home_prev').click(function () {
                slideTop.trigger('owl.next');
            })
            $('#akr_home_next').click(function () {
                slideTop.trigger('owl.prev');
            })   
             $("#slide-pro-home").owlCarousel({ 
                autoPlay: 3000,
                navigation: false,
                pagination: false,
                slideSpeed: 500,
                paginationSpeed: 500,
                singleItem: true ,
                pagination : true,
            });  
            $(".owl-prolist").owlCarousel({ 
                slideSpeed: 300,
                items: 5,
                itemsCustom: false,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [979, 3],
                itemsTablet: [768, 2],
                itemsTabletSmall: false,
                itemsMobile: [580, 1],
                autoPlay: true,
                stopOnHover: true,
                addClassActive: true,
                autoHeight: true,
                responsive: true,
                navigation: true,
                pagination: false,
                navigationText: ["", ""],
            }); 
            $("#owl-blogs").owlCarousel({ 
                slideSpeed: 300,
                items: 3,
                itemsCustom: false,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3],
                itemsTablet: [768, 2],
                itemsTabletSmall: false,
                itemsMobile: [580, 1],
                autoPlay: true,
                stopOnHover: true,
                addClassActive: true,
                autoHeight: true,
                responsive: true,
                navigation: true,
                pagination: false,
                navigationText: ["‹", "›"],
            }); 
            $("#owl-pdl-images").owlCarousel({ 
                slideSpeed: 300,
                items: 1,
                itemsCustom: false,
                itemsDesktop: [1199, 1],
                itemsDesktopSmall: [979, 1],
                itemsTablet: [768, 1],
                itemsTabletSmall: false,
                itemsMobile: [580, 1],
                autoPlay: true,
                stopOnHover: true,
                addClassActive: true,
                autoHeight: true,
                responsive: true,
                navigation: true,
                pagination: true,
                navigationText: ["‹", "›"],
            });   
            $('.product-info-row .bg-article.expand').readmore({
                speed: 500,
                collapsedHeight: 100,
                moreLink:'<div class="show-more"><a href="#" class=" btn  ">Xem thêm + </a></div>',
                lessLink:'<div class="show-more"><a href="#" class="btn ">Thu gọn - </a></div>',
                blockCSS: 'display:inline-block;',
            }); 
        })
        
        sizeSegment();
        $(window).on("resize", function () {
            sizeSegment();
        });
        function sizeSegment() {
            let windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
            let windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
        
            // alert(windowHeight);
        
            if (windowHeight < 250) {
                windowHeight = windowHeight * 1.5;
            }
        
            $(".main-img-bg").css({
                'height': windowHeight + "px",
                'width': windowWidth + "px"
            });
        }
    }
} 
