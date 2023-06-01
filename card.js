const multipleItemCarousel = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement,{
    interval:2000,
    wrap:false
})


if(window.matchMedia("(min-width:576px)").matches){
   const carousel =new bootstrap.Carousel(myCarouselElement,{
    internal:false
   })

    var carouselwidth= $('.carousel-inner').scrollwidth;
var cardwidth= $('.carousel-item').width();

var scrollposition =0;

$('.carousel-control-next').on('click',function(){
    if(scrollposition < (carouselwidth-(cardwidth*4))){
    console.log('next');
    scrollposition = scrollposition+cardwidth;
$('.carousel-inner').animate({scrollLeft: scrollposition},600);
    }
});
$('.carousel-control-prev').on('click',function(){
    if(scrollposition >0){
    console.log('prev');
    scrollposition = scrollposition-cardwidth;
$('.carousel-inner').animate({scrollLeft: scrollposition},600);
    }
});
}else{
    $(multipleItemCarousel).addClass('slide');
}