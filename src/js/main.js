// HEADER
$(document).ready(function(){
    // Add stick class
    $(window).on('scroll', function() { 
        if ( $(this).scrollTop() >= '10') {
            $('.navbar').addClass('navbar-stick');
        } else if ($(this).scrollTop() < '10'){
            $('.navbar').removeClass('navbar-stick');
        }
    });
    // Add activ class for burger
    $('a.navbar-header_burger').click(function(e){
		e.preventDefault();
        $(this).toggleClass('navbar__button-burger--active');
        const trans =  $('.navbar-menu').css('transform');

        if (trans == 'matrix(1, 0, 0, 0, 0, 0)'){
            $('.navbar-menu').css('transform', 'scaleY(1)');
        } else {
            $('.navbar-menu').css('transform', 'scaleY(0)');
        }
    });
    
    // Add collaps class for menu
    function setOptionCollapse(){
        if ( $(window).width() < 992 ) {
            $('.navbar-header').addClass('navbar-header--collapse');
            $('.navbar-menu').addClass('navbar-menu--collapse');
            $('.navbar-menu').css('transform', 'scaleY(0)');
        } else {
            $('.navbar-header').removeClass('navbar-header--collapse');
            $('.navbar-menu').removeClass('navbar-menu--collapse');
            $('.navbar-menu').css('transform', 'scaleY(1)');
        }
    }
    $(window).resize(function() {
        setOptionCollapse();
    });
    setOptionCollapse();

   
    // Smooth scrolling of anchor links and toggle active class
    var $page = $('html, body');
    $('.item-menu a').click(function() {
        $('.item-menu a').removeClass('active');
        $(this).addClass('active');
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
    
});


// Slider
$(document).ready(function(){

    // Add paddign top for slider section
    const headerHeight = $('header.page-header').height();
    $('section.slider').css('paddingTop', headerHeight);

    $('.openSliderModal').click(function(){
        $('.contact-modal').addClass('active-modal');
        $('.bg-contact-modal').fadeIn();

        $('.bg-contact-modal').click(function(){
            $('.contact-modal').removeClass('active-modal');
            $('.bg-contact-modal').fadeOut();
        });
    });
});


// Gallery
$(document).ready(function(){
    

    // Show link to detal
    $('.image-zoom').fadeOut();

    $('.gallery-item').hover(
        function(){ 
            if ( $(window).width() > 600 ) {
                $( this ).children('div.link-to-detail').fadeIn(200);
            }
        },
        function(){ 
            if ( $(window).width() > 600 ) {
                $( this ).children('div.link-to-detail').fadeOut(200); 
            }
        }
    );

    // Show modal
    
    $('.galleryModal-bg').click(function(){
        $('.galleryModal').fadeOut(200);
        $(this).fadeOut(200);
    });

    $('.close-gallery-modal').click(function(){
        $('.galleryModal').fadeOut(200);
        $('.galleryModal-bg').fadeOut(200);
    });

    $('div.link-to-detail').click(function(){

        const imgUrl = $(this).data('imgurl');
        $('.galleryModal .gallary-box-decor img').attr('src', imgUrl);
        $('.galleryModal').fadeIn(200);
        $('.galleryModal-bg').fadeIn(200);
    });
});


// ABOUT US SLIDER
$(document).ready(function(){
    $('button.next').click(function(){
        var currImg = $('img.curry');
        var currentImageIndex = $('.img.curry').index();
        var nexImageIndex =  currentImageIndex + 1;
        var nextImage = $('.img').eq(nexImageIndex);

        if(nexImageIndex == ($('.img:last').index() + 1 )){
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('curry');
        } else {
            nextImage.fadeIn(1000);
            nextImage.addClass('curry');
        }
        currImg.fadeOut(1000);
        currImg.removeClass('curry');
    });

    $('button.prev').click(function(){
        var currImg = $('img.curry');
        var currentImageIndex = $('.img.curry').index();
        var prevImageIndex =  currentImageIndex - 1;
        var prevImage = $('.img').eq(prevImageIndex);

        currImg.fadeOut(1000);
        currImg.removeClass('curry');
        prevImage.fadeIn(1000);
        prevImage.addClass('curry');
    });
});

// SENTENCE
$(document).ready(function(){
    $('.btn-by-table').hover(
        function(){
            var el = $(this).closest('.price-table');
            el.find('.price-table-title').css('backgroundColor', 'rgba(91,108,235,0.8)');
        },
        function(){
            var el = $(this).closest('.price-table');
            el.find('.price-table-title').css('backgroundColor', 'rgba(91,108,235,1)');
        }
    );
});


// REVIEWS SLIDER
$(document).ready(function(){
    $(function() {
        // Owl Carousel
        var owl = $(".owl-carousel");
        owl.owlCarousel({
            items: 1,
            margin: 10,
            loop: true,
            nav: true,
            navText: [
                '<span class="arrow-owl arrow-left"><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 512"><path fill="#5b6ceb" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg></span>',
                '<span class="arrow-owl arrow-right"><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 512"><path fill="#5b6ceb" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></span>'
            ]
        });
            
        owl.on('changed.owl.carousel',function(property){

            var current = property.item.index;

            var src = $(property.target).find(".owl-item").eq(current + 1).find("img").attr('src');
            var position = $(property.target).find(".owl-item").eq(current + 1).find("p.position").text();
            var nameTrainer = $(property.target).find(".owl-item").eq(current + 1).find("p.name").text();
            $('.next-slide .next-slide-avatar img').attr('src', src);
            $('p.next-slide-name').text(nameTrainer);
            $('p.next-slide-position').text(position);
        });
    });
    $(".next_button").click(function(){
        owl.trigger("next.owl.carousel");
    });
        
    $(".prev_button").click(function(){
        owl.trigger("prev.owl.carousel");
    });
});