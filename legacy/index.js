const BODY = document.querySelector('body')
const MODE_TOGGLE = document.querySelector('a#darkModeToggle')


document.getElementById('darkModeToggle').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent scroll or reload
  
  if (BODY.className !== 'dark-mode'){
    BODY.classList.add('dark-mode')
    MODE_TOGGLE.textContent = '☀'
  } else{
    BODY.classList.remove('dark-mode')
    MODE_TOGGLE.textContent = '🌙'
  }

});


document.addEventListener("DOMContentLoaded", function() {
  const yearElements = document.querySelectorAll('.year');
  const currentYear = new Date().getFullYear();

  yearElements.forEach(el => {
    el.textContent = "Built in pure HTML & CSS 💪 " + currentYear;
  });
});