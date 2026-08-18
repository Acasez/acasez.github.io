import PortfolioCoverImage from "../components/PortfolioCoverImage";
import PortfolioDoubleImageRow from "../components/PortfolioDoubleImageRow";
import PortfolioListRow from "../components/PortfolioListRow";
import PortfolioRow from "../components/PortfolioOverviewRow";
import PortfolioRowFrame from "../components/PortfolioRowFrame";
import TitleSection from "../components/TitleSection";

export default function CityState() {
  return (
    <>
      <TitleSection title="City State" subtitle="Turn Based City Builder" />
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Turn Based City Builder
          imageLocation="src/Images/CityState/EarlyGame.gif"
          altText="Gif of the game in play"
          imageCaption="Gif of the early game with the random tech option, showing some of the choices that appear."
          description="City State was made for my Bachelor's Thesis about different structures in Tech Trees. It's a fairly short city building game that was made to see how different tech tree structures of tech trees affect the gameplay experience. To do that I still needed to design an interesting and fun game, and I focused I worked on it afterwards to add some ‘juice’ to the game"
          itchLink="https://acasez.itch.io/city-state"
          webpageLinks={[
            {
              url: "https://his.diva-portal.org/smash/record.jsf?aq2=%5B%5B%7B%22dateIssued%22%3A%7B%22from%22%3A%222016%22%2C%22to%22%3A%22%22%7D%7D%2C%7B%22educationalProgramId%22%3A%224769%22%7D%5D%5D&c=10&af=%5B%5D&searchType=UNDERGRADUATE&sortOrder2=title_sort_asc&language=sv&pid=diva2%3A1672452&aq=%5B%5B%5D%5D&sf=all&aqe=%5B%5D&sortOrder=dateIssued_sort_desc&onlyFullText=false&noOfRows=50&dswid=404",
              label: "My Bachelors Thesis",
            },
          ]}
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioListRow //Features List
          imageLocation="src/Images/CityState/Planning.JPG"
          altText="A screenshot of a Miro Page with various notes for each tech, making up a tech tree"
          listHeader="Things I've worked on"
          listContent={[
            "Design document and planning, what do I need for the study? How should the game look and work?",
            "Designed the tech trees, balancing them while having them distinct",
            "Programmed the game in Unity with C#. Was my second game I coded in Unity",
            "Designed the first level and worked iteratively on multiple puzzles.",
            "Made the UI for the game. Worked on making everything readable and clear, using tooltips and icons.",
            "Organized playtests and adapting the game after feedback",
            "Made all of the pixel art, and some very simple animations for the watermill and expeditions.",
            "Did a qualitative analysis for my Bachelor's Thesis, using the game as an artifact.",
          ]}
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioDoubleImageRow //Double Image
          imageLocationOne="src/Images/CityState/BranchingTech.JPG"
          altTextOne="Screenshot of the branching Tech Tree"
          imageCaptionOne="Standard tech tree, designed first, inspired by the tech trees in games like Civilization. Techs have prerequisites and you can see the entire tech tree and plan ahead."
          imageLocationTwo="src/Images/CityState/RandomTech.JPG"
          altTextTwo="Random Tech Tree"
          imageCaptionTwo="Random tech tree, inspired by Stellaris. Every time you research a tech you get three semi-random options. Techs are separated into tiers but there are no direct connections. You have to research 2 techs from a tier to get options in the next tier. "
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Turn Based City Builder
          imageLocation="src/Images/CityState/TooltipTiny.JPG"
          altText="Zoomed in screenshot of a tooltip in the game"
          description="Implemented tool tips and icons to clearly display what everything does and icons to help the game feel and player learning. Having an UI that was easy to navigate was a high priority, as the focus for the participants should be on the mechanics."
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioCoverImage //Double Image
          imageLocationOne="src/Images/CityState/Readability_.JPG"
          altTextOne="Two Versions of the Top Bar, one is adjusted in color and placement to make ui elements clearer to read"
          imageCaptionOne="The top UI bar shows the different resources in the game and the players population. It went through many iterations to make it both readable and fit all the information needed."
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Adjacency Planning
          name="Adjacency Planning"
          imageLocation="src/Images/CityState/Indev2.jpg"
          altText="Early screenshot of the game, with the map and UI being far worse"
          imageCaption="Early screenshot of the game, with the map and UI being in development."
          description="When I started working on the game I knew I wanted some form of adjacency bonuses. Depending on where you place buildings they could give different bonuses or penalties based on other nearby buildings and features. At first I didn't really know why I felt like it was needed, mostly that most strategy/city building games had it and it made sense.

During development, when I was trying to figure out how I wanted to do adjacency bonuses I realized why they are important. They add flavor and theme to your city, by dividing it in regions and making parts distinct. If every part has the same buildings then it becomes boring, but if a smithy needs to be put next to a mine, then players are rewarded for specializing districts. Players could always make an industrial district with mines and smithies, but by adding adjacency bonuses you reward them for it.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Adjacency Implementation
          name="Adjacency Implementation"
          imageLocation="src/Images/CityState/LateGame.jpg"
          altText="Later screenshot of the game of a city with many built buildings"
          imageCaption="Later screenshot of the game of a city with many built buildings"
          description="I wanted to design the specialization in a way that gives players control and feel like they make interesting decisions. Instead of directly stating ‘this is or could be a good industrial region, you can only put mines here’ I let players plan out their own city and build districts how they want to. Before this I had already implemented fisheries and farm buildings that require coast and river plots respectively. They create regions in a sense, but those regions are predefined by the map layout, and not the player's choices.

The different colored triangles above buildings mark different regions. Some buildings affect other buildings in the same region. A smithy (the building in white region next to the wall) produces 1 iron for every mine in the region. Some buildings encourage different strategies, like the market (yellow building next to river) produces 1 culture for every unique type of building in the region, meaning that there is also a strategy in building a diverse region.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Terrain
          name="Terrain"
          imageLocation="src/Images/CityState/OtherCityBuilers.jpg"
          altText="Image of Cities Skylines, Civilization 6, Banished and Concrete Jungle"
          imageCaption="A look into four strategy/city building games and how you place buildings in them. Cities Skylines, Civilization 6, Banished and Concrete Jungle."
          description="One of the first design decisions I made was regarding the terrain. I compared other strategy and City Building games, did I want it grid or hex-based, or use a free placement similar to Cities Skylines and most other City Builders?

I decided on neither of them. Looking at it, grids and hexes are great for random map generation and turn based movement. But with neither of them in the game, I saw little point in using them. Similarly, free building placement seemed like it would be harder to code and balance. Free placement generally works well in games with a road and traffic system like in City Skylines, where players plot out roads and place buildings next to them. Road placement and traffic are common mechanics in city building games and you know, cities overall. But trying to implement a road system in a small game like this would be hard and beyond the scope of the project.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Uncertainty
          name="Uncertainty"
          imageLocation="src/Images/CityState/Itch7.JPG"
          altText="Screenshot of an event screen of an attack"
          imageCaption="Screenshot of an event screen of an attack"
          description="Overall I like the ‘plot’ system as I call it. It works, and is easy to code and implement. It did however remove a common source of uncertainty in games like this, the random terrain generation. This meant that the game only has three possible sources of uncertainty, random technology, barbarians and the expedition mechanic Since the random technology is a choice and only on for half the games for the study. and the expeditions is something players don't have to interact with you could be left with only the barbarians as a source of uncertainty. For the sake of this project that was fine, but if I were to continue working on the game I would want to add more sources of uncertainty."
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Future Lessons
          name="Future Lessons"
          imageLocation="src/Images/CityState/Itch8.jpg"
          altText="Screenshot of the Expedition mechanic, if the player has a harbour they can send out ships to explore the world and get random rewards."
          imageCaption="Screenshot of the Expedition mechanic, if the player has a harbour they can send out ships to explore the world and get random rewards"
          description="Still for the time I had on the project I think not trying to implement terrain generation was a good decision, the prototype would probably not have been completed in time if I tried. It's better to have a finished small game than a larger game stuck as a prototype. If I had done the project with more time or a team, I would have loved to try to make a terrain generation system with either a grid or hexes. Having that would have added another source of uncertainty and replayability. Alternatively I could look into other ways of adding randomness, like variation in what technologies and resources pop up."
        />
      </PortfolioRowFrame>
    </>
  );
}
