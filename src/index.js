import banner from './makeBanner';
import loadHome from './loadHome';
import loadMenu from './loadMenu';
import loadContact from './loadContact';
import './style.css';

//Create content container
const content = document.createElement('div');
content.setAttribute('id','content');
document.body.appendChild(content);

//Create banner with menu
content.appendChild(banner());

//First load
const stage = document.createElement('div');
stage.classList.add('stage');
stage.setAttribute('id','grid');

loadHome(stage);
content.appendChild(stage);

//Remove Child Node Function
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//Switch select class function
function changeSelected(button){
    if (homeButton.classList.contains('selected')){
        homeButton.classList.remove('selected');
    }
    else if (menuButton.classList.contains('selected')){
        menuButton.classList.remove('selected');
    }
    else if (contactButton.classList.contains('selected')){
        contactButton.classList.remove('selected');
    }
    button.classList.add('selected')
    return button
}

//Selecting menu buttons
const homeButton = document.querySelector('#Home');
const menuButton = document.querySelector('#Menu');
const contactButton = document.querySelector('#Contact');

//Adding click event listen to home button
//To load home content and clean previous content
homeButton.addEventListener('click', () => {
    if (homeButton.classList.contains('selected')){
        return;
    }
    else {
        removeAllChildNodes(stage);
        changeSelected(homeButton);
        loadHome(stage);
    }
})

menuButton.addEventListener('click',() => {
    if (menuButton.classList.contains('selected')){
        return;
    }
    else {
        removeAllChildNodes(stage);
        changeSelected(menuButton);
        loadMenu(stage);
    }
});

contactButton.addEventListener('click',() => {
    if (contactButton.classList.contains('selected')){
        return;
    }
    else {
        removeAllChildNodes(stage);
        changeSelected(contactButton);
        loadContact(stage);
    }
})