import './style.css';
import Salmon from './salmon.jpg';

function makeBanner(){
    const element = document.createElement('div');

    element.classList.add('banner');
    
    return element
}

const content = document.querySelector('#content');

content.appendChild(makeBanner());
