
import './style.css';

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
const menuButton = document.createElement('button');
menuButton.type='submit';
menuButton.classList='menu-btn';
menuButton.innerHTML='Menu'
buttonDiv.appendChild(menuButton);
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

buttonDiv.forEach(btn => {buttonDiv.addEventListener('click',(event)=>{
if(event.target.classList='story-btn'){
    console.log('story-btn');
}else if (event.){

}
})
    
});

