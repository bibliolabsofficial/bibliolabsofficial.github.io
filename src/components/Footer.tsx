function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__wrapper | wrapper">
        <nav>
          <ul className="footer__nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Support us</a></li>
          </ul>

          <ul className="footer__nav-list">
            <li><a href="#">News</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <div className="footer__social">
            <ul className="footer__nav-list">
              <li><a href="#"><i className='fa-brands fa-instagram'></i></a></li>
              <li><a href="#"><i className='fa-brands fa-facebook'></i></a></li>
              <li><a href="#"><i className='fa-brands fa-x-twitter'></i></a></li>
            </ul>

            <ul className="footer__nav-list">
              <li><a href="#"><i className="fa-brands fa-google-play"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-apple"></i></a></li>
            </ul>
          </div>
        </nav>

        <div className="footer__copyright">
          <p>&copy; 2024 <span>Bibliolabs</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;