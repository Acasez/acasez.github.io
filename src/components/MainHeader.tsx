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
                  <a href="mariestadClimateGame.html">Mariestad Board Game</a>
                </li>
                <li>
                  <a href="mariestadDigitalAdaption.html">
                    Mariestad Digital Adaptation
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="cityState.html">City State</a>
          </li>
          <li>
            <a href="#">Ion Internship ▼</a>
            <div className="dropdown_menu">
              <ul>
                <li>
                  <a href="ionInternship.html">Ion Internship</a>
                </li>
                <li>
                  <a href="highFrontier.html">High Frontier</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="toHelAndBack.html">To Hel and Back</a>
          </li>
          <li>
            <a href="landOfTheArcane.html">Land of the Arcane</a>
          </li>
          <li>
            <a href="kastorix.html">Kastorix</a>
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
            <a href="aboutme.html">About Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
