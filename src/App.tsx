import PortfolioRow from "./components/PortfolioRow";

export default function App() {
  return (
    <>
      <PortfolioRow
        reverse={false}
        imageLocation="src/Images/EdvinsLayeredTooltips/TooltipsInGame.JPG"
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
      <PortfolioRow
        reverse={true}
        imageLocation="src/Images/Amsvartne/Amsvartne.JPG"
        projectTags={["Unity", "C#", "Game", "Group"]}
        name="Amsvartne (2045-2025)"
        subtitle="Atmospheric Puzzle Platformer"
        projectPageLink="./amsvartne.html"
        description="Amsvartne is a 2D puzzle platformer I made as part of the start up group Corvian Games (now Tiny Creature Games). It focuses on narrative exploration and puzzle solving using light to navigate levels and solve puzzles. It's set in a mystical mine in a fantasy dieselpunk setting. I worked on the game and level design, as well as programming multiple game systems."
        itchLink="https://corviangames.itch.io/amsvartne"
        githubLink=""
        webpageLink=""
      />
    </>
  );
}
