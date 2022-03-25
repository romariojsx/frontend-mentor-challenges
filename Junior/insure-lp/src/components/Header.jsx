import React from "react";
import "./Header.css";
function Header() {
  return (
    <React.StrictMode>
      <header className="header-bg">
        <div className="header container">
          <div>
            <img src="./images/logo.svg" alt="logo" />
          </div>
          <nav>
            <u className="menu">
              <li>
                <a href="/">how we work</a>
              </li>
              <li>
                <a href="/">blog</a>
              </li>
              <li>
                <a href="/">account</a>
              </li>
              <li>
                <button className="view-plans">view plans</button>
              </li>
            </u>
          </nav>
        </div>
      </header>

      <main className="introducao-bg">
        <div className="introducao container-desktop">
          <div className="introducao-item">
            <h1>Humanizing your insurance.</h1>
            <p>
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
            <a className="view-plans introducao-item-btn" href="/">
              view plans
            </a>
          </div>
          <img
            className="introducao-img"
            src="./images/image-intro-desktop.jpg"
            alt=""
          />
        </div>
      </main>
    </React.StrictMode>
  );
}

export default Header;
