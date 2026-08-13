import PortfolioRow from "../components/PortfolioRow";
import "../CSS/HRLines.css";
export default function PortfolioIndex() {
  return (
    <>
      <PortfolioRow //Edvins Nested Tooltips
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
      />
      <hr />
      <PortfolioRow //Amsvartne
        reverse={true}
        imageLocation="src/Images/Amsvartne/Amsvartne.JPG"
        altText="Image of Amsvartne"
        projectTags={["Unity", "C#", "Game", "Group"]}
        name="Amsvartne (2045-2025)"
        subtitle="Atmospheric Puzzle Platformer"
        projectPageLink="./amsvartne.html"
        description="Amsvartne is a 2D puzzle platformer I made as part of the start up group Corvian Games (now Tiny Creature Games). It focuses on narrative exploration and puzzle solving using light to navigate levels and solve puzzles. It's set in a mystical mine in a fantasy dieselpunk setting. I worked on the game and level design, as well as programming multiple game systems."
        itchLink="https://corviangames.itch.io/amsvartne"
      />
      <hr />
      <PortfolioRow //Mariestad Climate Board Game
        reverse={false}
        imageLocation="src/Images/MariestadClimateGame/Gameboard in Play.jpg"
        altText="Image of the board game in play"
        projectTags={["Board Game", "Professional Project", "Group"]}
        name="Mariestad Climate Board Game (2022-2024)"
        subtitle="Eurogame style board game about city planning and sustainability"
        projectPageLink="./mariestadClimateGame.html"
        description="A strategic board game about making a mid-sized Swedish city climate neutral. In the game players play cards to build green power, nature areas to absorb pollution and other projects to achieve sustainability, while managing their income and the opinion of people in the municipality.
I proposed the original idea for the game and have worked on game design, balance and testing. I worked with 2D artists Iris Casado, Zoey Wu and Alexander Ros who worked on graphic design and card illustrations. "
        webpageLinks={[
          {
            url: "https://mariestad.se/nyheter/nyhetsarkiv/2024-06-03-klimatspelet-mariestad-bidrar-till-den-grona-omstallningen",
            label: "Municipality Project Page",
          },
        ]}
      />
      <PortfolioRow //Mariestad Digital
        reverse={true}
        imageLocation="src/Images/MariestadDigitalAdaptation/MariestadDigital.JPG"
        altText="Image of the digital game"
        projectTags={["Unity", "C#", "Game", "Solo"]}
        name="Mariestad Digital Adaptation (2024-2025)"
        subtitle="Digital Adaptation of the climate board game"
        projectPageLink="./mariestadClimateGame.html"
        description="I also made a digital, solo only, adaption of the Mariestad Board Game. It has most of the features of the physical board game and an inbuilt tutorial. It also has the option to be played in either English and Swedish and has options for different amounts of starting pollution, to provide different levels of challenge. I made a script that imports the card data using CSV files for quick playtesting and balancing, a method I use in my Unity projects today. "
        itchLink="https://acasez.itch.io/mariestad-climate-game"
      />
      <hr />
      <PortfolioRow //Ion Games
        reverse={false}
        imageLocation="src/Images/IonGames/IonGameDesignLogo.png"
        altText="Logo of ION Game Design"
        projectTags={["Board Games", "Internship", "Group"]}
        name="ION Internship (2024)"
        subtitle="Internship at ION Games"
        projectPageLink="./mariestadClimateGame.html"
        description="During the summer of 2024 I had an internship at ION Games, a board game studio in Stockholm, working on playtesting and game design. I helped playtest a variety of games, including Dino Dynasty, Atlas, and Pax Viking Second Edition. I worked with the designers to give feedback on rules, balance and rulebooks. I also did most of the work on the solo rules of Pax Viking Second Edition. Since then I have been in contact with some of the designers and done occasional digital playtests."
        webpageLinks={[
          {
            url: "https://iongamedesign.com",
            label: "ION Game Design Home Page",
          },
        ]}
      />
      <PortfolioRow //High Frontier
        reverse={true}
        imageLocation="src/Images/HighFrontier/MoveBurn.jpg"
        altText="Screenshot of the tutorial"
        projectTags={["Board Games", "Internship", "Group", "Unity, C#"]}
        name="High Frontier Tutorial (2025)"
        subtitle="Tutorial for the digital adaptation of the board game"
        projectPageLink="./mariestadClimateGame.html"
        description="During the fall of 2025 I returned to Ion Games for 3 months to do another internship, this one focusing on the digital side. I worked on making a tutorial and UI improvements for the digital implementation of the board game High Frontier, as well as various bug fixes, performance improvements and debug tools. I worked with many talented interns, as well as game designers in the company."
      />
    </>
  );
}
