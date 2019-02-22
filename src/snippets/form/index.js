import 'sumoselect/sumoselect.min.css';
import './style';
import check from './svg/check.svg';

define(['jquery', 'sumoselect'], function($){
    $('.form__show-pass').click(function(){
        const controls = $(this).attr('aria-controls');
        const type = $(controls).attr('type') == 'password' ? 'text' : 'password';
        const text = $(this).text() == 'exibir senha' ? 'ocultar senha' : 'exibir senha';
        $(this).text(text);
        $(controls).attr('type', type);
    });

    // Sumo Select 
    $('select').SumoSelect({search: true, searchText: 'O que procura ?'});
});