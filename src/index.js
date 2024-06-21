import {storyTitle, storyContent } from './story.js';
import './style.css';
import {menuTitle, menuContent } from './menu.js';
import { contactHeading,contactAddress } from './contact.js';

const body = document.querySelector('body');
// Nav-bar............................................
  const navBar = document.createElement('nav');
  navBar.classList="nav-bar";
body.appendChild(navBar);
// Nav-Bar Title.....................................
const navTitle = document.createElement('h1');
navTitle.classList='title';
navTitle.innerHTML ='Tiffin Service'
navBar.appendChild(navTitle);

// Div for buttons ..................................... 
const buttonDiv = document.createElement('div');
buttonDiv.classList="btn-div";
navBar.appendChild(buttonDiv);
const storyBtn = document.createElement('button');
storyBtn.classList = "story-btn";
storyBtn.innerHTML='Our Story'
storyBtn.type='submit';
buttonDiv.appendChild(storyBtn);
const menuBtn = document.createElement('button');
menuBtn.type='submit';
menuBtn.classList='menu-btn';
menuBtn.innerHTML='Menu'
buttonDiv.appendChild(menuBtn);
const contactBtn = document.createElement('button');
contactBtn.type='submit';
contactBtn.classList='contact-btn';
contactBtn.innerHTML ='Contact Us';
buttonDiv.appendChild(contactBtn);
// Content  Div .............................................
const contentDiv = document.createElement('div');
contentDiv.classList='content-div';
body.appendChild(contentDiv);
// Event Listener on each buttons................................
let buttonArr=[];
buttonArr.push(storyBtn,menuBtn,contactBtn);
console.log(buttonArr);
buttonArr.forEach(btn => {
btn.addEventListener('click',(event)=>{
if (event.target.classList =='story-btn'){
  contentDiv.textContent="";
contentDiv.appendChild(storyTitle);
contentDiv.appendChild(storyContent);
}else if (event.target.classList == 'menu-btn'){
  contentDiv.textContent="";
contentDiv.appendChild(menuTitle);
contentDiv.appendChild(menuContent);
}else if (event.target.classList == 'contact-btn'){
  contentDiv.textContent="";
  contentDiv.appendChild(contactHeading);
  contentDiv.appendChild(contactAddress);

}
})  
});
