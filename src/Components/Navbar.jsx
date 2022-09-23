import { Link } from "react-router-dom";
import logo from "../assets/WhiteBack.png";
const Navbar = () => {
  return (
    <div id="Header">
      <div id="container-logo-nav">
        <img src={logo} alt="logo" />
      </div>
      <div id="container-navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/portafolio">ABOUT</Link>
            </li>
            <li>
              <Link to="contacto">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
