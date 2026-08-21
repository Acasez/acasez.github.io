import MediaDisplay from "../components/MediaDisplay";
import PortfolioCoverImage from "../PortfolioRows/PortfolioCoverImage";
import PortfolioDoubleImageRow from "../PortfolioRows/PortfolioDoubleImageRow";
import PortfolioListRow from "../PortfolioRows/PortfolioListRow";
import PortfolioRow from "../PortfolioRows/PortfolioOverviewRow";
import PortfolioRowFrame from "../PortfolioRows/PortfolioRowFrame";
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
          imageLocation="images/MariestadClimateGame/Gameboard in Play.jpg"
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
          imageLocationOne="images/MariestadClimateGame/HisMariestad.jpg"
          altTextOne="Photo from Skövde universities Web Page"
          imageLocationTwo="images/MariestadClimateGame/MariestadLaunch.webp"
          altTextTwo="Photo from the launch"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioListRow //Features List
          imageLocation="images/MariestadClimateGame/ActorCards.jpg"
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
          imageLocation="images/MariestadClimateGame/Game on boxes.jpg"
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
          imageLocation="images/MariestadClimateGame/Project Cards.jpg"
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
            imageLocation="images/MariestadClimateGame/cardssheet.JPG"
            altText="Google Sheet with the cards"
            imageCaption="Screenshot from our cards spreadsheet. The columns seen are; Name, Price, Requirements, Border, Tags (1-3), Construction, Effect, Flavor text, Version and Image Inspiration. Each row is a different card. We used different color codes to mark which cards had complete illustrations, new changes and other things that came up."
            coverImage={true}
          />
        </PortfolioCoverImage>
      </PortfolioRowFrame>
      <hr />
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Design Process
          name="Design Process"
          imageLocation="images/MariestadClimateGame/firstboard.png"
          altText="The first version of the game board. Had an awareness track and an event pile, but a much shorter pollution track and no VP display (it was counted on player boards)"
          imageCaption="The first printed version of the game board"
          description="When I started designing the game we looked at what mechanics would fit and how to implement them. I took a lot of inspiration from one of my favorite board games, Terraforming Mars, but I wanted a shorter experience that's easier to learn, for players new(er) to board games.

The first printed version of the board can be seen on the left. It had the pollution track, the traffic meter and green energy track we have today, but we also had an awareness meter and an event deck. The (blue) awareness track represented how aware and involved the inhabitants were regarding the climate issues. Players could raise awareness by playing certain cards and some cards needed a high awareness to be played or had other interactions with it. We ultimately chose to focus on other mechanics, but awareness or something could still be a good mechanic in an hypothetical expansion or in a similar game. For example an Awareness mechanic could work well with cards relating to protests and activism, something our game currently doesn't really portray.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Card Evolution
          name="Card Evolution"
          imageLocation="images/MariestadClimateGame/Kort evolution.jpg"
          altText="The evolution of card design in the game"
          imageCaption="Evolution of a card's design and layout during development. "
          description="While events and awareness were mechanics we tried and later removed, the core of the game has still remained similar to the start. The layout of the cards still has mostly the same parts, even if they have moved around a lot. The first cards were made by hand to test out game mechanics. When we started making cards digitally we tried different layouts and aesthetics. A lot of this work was done by Iris, as I was working on game mechanics but we worked together as layout and mechanics do inevitably intersect.

One change we made from the first prototypes was removing effects inherent in tags. At the start, a few tags had effects built into them. When playing a card with a nature tag you would increase your nature track. When playing a card with a path tag you would build a path and so on. At the same time, other tags like global had no inherent effect and were just for synergies. This was unclear to players and also limited us as we wanted cards to have at most 3 tags each. Now all of the effects cards have are written out in the effect box and tags are just used for synergies and requirements. We have also done some other improvements like putting the card’s requirements next to its price and giving flavor texts their own box, so they don't take up space on the card effect box.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Inspiration and Research
          name="Inspiration and Research"
          imageLocation="images/MariestadClimateGame/info_Sheet-Backside.png"
          altText="Card explanation sheet that comes with the game"
          description="When it comes to coming up with the actual cards themselves, that was pretty easy. It's not hard to find potential ideas to help solve/mitigate climate issues and then turning them into cards is fun. Back in October of 2022 we already had 98 cards and a large majority of them are still in the game today. Some cards have been removed, others renamed and many balance changes have been done. When it comes to inspiration for the cards I would like to thank the YouTube channel Undecided with Matt Ferrell and Wikipedia's Climate Change Mitigation page. They were great for finding inspiration and good jumping off points to start learning about related topics. The municipality of Mariestad has come with some suggestions for cards and feedback on my ideas, but it has also been an exchange of ideas both ways, with the game design process sending ideas to them too."
          webpageLinks={[
            {
              url: "https://www.youtube.com/@UndecidedMF",
              label: "Undecided with Matt Ferrell",
            },
            {
              url: "https://en.wikipedia.org/wiki/Climate_change_mitigation",
              label: "Climate Change Mitigation",
            },
          ]}
        />
      </PortfolioRowFrame>
      <hr />
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Fall 2023 Playtesting
          name="Fall 2023 Playtesting"
          imageLocation="images/MariestadClimateGame/beforeButWithBonus.png"
          altText="Game board at the start of playtesting"
          imageCaption="Game board at the start of playtesting"
          description="During the fall of 2023 I continually tested the game, primarily working on balance, clarity and replayability. Previous playtesting had largely been done in two ways; either me and Iris playing against each other with occasional guests joining in or at larger playtesting events at Mariestad or at some other climate related event/actor. The larger playtests generally involved people with limited experience with board games and sometimes with a limited time to play and finish a game. This meant that while we knew the game was pretty well balanced for two players we had little information on other player counts. I also wanted more players that could play multiple times and develop strategies and heuristics about the game. So during the fall of 2023, I spent a lot of time playtesting and iterating upon feedback from playtests. "
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Game Board Changes
          name="Game Board Changes"
          imageLocation="images/MariestadClimateGame/afterPlaytests.png"
          altText="Game board after playtests."
          imageCaption="Game board after playtests."
          description="The biggest changes from the testing was to the board. The earliest version of the game board had no way of scaling for player count. Some of the first playtests showed that we had to scale the pollution track to keep the challenge of becoming climate neutral, scaling it by 12.5 steps for every player (2 players start at 25, 3 at 37 and 4 at 50). For a while this worked pretty well. The traffic was most of the time reduced to zero before 2030 and that felt a bit unrealistic but otherwise everything worked well.

When I started playtesting with four experienced board gamers we started to see some interesting things however. The traffic meter often filled up halfway into the game. Now we had a bonus reward prepared for this, if a player builds public transport and the traffic meter is full for example, any excess produced will instead reward them with a positive opinion. This worked well in more casual groups, but it meant that for experienced groups, cards that built public transport effectively gave them positive opinion instead. And considering that if you have maxed out your positive opinion you instead got to draw a card, that created what we in playtesting referred to as a ‘draw machine’. Being able to pay 8 (or with one card, 4) money to draw a card as many times as you wanted removed the card scarcity from the game.

It wasn't an intended strategy. And while it was very fun the first few times you get it to work, it gets stale and feels like a strange dominant strategy. 

So what did I do to fix this? Well I didn't remove it, not fully. First off all I increased the amount of traffic steps from 8 to 12, and made it scale depending on the amount of players in the game. This meant that the traffic meter won't generally get filled halfway through most 4 player games and delays the formation of any draw engines. 
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Smaller Changes
          name="Smaller Changes"
          imageLocation="images/MariestadClimateGame/Lokala sponsorer.png"
          altText="Example of the card Lokala Sponsorer"
          imageCaption="Example of the card Lokala Sponsorer/Local Sponsors. Every card doesn't reduce pollution directly, you also got make sure you have the money needed for your projects"
          description="Most of the playtesting was done at AGES/Sugs, a board game club in Skövde. I especially want to thank Alexander Ros who attended most of the playtests and made some actor tier-lists (and later some art too). It was nice to see other peoples design thoughts on the balance of the game and how it shifted as I continued to adjust cards. The cards and actors aren't perfectly balanced, but many ‘broken’ combos are now gone and other cards that previously were bad were made stronger. A lot of cards have also been clarified and small elements that were confusing, have either been changed or removed. 

          I also changed some other minor things like the election mechanic. Previously the player who won these got some VP and income. This did however create the problem that only winning mattered and players with low amounts of opinion saw little point in trying to compete. By changing it so the election rewards scale depending on the amount of players, players have a reason to fight for 2nd or 3rd place. Losing an election in 3 or 4 player games causes players to lose VP/Income, meaning that players should always be incentivized to compete in elections and try to manage the municipality's opinion of them.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Tested Ideas
          name="Tested Ideas"
          imageLocation="images/MariestadClimateGame/election.png"
          altText="The Election board in the game, with scaling rewards based on placement vs the number of players"
          description="If a player gets their opinion above the max of 9 they get to draw a card instead, which was part of creating the ‘draw machine’ described earlier. To try to fix this I experimented with trying to limit the reward. One idea was to limit it to once per year. But tracking and displaying that on the player board could be hard. Another idea I had to fix it and add some more player interactivity to the game would be to add what I was calling a ‘citizens idea’ row. This would be a row of around 3 project cards that would refresh each year. When a player got above 9 opinion on a track they would get to pick one of these cards. As there are only three, it would create an incentive to ‘race’ for the cards and limit players from drawing too many each year

There could then also be ‘big business action’ to buy one of those cards for 8 or even 10 money. Drawing a card is almost never worth 10 money, but sometimes there are specific cards you really want and using it could also deny an opponent from getting it.

Ultimately we found that adding it would add too much complexity for casual players and that with the other changes to game length and the size of the traffic meter it wasn't necessary. It could have been a possible variant for the game, but that would require more playtesting and possibly more components.
"
        />
      </PortfolioRowFrame>
      <hr />
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //The Search for a Card Making Tool
          name="The Search for a Card Making Tool"
          imageLocation="images/MariestadClimateGame/BiologiskaStudier.png"
          altText="Example of the card Biologiska Studier/Biological Studies"
          imageCaption="Example of the card Biologiska Studier/Biological Studies"
          description="We started the project with hand written paper prototypes to test the concept. After seeing that they worked well, Iris started experimenting with card layouts in Clip Studio Paint, which she then could add card stats into and save for printing. After a while I took over editing the cards in Clip Studio Paint. This took some time and meant that if I wanted to change something on all cards, even minor details, I had to open them individually and change it. That wasn't very efficient and I felt like there should be a better solution

I had previous experience trying to use dedicated ‘card making tools’ like nanDeck without much success, but I still tried again. But both nanDeck and another alternative I found online; Cider had unclear UI’s and complex scripting languages. I did find a tool called Paperize, which I actually liked the UI and ease of use of, but it did not have support for Inline images in texts yet, so it didn't fit this task. So after nearly giving up I instead went, ‘well I guess I'll just make it myself’.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //My Unity Card Maker
          name="My Unity Card Maker"
          imageLocation="images/MariestadClimateGame/ScripatbleObject.JPG"
          altText="Scripatble Object for the card above"
          imageCaption="Scripatble Object for the card above"
          description="So I made a Unity project for it. I tried to use Godot at first but it had no built-in way to automatically scale font size, and I found that it would be better to use an engine I knew well. And well, it was a success. I made a scriptable object for project cards and a script that puts the cards together from all of their components and then takes a screenshot. Now to edit cards I simply change the values of the scriptable object for the card, and click run. With that working I did the same thing for actor cards. 

To handle the symbols in texts I use Unity's TextMeshPro style sheet, with a function I made that automatically adds them in when it sees specific words in the a string that it takes in the effect text in this case. Now I've learned how to use CSV files to import data from spreadsheets and use that to import data like this. In my current Unity projects, like the digital adaptation of the game I use CSV files to import data from spreadsheets to Unity, but I haven't yet updated this tool to use that."
          portfolioLinks={[
            {
              linkTo: "/portfolio-v2/MariestadDigitalAdaptation",
              label: "Digital Variant",
            },
          ]}
        />
      </PortfolioRowFrame>
    </>
  );
}
