// FOR POTENTIAL FUTURE USE WITH CHAING NAVBAR COLOR
// https://usefulangle.com/post/113/javascript-detecting-element-visible-during-scroll


// automatically expanding textarea
// http://jsfiddle.net/n9uuv0hd/80/




// ILL GOTTEN GAIN FROM W3SCHOOL EXAMPLE
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  const mobileMenuOpened = document.querySelector('nav ul').style.top === '26.8px'

  isElementInViewport();

  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navAndDarkMode")[0].style.top = "0";

    // dont dissappear topNav if mobileMenu is opened
  } else if (prevScrollpos < currentScrollPos && !mobileMenuOpened) {
    document.getElementsByClassName("navAndDarkMode")[0].style.top = "-62px";
  }
  prevScrollpos = currentScrollPos;
}



// https://stackoverflow.com/a/7557433/6030118

function isElementInViewport() {

  const resumeSection = document.querySelector('section.skills');
  const contactSection = document.querySelector('section.contact');
  const topBar = document.querySelector('.navAndDarkMode')
  const navUl = document.querySelector('nav ul');
  const navButtons = document.querySelector('.buttons');
  const moonBtn = document.querySelectorAll('.navAndDarkMode button')[0]
  const hamburgerBtn = document.querySelectorAll('.navAndDarkMode button')[1]

  var rect1 = resumeSection.getBoundingClientRect();
  var rect2 = contactSection.getBoundingClientRect();

  // no more negative margins h2 so now just have 0 instead of 55
  (rect1.top < 0 && rect1.bottom > 0) || (rect2.top < 0) ?
    (
      navUl.style.backgroundColor = 'rgba(232, 190, 163, 0.98)',
      topBar.style.backgroundColor = 'rgba(232, 190, 163, 0.98)',
      navButtons.style.backgroundColor = 'rgba(232, 190, 163, 0.98)'
      // hamburgerBtn.style.backgroundColor = 'rgba(232, 190, 163, 0.98)',
      // moonBtn.style.backgroundColor = 'rgba(232, 190, 163, 0.98)'
      ) :
    (
      navUl.style.backgroundColor = 'rgba(254, 250, 224, 0.99)',
      topBar.style.backgroundColor = 'rgba(254, 250, 224, 0.99)',
      navButtons.style.backgroundColor = 'rgba(254, 250, 224, 0.99)'
      // hamburgerBtn.style.backgroundColor = 'rgba(254, 250, 224, 0.99)',
      // moonBtn.style.backgroundColor = 'rgba(254, 250, 224, 0.99)'
      )
}



document.querySelectorAll('.navAndDarkMode i').forEach((button) => {
  button.addEventListener('click', event => {
    handleNavButton(event)
  })
})


function handleNavButton(button) {

  const topBarColor = document.querySelector('.navAndDarkMode').style.backgroundColor;
  const moon = document.querySelectorAll('.navAndDarkMode button')[0]
  const hamb = document.querySelectorAll('.navAndDarkMode button')[1]
  const navUl = document.querySelector('nav ul')

  if (button.target.className.includes('moon')) {

    button.target.className === 'far fa-moon'
      ? (button.target.className = 'fas fa-moon', 
      button.target.style.transform = 'translate(5px, 5px)', 
      alert('put on some sunglasses for now'))
      : (button.target.className = 'far fa-moon', 
      button.target.style.transform = 'translate(0, 0px)')

  } else {
    button.target.style.transform === 'rotate(90deg)'
      ? (button.target.style.transform = 'rotate(0deg)',
        navUl.style.color = 'transparent',
        navUl.style.border = '3px solid transparent',
        navUl.style.top = '-200px',
        moon.style.backgroundColor = '',
        hamb.style.backgroundColor = '')
      : (button.target.style.transform = 'rotate(90deg)',
        navUl.style.top = '26.8px',
        navUl.style.border = '3px solid rgb(172, 172, 172)',
        navUl.style.color = '#222',
        moon.style.backgroundColor = topBarColor,
        hamb.style.backgroundColor = topBarColor)
  }
}