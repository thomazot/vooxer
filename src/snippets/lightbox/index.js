import './style';
import './svg/close.svg';

define(['jquery'], ($) => {
    $('[data-component="lightbox"]').each(function() {
        $(this).click(function(evt){ 
            const controls = $(this).attr('aria-controls');
            const hidden  = $(controls).attr('aria-hidden') == "true" ? "false" : "true";
            $(controls).attr('aria-hidden', hidden); console.log('click', $(controls).attr('aria-hidden') )
            evt.preventDefault();
        });
    })
});