import './style'
import './svg/client.svg';
import './svg/partner.svg';
import './svg/payment.svg';
import './svg/service.svg';
import './svg/validation.svg';
import './svg/vooxer.svg';

const business = Array.from(document.querySelectorAll('.business__item'));

business.forEach(bus => {
    bus.addEventListener('click', (evt) => {
        const item = evt.currentTarget;
        resetAll();
        item.setAttribute('aria-expanded', true);
    });
});

function resetAll() {
    business.forEach( bus => bus.setAttribute('aria-expanded', false))
}