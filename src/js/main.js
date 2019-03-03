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
        $('.navbar-menu.navbar-menu--collapse').toggleClass('navbar-menu--active');
    });
    
    // Add collaps class for menu
    function setOptionCollapse(){
        if ( $(window).width() < 992 ) {
            $('.navbar-header').addClass('navbar-header--collapse');
            $('.navbar-menu').addClass('navbar-menu--collapse');
        } else {
            $('.navbar-header').removeClass('navbar-header--collapse');
            $('.navbar-menu').removeClass('navbar-menu--collapse');
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
   
	$('#openSliderModal').click(function(){
		$('.contact-modal').addClass('modal-active');
	});

});
