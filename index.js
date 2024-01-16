const target = document.querySelectorAll('[data-anime]');
const animationClass= 'animate';

function animeScroll(){
  const windowTop = window.pageYOffset+((window.innerHeight*3)/4);

  target.forEach(function(element){
    if((windowTop)>element.offsetTop){
        element.classList.add(animationClass)
    }else{
        element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length){
  window.addEventListener('scroll',() => {
    animeScroll();
  })
}

$(document).ready(() => {
  $('.effects-mouse').on('mouseenter', (e) => {
      x=e.pageX - $(this).offset().left,
      y=e.pageY - $(this).offset().top;
     $(this).find('span').css({top:y,left:x}) 
  })

  $('.effects-mouse').on('mouseout', (e) => {
     x=e.pageX - $(this).offset().left,
     y=e.pageY - $(this).offset().top;
    $(this).find('span').css({top:y,left:x}) 
  })

  $('.open-menu-mobile').hide();

  $('.close').click(() => {
    $('.open-menu-mobile').slideToggle();
  });

  $('.menu-mobile, .list-menu').click((event) => {
    if (!$(event.target).hasClass('close')) {
      $('.open-menu-mobile').slideToggle();
    }
  });
 });


 
 

