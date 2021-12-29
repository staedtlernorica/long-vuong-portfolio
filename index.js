// FOR POTENTIAL FUTURE USE WITH CHAING NAVBAR COLOR
// https://usefulangle.com/post/113/javascript-detecting-element-visible-during-scroll


// automatically expanding textarea
// http://jsfiddle.net/n9uuv0hd/80/


isElementInViewport();

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
    document.getElementsByClassName("navAndDarkMode")[0].style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}



// https://stackoverflow.com/a/7557433/6030118

function isElementInViewport() {

  const navDots = document.querySelectorAll('.pageIndicator i')
  const navDot0 = navDots[0];
  const navDot1 = navDots[1];
  const navDot2 = navDots[2];

  const rect1 = document.querySelector('header').getBoundingClientRect();
  const rect2 = document.querySelector('#demos').getBoundingClientRect();
  const rect3 = document.querySelector('#contact').getBoundingClientRect()


  // chain these together so they feed into one another instead of two of them having to handshake

  rect1.bottom > 320 ?
    navDot0.className = 'fas fa-circle' :
    navDot0.className = 'far fa-circle'

  rect2.top < 380 && rect2.bottom > 480 ?
    navDot1.className = 'fas fa-circle' :
    navDot1.className = 'far fa-circle'

  rect3.top < 520 ?
    navDot2.className = 'fas fa-circle' :
    navDot2.className = 'far fa-circle'



}
// const r2t = document.querySelector('#demos').getBoundingClientRect()['top'];
// const r2b = document.querySelector('#demos').getBoundingClientRect()['bottom'];
// const r2 = [r2t, r2b]


document.querySelectorAll('.navAndDarkMode i').forEach((button) => {
  button.addEventListener('click', event => {
    handleNavButton(event)
  })
})


function handleNavButton(button) {

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
        navUl.style.top = '-250px')
      : (button.target.style.transform = 'rotate(90deg)',
        navUl.style.top = '30px',
        navUl.style.border = '3px solid rgba(0,0,0,0.75)',
        navUl.style.color = '#222')
  }
}