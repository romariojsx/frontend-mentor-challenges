import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="rodape-bg">
        <div className="rodape container">
          <div className="marca">
            <img src="./images/logo.svg" alt="marca" />
            <ul className="rodape-social-media">
              <li>
                <a href="/">
                  <img src="./images/icon-facebook.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="./images/icon-twitter.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="./images/icon-pinterest.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="./images/icon-instagram.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <nav className="rodape-menu">
            <ul>
              <h5>Our company</h5>
              <li>
                <a href="/">How we work</a>
              </li>
              <li>
                <a href="/">Why Insure?</a>
              </li>
              <li>
                <a href="/">View plans</a>
              </li>
              <li>
                <a href="/">Reviews</a>
              </li>
            </ul>
            <ul>
              <h5>Help me</h5>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Terms of use</a>
              </li>
              <li>
                <a href="/">Privacy policy</a>
              </li>
              <li>
                <a href="/">Cookies</a>
              </li>
            </ul>
            <ul>
              <h5>Contact</h5>
              <li>
                <a href="/">Sales</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
              <li>
                <a href="/">Live chat</a>
              </li>
            </ul>
            <ul>
              <h5>Others</h5>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Press</a>
              </li>
              <li>
                <a href="/">Licenses</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
