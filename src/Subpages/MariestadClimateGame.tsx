import PortfolioListRow from "../components/PortfolioListRow";
import PortfolioRow from "../components/PortfolioOverviewRow";
import PortfolioRowFrame from "../components/PortfolioRowFrame";
import TitleSection from "../components/TitleSection";

export default function MariestadClimateGame() {
  return (
    <>
      <TitleSection
        title="Mariestad Climate Board Game"
        subtitle="Eurogame style board game about city planning and sustainability"
      />
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Overview
          imageLocation="src/Images/MariestadClimateGame/Gameboard in Play.jpg"
          altText="The game in play"
          description="I designed a board game for the municipality of Mariestad with graphics by Iris Casado, Wu Deyu, Alexander Ros and others. The game is a eurogame inspired by games like Terraforming Mars, however the game is designed to be fairly short and easy to learn. The game can be played with 2-4 players and its playtime varies depending on the amount of players. 2 experienced players can play it in under 25 minutes, but for 4 new players it can take about an hour and half. 

The goal of the game is to have the most Victory Points (VP) at the end of the game, in 2030. The main way to get VP is by reducing pollution which can be done in a variety of different ways. Some of those ways include, producing renewable power, reducing car traffic and building green areas to absorb CO². During the game players take the role of an actor in the city, like a company or organization. They then play different project cards, while managing their economy and relations with the people of the municipality. 

The game takes place over 7 years, as part of the Viable Cities climate neutral 2030 strategy. At the end of the 7 years the player with the most Victory Points wins, and hopefully Mariestad is Climate neutral. 
"
          webpageLinks={[
            {
              url: "https://mariestad.se/nyheter/nyhetsarkiv/2024-06-03-klimatspelet-mariestad-bidrar-till-den-grona-omstallningen",
              label: "Municipality Project Page",
            },
            {
              url: "https://www.his.se/forskning/informationsteknologi/game-research-group/spelutveckling-for-ett-klimatneutralt-mariestad/",
              label: "Skövde University page on the game",
            },
            {
              url: "https://swedengamearena.com/sv/nyheter/nytt-spel-fran-hogskolan-hjalper-mariestad-att-bli-klimatneutralt/",
              label: "SGA Page on the game",
            },
          ]}
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioListRow //Features List
          imageLocation="src/Images/MariestadClimateGame/ActorCards.jpg"
          altText="Actor Cards"
          imageCaption="Actor Cards from the game"
          listHeader="Things I've worked on"
          listContent={[
            "Pitched the original idea to the municipality; a strategic board game about reducing pollution and building sustainably",
            "Worked on and tried out early concepts with Iris.",
            "Designed game mechanics and tested them.",
            "Led many different test sessions with different groups, both skilled board game players and people not used to playing board games. Collected feedback from game tests.",
            "Implemented feedback from test sessions. Worked iteratively on card and game balance.",
            "Talked with the people at Mariestad on how to best present different topics and themes.",
            "Helped Iris and Zoey with reference images and feedback for card illustrations and graphical design.",
            "Made a tool in Unity to compose the cards easier.",
            "Worked with the printing company (Spelkortsförlaget) to get the right outlines and margins for the cards and boards to print them.",
            "Made a digital solo version of the game to be playable online.",
          ]}
        />
      </PortfolioRowFrame>
    </>
  );
}
