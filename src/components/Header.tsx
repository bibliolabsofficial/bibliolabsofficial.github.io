// ------------------- Imports --------------------
// Hooks
import { useState, useEffect, useRef } from 'react';
// ------------------------------------------------

// --------------- Header Component ---------------
export default function Header() {
  // -------------------- Hooks ---------------------
  const [headerVisible, setHeaderVisible] = useState(true);
  const [headerLocked, setHeaderLocked] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  const headerControlsRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLElement | null>(null);
  const bodyRef = useRef<HTMLElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    headerControlsRef.current = document.querySelector('.header__controls');
    menuRef.current = document.querySelector('.header__nav-list');
    bodyRef.current = document.body;
    mainRef.current = document.querySelector('main');
    footerRef.current = document.querySelector('footer');
  }, []);

  /*
    Handles unlocking the body scroll when the window is resized
    and the viewport is larger than 48rem (768px).
  */
  useEffect(() => {
    const mobileSize = window.matchMedia('(width <= 48rem)');
    const body = bodyRef.current as HTMLElement;
    const menu = menuRef.current as HTMLElement;
    const headerControls = headerControlsRef.current as HTMLElement;
    const main = mainRef.current as HTMLElement;
    const footer = footerRef.current as HTMLElement;

    function unlockBodyScrollY() {
      if (!mobileSize.matches) {
        body.classList.remove('scroll-y-locked');
        headerControls.removeAttribute('inert');
        menu.removeAttribute('inert');
        main.removeAttribute('inert');
        footer.removeAttribute('inert');

        setMenuOpened(false);
      }

      if (menu) menu.style.transition = 'none';
    }

    window.addEventListener('resize', unlockBodyScrollY);
    return () => window.removeEventListener('resize', unlockBodyScrollY);
  }, []);

  /*
    Handles updating the scroll position and locking the header
    when the user scrolls the page.
  */
  useEffect(() => {
    window.addEventListener('scroll', toggleHeaderVisibleOnScroll);
    return () => window.removeEventListener('scroll', toggleHeaderVisibleOnScroll);
  }, [scrollPosition, headerLocked]);

  /*
    Handles toggling the body scroll lock and the inert attribute
    on the menu when the menu is opened or closed, but only on mobile devices
    (viewport width less than or equal to 48rem).
  */
  useEffect(() => {
    const mobileSize = window.matchMedia('(width <= 48rem)');
    const headerControls = headerControlsRef.current as HTMLElement;
    const body = bodyRef.current as HTMLElement;
    const menu = menuRef.current as HTMLElement;
    const main = mainRef.current as HTMLElement;
    const footer = footerRef.current as HTMLElement;

    if (menu && mobileSize.matches) {
      body.classList.toggle('scroll-y-locked', menuOpened);
      headerControls.toggleAttribute('inert', menuOpened);
      menu.toggleAttribute('inert', !menuOpened);
      main.toggleAttribute('inert', menuOpened);
      footer.toggleAttribute('inert', menuOpened);

      if (menuOpened) {
        menu.removeAttribute('style');
        return;
      }

      setTimeout(() => menu.style.transition = 'none', 300);
    }
  }, [menuOpened]);
  // ------------------------------------------------

  // ------------------ Functions -------------------
  // Toggles header visibility on vertical scroll
  function toggleHeaderVisibleOnScroll() {
    const currentScrollPosition = window.scrollY;

    if (!headerLocked) setHeaderVisible(!(currentScrollPosition > scrollPosition));

    setScrollPosition(currentScrollPosition);
  }

  // Toggles the header visibility
  function toggleHeaderLocked() {
    if (!headerLocked) setHeaderVisible(!headerVisible);
  };

  // Toggles hamburger menu visibility
  const toggleMenuVisibility = () => setMenuOpened(!menuOpened);
  // ------------------------------------------------

  return (
    <header className={`header ${!headerVisible ? 'hidden' : ''}`}>
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
              <a href="#" className='header__link'>Premium</a>
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
