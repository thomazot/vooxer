import './style'

define(['jquery'], ($) =>{
    $('.faq__label').click(function(){
        $(this).closest('.faq__item').toggleClass('on');
        $(this).next().slideToggle();
    })
});