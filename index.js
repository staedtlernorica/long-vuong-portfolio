// FOR POTENTIAL FUTURE USE WITH CHAING NAVBAR COLOR
// https://usefulangle.com/post/113/javascript-detecting-element-visible-during-scroll



// ILL GOTTEN GAIN FROM W3SCHOOL EXAMPLE
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

const mobileMenuOpened = document.querySelector('nav ul').style.top === '56.8px'

isElementInViewport();

if (prevScrollpos > currentScrollPos) {
  document.getElementsByClassName("navAndDarkMode")[0].style.top = "0";

    // dont dissappear topNav if mobileMenu is opened
} else if(prevScrollpos < currentScrollPos && !mobileMenuOpened) {
    document.getElementsByClassName("navAndDarkMode")[0].style.top = "-62px";
}
  prevScrollpos = currentScrollPos;
}



// https://stackoverflow.com/a/7557433/6030118

function isElementInViewport () {

    const topBar = document.querySelector('.navAndDarkMode')
    const resumeSection = document.querySelector('section.skills');
    const contactSection = document.querySelector('section.contact');
    const navUl = document.querySelector('nav ul');
    const hamburger = document.querySelector('i[class="fas fa-bars"]');
    const hamburger = document.querySelector('i[class="fas fa-bars"]');

    var rect1 = resumeSection.getBoundingClientRect();
    var rect2 = contactSection.getBoundingClientRect();
    
    // no more negative margins h2 so now just have 0 instead of 55
    (rect1.top < 0 && rect1.bottom > 0) || (rect2.top < 0) ?
    (topBar.style.backgroundColor = 'rgba(232, 190, 163, 0.97)', navUl.style.backgroundColor = 'rgba(232, 190, 163, 0.97)', hamburger.style.backgroundColor = 'rgba(232, 190, 163, 0.97)') :  
    (topBar.style.backgroundColor = 'rgba(254, 250, 224, 0.97)', navUl.style.backgroundColor = 'rgba(254, 250, 224, 0.97)', hamburger.style.backgroundColor = 'rgba(254, 250, 224, 0.97)') 
}





document.querySelectorAll('.navAndDarkMode i').forEach((button) => {
  button.addEventListener('click', event => {
    handleNavButton(event)
  })
})


function handleNavButton(button){
  // console.log(button)

  const navAndDarkMode = document.querySelector('.navAndDarkMode')
  const navUl = document.querySelector('nav ul')

  if(button.target.className.includes('moon')){

    button.target.className === 'far fa-moon' 
    ? (button.target.className = 'fas fa-moon', button.target.style.transform = 'translate(5px, 5px)', alert('put on some sunglasses for now'))
    : (button.target.className = 'far fa-moon', button.target.style.transform = 'translate(0, 0px)')

  }else{
    button.target.style.transform === 'rotate(90deg)'
    ? (button.target.style.transform = 'rotate(0deg)', 
    // navUl.style.display = 'none', 
    // navAndDarkMode.style.borderBottom = '', 
    // navUl.style.top = '-113px',
    navUl.style.color = 'transparent',
    navUl.style.border = 'transparent 3px solid',
    navUl.style.top = '-180px')
    : (button.target.style.transform = 'rotate(90deg)', 
    // navUl.style.display = 'flex', 
    // navAndDarkMode.style.borderBottom = '3px rgb(172, 172, 172) solid', 
    navUl.style.top = '56.8px',
    navUl.style.border = '3px solid rgb(172, 172, 172)',
    navUl.style.borderTop = '0px solid rgb(172, 172, 172)',
    navUl.style.color = '#222')
  }
}