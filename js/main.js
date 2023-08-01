$(document).ready(function(){
    $('.interesting__slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                },
               
            }
        ]
    });

   
  });

  const showTag = document.getElementById('showTag')
const hideTag = document.getElementById('hideTag')
const back = document.getElementById('back')

showTag.addEventListener('click', ()=> {
    hideTag.style.display = 'flex'
    showTag.style.display = 'none'
})
back.addEventListener('click', ()=> {
    hideTag.style.display = 'none'
    showTag.style.display = 'block'
})

    

  $('.it-voyage__slider').slick({
    slidesToShow: 4,
    dots: true,
    responsive:[
        {
            breakpoint: 1310,
            settings: {
              slidesToShow: 3,
            }
          },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            },
           
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
           
        },
        
    ]
});





    const showMore = document.getElementById('show-more')
    const first = document.getElementById('first')
    const second = document.getElementById('second')
    const thirst = document.getElementById('thirst')

showMore.addEventListener('click', () => {
    first.style.display = 'block'
    second.style.display = 'block'
    thirst.style.display = 'block'
    showMore.style.display = 'none'
})
