import './style';

define(['jquery'], ($) => {
    const body   = $('body');
    const win    = $(window);
    const header = $('#header');
    
    win.scroll(() => {
        checkScroll();
    });

    checkScroll();

    function checkScroll() {
        const scrollTop = win.scrollTop();
        const headerTop = header.outerHeight();

        if(scrollTop > 0) {
            body.addClass('scrolling');
        } else body.removeClass('scrolling');
        
        if(scrollTop > headerTop) {
            body.attr('data-scrolling', 'true');
        } else {
            body.attr('data-scrolling', 'false');
        }
    }
});