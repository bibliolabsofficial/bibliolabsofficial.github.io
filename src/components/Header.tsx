// ------------------- Imports --------------------
// Hooks
import { useState, useEffect } from 'react';
// ------------------------------------------------

// --------------- Header Component ---------------
export default function Header() {
  // -------------------- Hooks ---------------------
  const [headerVisible, setHeaderVisible] = useState(true);
  const [headerLocked, setHeaderLocked] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 48rem)');
    const body = document.body;

    function toggleScrollYLocked() {
      if (mediaQuery.matches && menuOpened) {
        body.classList.add('scroll-y-locked');
      } else {
        body.classList.remove('scroll-y-locked');
      }
    }
    
    window.addEventListener('resize', toggleScrollYLocked);
    return () => window.removeEventListener('resize', toggleScrollYLocked);
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition, headerLocked]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 48rem)');
    const menu = document.querySelector('.header__nav-list');

    if (!menuOpened && mediaQuery.matches) {
      menu?.setAttribute('inert', '');
      return;
    }

    menu?.removeAttribute('inert');
  }, [menuOpened]);
  // ------------------------------------------------

  // ------------------ Functions -------------------
  // Handles header visibility on scroll
  function handleScroll() {
    const currentScrollPosition = window.scrollY;

    if (!headerLocked) setHeaderVisible(currentScrollPosition > scrollPosition);

    setScrollPosition(currentScrollPosition);
  }

  // Toggles the header lockd state
  const toggleHeaderLocked = () => {
    if (!headerLocked) setHeaderVisible(!headerVisible)
  };

  // Toggles hamburger visibility
  const toggleMenuVisibility = () => setMenuOpened(!menuOpened);
  // ------------------------------------------------

  return (
    <header className={`header ${!headerVisible && 'hidden'}`}>
      <div className='header__wrapper | wrapper'>
        <div className="header__branding">
          <img
            className='header__logo'
            src='../../images/icon.jpg'
            alt='bibliolabs logo'
          />

          <div className="header__title-wrapper">
            <h1>Bibliophile</h1>
            <h2>Read anywhere, anytime</h2>
          </div>
        </div>

        <nav>
          <button
            className="header__hamburger-menu"
            aria-controls="primary-navigation"
            type="button"
            aria-expanded={menuOpened}
            onClick={toggleMenuVisibility}
          >
            <span className='sr-only'>menu</span>
            <span className="fa fa-bars" aria-hidden="true"></span>
          </button>

          <ul
            className='header__nav-list'
            id='primary-navigation'
          >
            <li className='header__nav-list-item'>
              <a href="/" className='header__link | active'>Home</a>
            </li>

            <li className='header__nav-list-item'>
              <a href="#" className='header__link'>App</a>
            </li>

            <li className='header__nav-list-item'>
              <a href="#" className='header__link'>About</a>
            </li>

            <li className='header__nav-list-item'>
              <a href="#" className='header__link'>Support us</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`header__controls ${headerVisible ? '' : 'shifted'}`}>
        <button
          onClick={toggleHeaderLocked}
          className='header__toggle-header-visible'
          aria-label='Toggle header visibility'
        >
          <i className={`fa fa-chevron-${headerVisible ? 'up' : 'down'}`}></i>
        </button>

        <button
          onClick={() => setHeaderLocked(!headerLocked)}
          className={`header__lock-header ${headerLocked ? 'active' : ''}`}
          aria-label='Lock header'
        >
          <i className={`fa fa-lock${headerLocked ? '' : '-open'}`}></i>
        </button>
      </div>
    </header>
  );
}
// ------------------------------------------------
