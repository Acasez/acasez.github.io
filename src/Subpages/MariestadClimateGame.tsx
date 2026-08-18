import MediaDisplay from "../components/MediaDisplay";
import PortfolioCoverImage from "../components/PortfolioCoverImage";
import PortfolioDoubleImageRow from "../components/PortfolioDoubleImageRow";
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
        <PortfolioDoubleImageRow //Double Image
          imageLocationOne="src/images/MariestadClimateGame/HisMariestad.jpg"
          altTextOne="Photo from Skövde universities Web Page"
          imageLocationTwo="src/Images/MariestadClimateGame/MariestadLaunch.webp"
          altTextTwo="Photo from the launch"
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
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Pitch and Crew
          name="Pitch and Crew"
          imageLocation="src/Images/MariestadClimateGame/Game on boxes.jpg"
          altText="Game boxes"
          description="The project began when Mariestad municipality looked for a project that related to their work on climate sustainability. They approached us taking the Master’s program for ideas.I pitched the idea of a strategic board game and they liked the idea. I also invited my friend Iris Casado who is a talented illustrator and was taking the same courses to join the project. She did the game board and cover art and around half of the cards. Lars Vipsjö, the programme co-ordinator also helped a lot with administrative tasks and organizing.

We started with rough paper concepts and turned that into what you see now. During the project we invited Wu Deyu to help work on card illustrations and Alexander Ros to work on art for the actor cards. I also talked with some other students at Skövde University who provided guest art on a few different cards. 

I used the game as my artifact for my (1 year) master thesis on representation of technology and technological development in board games.
"
          webpageLinks={[
            {
              url: "https://his.diva-portal.org/smash/record.jsf?aq2=%5B%5B%5D%5D&c=2&af=%5B%5D&searchType=SIMPLE&sortOrder2=title_sort_asc&query=Skogsholm+Sanne%2C+Edvin+&language=sv&pid=diva2%3A1773941&aq=%5B%5B%5D%5D&sf=all&aqe=%5B%5D&sortOrder=dateIssued_sort_desc&onlyFullText=false&noOfRows=50&dswid=3853",
              label: "My Masters Thesis",
            },
          ]}
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Project Cards
          name="Project Cards"
          imageLocation="src/Images/MariestadClimateGame/Project Cards.jpg"
          altText="A bunch of project Cards"
          description="The core part of the game is the project cards. While there are standard actions that can always be undertaken, playing project cards is vital to winning the game.

There are 106 project cards in the game with differing effects, costs and requirements. At the start of the game each player draws 4 project cards. Players get 2 more card draws each year and can draw new cards from card effects and synergies. Players can also sell for money per card or trade in two cards to draw a new card. These effects help mitigate the effect of random card draws and provide interesting decisions during play.

The game's card based design allows it to highlight a variety of different concepts and ideas and increases the game's replayability. Personally I love designing new cards for games, to try to find ways to model different concepts and ideas with the games core mechanics. At one point there were 150 cards in the game, but we had to cut some so that we would have time to get illustrations for all of them.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioCoverImage>
          <MediaDisplay
            imageLocation="src/images/MariestadClimateGame/cardssheet.JPG"
            altText="Google Sheet with the cards"
            imageCaption="Screenshot from our cards spreadsheet. The columns seen are; Name, Price, Requirements, Border, Tags (1-3), Construction, Effect, Flavor text, Version and Image Inspiration. Each row is a different card. We used different color codes to mark which cards had complete illustrations, new changes and other things that came up."
            coverImage={true}
          />
        </PortfolioCoverImage>
      </PortfolioRowFrame>
    </>
  );
}
