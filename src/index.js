import banner from './makeBanner';
import './style.css';

const content = document.createElement('div');
content.setAttribute('id','content');
document.body.appendChild(content);

content.appendChild(banner());