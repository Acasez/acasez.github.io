import PortfolioRow from "../PortfolioRows/PortfolioOverviewRow";
import PortfolioRowFrame from "../PortfolioRows/PortfolioRowFrame";
import TitleSection from "../components/TitleSection";

export default function IonInternship() {
  return (
    <>
      <TitleSection
        title="Ion Internship"
        subtitle="Internship at a board game company"
      />
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Overview
          imageLocation="images/IonGames/IonGameDesignLogo.png"
          altText="The logo of Ion Games"
          description="During the summer of 2024 I had an internship at the board game studio ION Games for a few weeks. I worked with gameplay, balance and playtesting for a few different board games. It was an engaging and informative experience and I enjoyed my time there. After working on Mariestad Board Game for a long time it was interesting to see how a commercial board studio worked, and I learned quite a few things from working with professional board game designers. It shows some of the challenges in commercial game development, but also many of the advantages a studio has when developing games.

Since that playtest I have worked with Robin Spathon Ek, the designer of games like Atlas - Explore the World, to do occasional playtests over Tabletop Simulator. I also came back a year later for another internship, that time focusing on the digital side, see High Frontier Tutorial.
"
          webpageLinks={[
            {
              url: "https://iongamedesign.com/",
              label: "Ion Game Design Website",
            },
          ]}
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Dino Dynasty
          name="Dino Dynasty"
          imageLocation="images/IonGames/DINOEmailBox.png"
          altText="Dino Dynasty Kickstarter image"
          description="The first game I playtested was Dino Dynasty, a game about leading a species of dinosaurs and competing for points.

I playtested this game quite a few times and discussed game design and balance with its game designer, Jon Manker. One of the things we talked about the most was balance between different sized dinos. In the version I played we identified that large dinos were in general too powerful, and that the advantage of being small wasn't large enough. We playtested and discussed different ways to go about fixing this, while keeping the thematic connection and feel. A T-Rex should feel powerful and be strong in combat, but there also needs to be ways to defeat them. I also gave some feedback on the game's rulebook and a list of minor things that could make it more enjoyable to play.

Unfortunately Dino Dynasty was the game of theirs I enjoyed the least, but the game design discussions with Jon were always interesting. 
"
          webpageLinks={[
            {
              url: "https://boardgamegeek.com/boardgame/416530/dino-dynasty",
              label: "Dino Dynasty on BGG",
            },
          ]}
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Atlas: Explore The World
          name="Atlas: Explore The World"
          imageLocation="images/IonGames/AtlasAtTableTop.png"
          altText="Image of Atlas on Tabletop Simulator"
          description="The second game I worked on was Atlas: Explore The World, a game about traveling the world and collecting experiences.

I played it multiple times, both with the game designer and with other interns at ION. I gave some feedback on how I would make the game more interactive between players and feel more tense. We tested different cards available for exploration, different public goals to incentivize exploration and balance for player actions and bonus actions. I also tested and worked with the designer on how the ‘automata/bots’ would work for solo and two player play.

Atlas might be my favorite of the games I worked on there and I might pick it up at some point to have a copy of my own.
"
          webpageLinks={[
            {
              url: "https://boardgamegeek.com/boardgame/424579/atlas-explore-the-world",
              label: "Atlas on BGG",
            },
          ]}
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Pax Viking
          name="Pax Viking"
          imageLocation="images/IonGames/PaxViking.png"
          altText="Image of Pax Viking being played taken from BGG"
          description="The third game I got to playtest was the solo mode of Pax Viking, before the printing of the game's second edition. 

Here I worked on making the rules clearer to understand and the solo gameplay to feel more cohesive. I did this by making lists of what cards/tiles work for solo, and by suggesting alternative game board effects and player powers that fit better for solo play. It was a tricky challenge as solo game rules couldn't require any new components or drastic rule changes, but the base game has a lot of player interaction that would normally be lost in Solo play.
"
          webpageLinks={[
            {
              url: "https://boardgamegeek.com/boardgame/303954/pax-viking",
              label: "Pax Viking on BGG",
            },
          ]}
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Kartini - From Darkness to Light
          name="Kartini - From Darkness to Light"
          imageLocation="images/IonGames/Kartini.png"
          altText="Cover of Kartini"
          description="I also playtested Kartini - From Darkness To Light a few times. It's a game about Indonesia's struggle for independence against the Dutch colonizers, where you build education for women and graduate fighters, politicians, patrons and teachers. I gave some feedback on balance and systems design and on the games rulebook. I also tested some coop milestones at different player counts to make sure they were fairly difficult, but doable even with bad luck.

It's a cool game with a very unique theme, inspired by historical events you rarely hear about, especially in games.
"
          webpageLinks={[
            {
              url: "https://boardgamegeek.com/boardgame/379935/kartini-from-darkness-to-light",
              label: "Kartini on BGG",
            },
          ]}
        />
      </PortfolioRowFrame>
    </>
  );
}
