// A $( document ).ready() block.
$( document ).ready(function() {
    

    $('.hamburger-button').click(function(){

        $('.mobile-menu').slideToggle();
        $(this).toggleClass('active');
      });



// This is scroll animation activation
      AOS.init({
          duration:500
      });

});



// THis is for our pop up image gallery

lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
    
});



// THis is for our pop up image gallery BUTTON

lightGallery(document.getElementById('lightgallery-2'), {
    speed: 500,
    download: false
    
});