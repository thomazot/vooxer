import './style';
import './svg/close.svg';

define(['jquery'], ($) => {
    $(document).ready(function(){
        $('[data-component="lightbox"]').click(function(evt){  
            const controls = $(this).attr('aria-controls');
            const hidden  = $(controls).attr('aria-hidden') == "true" ? "false" : "true";
            $(controls).attr('aria-hidden', hidden);
            if(hidden == 'false') {
                $('body').attr('data-fixed', true);
                $('html,body').animate({ scrollTop: $(controls).find('.lightbox__container').offset().top }, 500);
            } else $('body').attr('data-fixed', false);
            evt.preventDefault();
        });
    });
});