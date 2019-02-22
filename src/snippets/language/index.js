import './style';
import isTouch from "Core/libs/isTouch";
import './svg/br.svg';
import './svg/es.svg';
import './svg/en.svg'; 

const button = document.querySelector('.language');
const event = isTouch() ? 'click' : 'mouseover';

if(event == 'click') {
    button.addEventListener(event,(evt)=>{
        const current = evt.currentTarget;
        current.setAttribute('aria-expanded', current.getAttribute('aria-expanded') == 'true' ? false : true);
    });
} else {
    button.addEventListener('mouseenter',(evt)=>{
        const current = evt.currentTarget;
        current.setAttribute('aria-expanded', current.getAttribute('aria-expanded') == 'true' ? false : true);
    });
    button.addEventListener('mouseleave',(evt)=>{
        const current = evt.currentTarget;
        current.setAttribute('aria-expanded', current.getAttribute('aria-expanded') == 'true' ? false : true);
    });
}

const language = Array.from(button.querySelectorAll('.language__item'));

language.forEach((lang) => {
    lang.addEventListener('click', (evt) => {
        language.forEach(l => l.setAttribute('aria-selected', 'false'));
        evt.currentTarget.setAttribute('aria-selected', 'true');
    });
}) 