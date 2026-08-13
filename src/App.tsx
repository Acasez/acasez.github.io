import PortfolioRow from "./components/PortfolioRow";
import "./CSS/HRLines.css";

export default function App() {
  return (
    <>
      <PortfolioRow
        reverse={false}
        imageLocation="src/Images/EdvinsLayeredTooltips/TooltipsInGame.JPG"
        altText="Example of tooltip"
        projectTags={["Unity", "C#", "Asset", "Solo"]}
        name="Edvin's Nested Tooltips (2026)"
        subtitle="Free Unity Asset"
        projectPageLink="./edvinsNestedTooltips.html"
        description="Edvin's Nested Tooltips is a Unity Asset I made that allows for easy creation of nested, layered tooltips. Inspired by tooltips seen in games like Crusader Kings 3 and Baldur's Gate 3, this unity asset was designed so me and anyone else could create nested tooltips for their strategy games. It uses a system of Keyword Scriptable Objects to easily add custom keywords. This allow developers to quickly make nested tooltips, and explain custom game mechanics with no need for in-game wikis.
"
        itchLink="https://acasez.itch.io/edvins-nested-tooltips"
        githubLink="https://github.com/Acasez/EdvinsLayeredTooltips"
        webpageLink=""
      />
      <hr />
      <PortfolioRow
        reverse={true}
        imageLocation="src/Images/Amsvartne/Amsvartne.JPG"
        altText="Image of Amsvartne"
        projectTags={["Unity", "C#", "Game", "Group"]}
        name="Amsvartne (2045-2025)"
        subtitle="Atmospheric Puzzle Platformer"
        projectPageLink="./amsvartne.html"
        description="Amsvartne is a 2D puzzle platformer I made as part of the start up group Corvian Games (now Tiny Creature Games). It focuses on narrative exploration and puzzle solving using light to navigate levels and solve puzzles. It's set in a mystical mine in a fantasy dieselpunk setting. I worked on the game and level design, as well as programming multiple game systems."
        itchLink="https://corviangames.itch.io/amsvartne"
        githubLink=""
        webpageLink=""
      />
      <hr />
      <PortfolioRow
        reverse={false}
        imageLocation="src/Images/Amsvartne/Amsvartne.JPG"
        altText="Image of the board game in play"
        projectTags={["Board Game", "Professional Project", "Group"]}
        name="Mariestad Climate Board Game (2022-2024)"
        subtitle="Eurogame style board game about city planning and sustainability"
        projectPageLink="./mariestadClimateGame.html"
        description="A strategic board game about making a mid-sized Swedish city climate neutral. In the game players play cards to build green power, nature areas to absorb pollution and other projects to achieve sustainability, while managing their income and the opinion of people in the municipality.
I proposed the original idea for the game and have worked on game design, balance and testing. I worked with 2D artists Iris Casado, Zoey Wu and Alexander Ros who worked on graphic design and card illustrations. "
        itchLink=""
        githubLink=""
        webpageLink="https://mariestad.se/nyheter/nyhetsarkiv/2024-06-03-klimatspelet-mariestad-bidrar-till-den-grona-omstallningen"
      />
    </>
  );
}
