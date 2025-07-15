export default function NavBar() {

  const handleToggle = (event) => {
    event.preventDefault();

    const BODY = document.querySelector('body');
    const MODE_TOGGLE = document.querySelector('a#darkModeToggle');

    if (BODY.className !== 'dark-mode') {
      BODY.classList.add('dark-mode');
      if (MODE_TOGGLE) MODE_TOGGLE.textContent = '☀';
    } else {
      BODY.classList.remove('dark-mode');
      if (MODE_TOGGLE) MODE_TOGGLE.textContent = '🌙';
    }
  };


    return (
        <div className="dark-mode-wrapper wrapper">
            <a href="" id="darkModeToggle" className="dark-mode-button" onClick={handleToggle}>🌙</a>
        </div>
    )
} 