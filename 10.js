$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:16,
        responsive : {
    0 : {
        items:1
    },
    480 : {
        items:2
    },
    768 : {
        items:3
    }
}
    });
   $(".move").owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'swing',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
   })
   function mygallery(){
       $("#me").lightbox("show");
   }
});