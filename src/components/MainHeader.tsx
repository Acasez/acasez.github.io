import "../CSS/headerStyle.css";
import { NavLink } from "react-router-dom";

export default function MainHeader() {
  return (
    <>
      <nav className="topnav" role="navigation">
        <ul>
          <li>
            <NavLink to="/portfolio-v2/" end>
              <u>Edvin Skogsholm Sanne</u>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio-v2/EdvinsNestedTooltips">
              Edvin's Nested Tooltips
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio-v2/Amsvartne">Amsvartne</NavLink>
          </li>
          <li>
            <a href="#">Mariestad Board Game ▼</a>
            <div className="dropdown_menu">
              <ul>
                <li>
                  <NavLink to="/portfolio-v2/MariestadClimateGame">
                    Mariestad Board Game
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio-v2/MariestadDigitalAdaptation">
                    Mariestad Digital Adaptation
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Ion Internship ▼</a>
            <div className="dropdown_menu">
              <ul>
                <li>
                  <NavLink to="/portfolio-v2/IonInternship">
                    Ion Internship
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio-v2/HighFrontierTutorial">
                    High Frontier
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink to="/portfolio-v2/CityState">City State</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio-v2/ToHelAndBack">To Hel and Back</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio-v2/landOfTheArcane">
              Land of the Arcane
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio-v2/Kastorix">Kastorix</NavLink>
          </li>
          <li>
            <a href="#">About Me ▼</a>
            <div className="dropdown_menu">
              <ul>
                <li>
                  <NavLink to="/portfolio-v2/AboutMe">About Me</NavLink>
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
