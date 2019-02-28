import './style';
import './svg/google.svg';
import './svg/anexo.svg';

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

    $('#step01 form').submit((evt) => {
        evt.preventDefault();

        $('.steps__step--search').attr('data-steps', 'passed');
        $('.steps__step--user').attr('data-steps', 'current');

        $('#step01').attr('aria-hidden', 'true');
        $('#step02').attr('aria-hidden', 'false');

    });

    $('#step02 form').submit(evt => event.preventDefault());

    $('#step02 button, #step02 a').click(() => {

        $('.steps__step--user').attr('data-steps', 'passed');
        $('.steps__step--money').attr('data-steps', 'current');

        $('#step02').attr('aria-hidden', 'true');
        $('#step03').attr('aria-hidden', 'false');

    });
    $('#step03 form').submit(evt => event.preventDefault());

    $('#step03 button, #step03 a').click(() => {

        $('.steps__step--money').attr('data-steps', 'passed');
        $('.steps__step--filter').attr('data-steps', 'current');

        $('#step03').attr('aria-hidden', 'true');
        $('#step04').attr('aria-hidden', 'false');

    });
});