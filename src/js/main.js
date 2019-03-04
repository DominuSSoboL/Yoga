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
        var trans =  $('.navbar-menu').css('transform');

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
