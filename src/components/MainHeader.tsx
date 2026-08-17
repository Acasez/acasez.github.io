import "../CSS/headerStyle.css";
import { Link } from "react-router-dom";

export default function MainHeader() {
  return (
    <>
      <nav className="topnav" role="navigation">
        <ul>
          <li>
            <Link to="/">
              <u>Edvin Skogsholm Sanne</u>
            </Link>
          </li>
          <li>
            <Link to="/EdvinsNestedTooltips">Edvin's Nested Tooltips</Link>
          </li>
          <li>
            <Link to="Amsvartne">Amsvartne</Link>
          </li>
          <li>
            <a href="#">Mariestad Board Game ▼</a>
            <div className="dropdown_menu">
              <ul>
                <li>
                  <Link to="/MariestadClimateGame">Mariestad Board Game</Link>
                </li>
                <li>
                  <Link to="/MariestadDigitalAdaptation">
                    Mariestad Digital Adaptation
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Ion Internship ▼</a>
            <div className="dropdown_menu">
              <ul>
                <li>
                  <Link to="/IonInternship">Ion Internship</Link>
                </li>
                <li>
                  <Link to="/HighFrontierTutorial">High Frontier</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/CityState">City State</Link>
          </li>
          <li>
            <Link to="/ToHelAndBack">To Hel and Back</Link>
          </li>
          <li>
            <Link to="/landOfTheArcane">Land of the Arcane</Link>
          </li>
          <li>
            <Link to="/Kastorix">Kastorix</Link>
          </li>
          <li>
            <a href="#">Fan Content ▼</a>
            <div className="dropdown_menu">
              <ul>
                <li>
                  <a href="customTomes.html">Age of Wonders 4 Tomes</a>
                </li>
                <li>
                  <a href="myherosnap.html">My Hero Snap</a>
                </li>
                <li>
                  <a href="meridianSunsets.html">Meridian Sunsets</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">CV's ▼</a>
            <div className="dropdown_menu">
              <ul>
                <li>
                  <a href="englishCV.html">English</a>
                </li>
                <li>
                  <a href="swedishCV.html">Swedish</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/AboutMe">About Me</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
