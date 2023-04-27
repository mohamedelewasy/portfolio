import logo from "../assets/img/svg/logo.svg";
export const Navbar = () => {
  return (
    <nav
      id="main-navigation"
      className="navbar navbar-default navbar-fixed-top"
    >
      <h1 className="sr-only">Main navigation</h1>

      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#main-navbar"
            aria-expanded="false"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="sr-only">Toggle navigation</span>
          </button>
          <a
            id="brand-mobile"
            className="navbar-brand navbar-brand-center smoothScroll"
            href="#home"
          >
            <img alt="Molly" src={logo} />
          </a>
        </div>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="nav navbar-nav">
            <li>
              <a className="smoothScroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothScroll" href="#skills">
                Skills
              </a>
            </li>

            <li id="brand-desktop">
              <a className="navbar-brand smoothScroll" href="#home">
                <img alt="Molly" src={logo} />
              </a>
            </li>
            <li>
              <a className="smoothScroll" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="smoothScroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
