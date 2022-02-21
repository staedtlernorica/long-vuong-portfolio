// FOR POTENTIAL FUTURE USE WITH CHAING NAVBAR COLOR
// https://usefulangle.com/post/113/javascript-detecting-element-visible-during-scroll


// automatically expanding textarea
// http://jsfiddle.net/n9uuv0hd/80/


// REMOVED; 4 DOTS VERSION TOO PERFORMANT INTENSIVE
// isElementInViewport();

// ILL GOTTEN GAIN FROM W3SCHOOL EXAMPLE
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;

//   const mobileMenuOpened = document.querySelector('nav ul').style.top === '26.8px'



//   if (prevScrollpos > currentScrollPos) {
//     document.getElementsByClassName("navAndDarkMode")[0].style.top = "0";
    

//     // dont dissappear topNav if mobileMenu is opened
//   } else if (prevScrollpos < currentScrollPos && !mobileMenuOpened) {
//     document.getElementsByClassName("navAndDarkMode")[0].style.top = "-80px";
//     openMenu(false)
//   }
//   prevScrollpos = currentScrollPos;
// }



// https://stackoverflow.com/a/7557433/6030118


document.querySelectorAll('.pageIndicator i').forEach((button) => {
  button.addEventListener('click', event => {
    scrollToPx(event)
  })
})


function scrollToPx(event) {

  const pxFromTop = document.querySelector('body').getBoundingClientRect().top;

  // No get in touch button
  // const breakpoints = [0, -760, -1600, -3700, -4707]
  const breakpoints = [0, -680, -1470, -3580, -4707]

  let temp = [...breakpoints, pxFromTop].sort(function (a, b) { return a - b; }).reverse();

  temp = [...new Set(temp)]

  const index = temp.indexOf(pxFromTop)

  event.target.className === 'fas fa-angle-double-up' ?
    window.scrollTo(0, temp[index - 1] * -1) :
    window.scrollTo(0, temp[index + 1] * -1)

}


document.querySelectorAll('.navAndDarkMode i').forEach((button) => {
  button.addEventListener('click', event => {
    handleNavButton(event)
  })
})


function handleNavButton(button) {



  if (button.target.className.includes('moon')) {

    button.target.className === 'far fa-moon'
      ? (button.target.className = 'fas fa-moon',
        alert('Coming soon'))
      : (button.target.className = 'far fa-moon',
        button.target.style.transform = 'translate(0, 0px)')

  } else {
    button.target.style.transform === 'rotate(90deg)'
      ? openMenu(false):
        openMenu(true)
  }
}

function openMenu(open) {

  const btn = document.querySelectorAll('.navAndDarkMode i')[1]
  const navUl = document.querySelector('nav ul')

  if (open) {
    (btn.style.transform = 'rotate(90deg)',
      navUl.style.top = '30px',
      navUl.style.border = '3px solid rgba(0,0,0,0.75)',
      navUl.style.color = '#222')
  }
  else {
    (btn.style.transform = 'rotate(0deg)',
      navUl.style.color = 'transparent',
      navUl.style.border = '3px solid transparent',
      navUl.style.top = '-400px')
  }
}
