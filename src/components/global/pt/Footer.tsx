function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__wrapper | wrapper">
        <nav>
          <ul className="footer__nav-list">
            <li><a href="/pt">Início</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Premium</a></li>
          </ul>

          <ul className="footer__nav-list">
            <li><a href="#">Novidades</a></li>
            <li><a href="/pt/politica-de-privacidade">Privacidade</a></li>
            <li><a href="#">Contato</a></li>
          </ul>

          <div className="footer__social">
            <ul className="footer__nav-list social">
              <li><a href="#"><i className='fa-brands fa-instagram'></i></a></li>
              <li><a href="#"><i className='fa-brands fa-facebook'></i></a></li>
              <li><a href="#"><i className='fa-brands fa-x-twitter'></i></a></li>
            </ul>

            <ul className="footer__nav-list apps">
              <li>
                <a href="#">
                  <img
                    src="../../images/play-store.svg"
                    alt="Google Play Store"
                    width={125}
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <img
                    src="../../images/app-store.svg"
                    alt="Google Play Store"
                    width={125}
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="footer__copyright">
          <p>&copy; 2024 | <span>Bibliolabs</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
