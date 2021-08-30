$('.owl-carousel').owlCarousel({
    loop:true, // Os filmes se repetem ao chegar no final
    margin:10, 
    nav:false, // setinhas de navegação
    responsive:{
        0:{
            items:1
        },
        400:{ // se a tela tiver 600 pixels ou menos
            items:2
        },
        600:{ // se a tela tiver 600 pixels ou menos
            items:4
        },
        1000:{
            items:6
        }
    }
})