import './style';

const button = document.querySelector('.menu__button');

button.addEventListener('click',(evt)=>{
    const current = evt.currentTarget;
    const expanded = current.getAttribute('aria-expanded') == 'true';
    const evtMenu = new CustomEvent('MENU', { 'detail': !expanded });
    
    current.setAttribute('aria-expanded',  expanded ? false : true);
    document.dispatchEvent(evtMenu);
});

const main = document.querySelector('.menu__main');

document.addEventListener('MENU', function (e) { 
    const expanded = e.detail;
    main.setAttribute('aria-expanded', expanded);
}, false);