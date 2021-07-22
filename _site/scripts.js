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