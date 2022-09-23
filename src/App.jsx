import "./SCSS/index.scss";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Contacto from "./Components/Contacto/Contacto";
import Mainpage from "./Components/Mainpage/Mainpage";
import Portafolio from "./Components/Portafolio/Portafolio";
function App() {
  return (
    <div className="App">
      <div id="Header">
        <div id="container-logo-nav" />
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
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Mainpage />} />
      </Routes>
    </div>
  );
}

export default App;
