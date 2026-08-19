import "../CSS/headerStyle.css";
import { Link } from "react-router-dom";

export default function MainHeader() {
  return (
    <>
      <nav className="topnav" role="navigation">
        <ul>
          <li>
            <Link to="/portfolio-v2/">
              <u>Edvin Skogsholm Sanne</u>
            </Link>
          </li>
          <li>
            <Link to="/portfolio-v2/EdvinsNestedTooltips">
              Edvin's Nested Tooltips
            </Link>
          </li>
          <li>
            <Link to="/portfolio-v2/Amsvartne">Amsvartne</Link>
          </li>
          <li>
            <a href="#">Mariestad Board Game ▼</a>
            <div className="dropdown_menu">
              <ul>
                <li>
                  <Link to="/portfolio-v2/MariestadClimateGame">
                    Mariestad Board Game
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio-v2/MariestadDigitalAdaptation">
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
                  <Link to="/portfolio-v2/IonInternship">Ion Internship</Link>
                </li>
                <li>
                  <Link to="/portfolio-v2/HighFrontierTutorial">
                    High Frontier
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/portfolio-v2/CityState">City State</Link>
          </li>
          <li>
            <Link to="/portfolio-v2/ToHelAndBack">To Hel and Back</Link>
          </li>
          <li>
            <Link to="/portfolio-v2/landOfTheArcane">Land of the Arcane</Link>
          </li>
          <li>
            <Link to="/portfolio-v2/Kastorix">Kastorix</Link>
          </li>
          <li>
            <a href="#">About Me ▼</a>
            <div className="dropdown_menu">
              <ul>
                <li>
                  <Link to="/portfolio-v2/AboutMe">About Me</Link>
                </li>
                <li>
                  <a href="#">🞀 CV's</a>
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
                  <a href="#">🞀 Fan Content</a>
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
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
