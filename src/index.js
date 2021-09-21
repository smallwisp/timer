'use strict';
    
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePhoto from './modules/changePhoto';
import checkInputsAll from './modules/checkInputsAll';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

// Timer
countTimer('10 september 2021');
// Меню
toggleMenu();
// popup
togglePopUp();
// tabs
tabs();
// slider
slider();
// our team
changePhoto();
// checking all inputs
checkInputsAll();
// calc
calc(100);
// send ajax form
sendForm();