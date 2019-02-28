
import './style';
import prev from './svg/prev.svg';
import next from './svg/next.svg';

define(['jquery', 'slick-carousel'], function($){
    $('.partners__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: `<button type="button" class="slick-prev"><svg><use xlink:href="#prev" /></svg></button>`,
        nextArrow: `<button type="button" class="slick-next"><svg><use xlink:href="#next" /></svg></button>`,
        responsive: [
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            }
        ]
    });
});