import './style';
import './svg/google.svg';

define(['jquery'], ($) => {
    let form = '';
    $('#specification-search').change(function(){
        const value = $(this).val();
        const box = $('.budget__form-specification');

        if(form !== value){
            form = value;
            box.attr('aria-hidden', true).slideUp();
            $(`#${ value }`)
                .attr('aria-hidden', false)
                .slideDown();
        }
        
    });
});