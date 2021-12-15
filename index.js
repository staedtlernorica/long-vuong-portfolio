// FOR POTENTIAL FUTURE USE WITH CHAING NAVBAR COLOR
// https://usefulangle.com/post/113/javascript-detecting-element-visible-during-scroll



// ILL GOTTEN GAIN FROM W3SCHOOL EXAMPLE
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navAndDarkMode")[0].style.top = "0";
    isElementInViewport();
} else {
    document.getElementsByClassName("navAndDarkMode")[0].style.top = "-60px";
}
  prevScrollpos = currentScrollPos;
}



// https://stackoverflow.com/a/7557433/6030118

function isElementInViewport () {

    const topBar = document.querySelector('.navAndDarkMode')
    const resumeSection = document.querySelector('section.skills');
    const contactSection = document.querySelector('section.contact');

    var rect1 = resumeSection.getBoundingClientRect();
    var rect2 = contactSection.getBoundingClientRect();
    
    // no more negative margins h2 so now just have 0 instead of 55
    (rect1.top < 0 && rect1.bottom > 0) || (rect2.top < 0) ?
    topBar.style.backgroundColor = 'rgba(232, 190, 163, 0.97)' :
    topBar.style.backgroundColor = 'rgba(254, 250, 224, 0.97)';
}

