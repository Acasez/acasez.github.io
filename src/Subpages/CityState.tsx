import ImageDisplay from "../components/ImageDisplay";
import List from "../components/List";
import MarkdownSection from "../components/MarkdownSection";
import ProjectLinks from "../components/ProjectLinks";
import Section from "../components/Section";
import TechTreeVisualizer from "../components/TechTreeVisualizer";
import TitleSection from "../components/TitleSection";
import cityStateMarkdown from "../markdown/CityState.md?raw";
import { parseMarkdownByHeaders } from "../utils/parseMarkdown";

const MarkdownText = parseMarkdownByHeaders(cityStateMarkdown);

export default function CityState() {
  return (
    <>
      <TitleSection title="City State" subtitle="Turn Based City Builder" />
      <Section>
        <MarkdownSection name="Overview" description={MarkdownText.Overview}>
          <ProjectLinks
            itchLink="https://acasez.itch.io/city-state"
            webpageLinks={[
              {
                url: "https://his.diva-portal.org/smash/record.jsf?aq2=%5B%5B%7B%22dateIssued%22%3A%7B%22from%22%3A%222016%22%2C%22to%22%3A%22%22%7D%7D%2C%7B%22educationalProgramId%22%3A%224769%22%7D%5D%5D&c=10&af=%5B%5D&searchType=UNDERGRADUATE&sortOrder2=title_sort_asc&language=sv&pid=diva2%3A1672452&aq=%5B%5B%5D%5D&sf=all&aqe=%5B%5D&sortOrder=dateIssued_sort_desc&onlyFullText=false&noOfRows=50&dswid=404",
                label: "My Bachelors Thesis",
              },
            ]}
          />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/CityState/EarlyGame.gif"
          altText="Gif of the game in play"
          imageCaption="Gif of the early game with the random tech option, showing some of the choices that appear."
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/CityState/Planning.jpg"
          altText="A screenshot of a Miro Page with various notes for each tech, making up a tech tree"
          coverImage={false}
        />
        <List
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
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/CityState/BranchingTech.jpg"
          altText="Screenshot of the branching Tech Tree"
          imageCaption="Standard tech tree, designed first, inspired by games like Civilization. Techs have prerequisites and you can see the entire tech tree and plan ahead."
          coverImage={false}
        />
        <ImageDisplay
          imageLocation="images/CityState/RandomTech.jpg"
          altText="Random Tech Tree"
          imageCaption="Random tech tree, inspired by Stellaris. Every time you research a tech you get three semi-random options. Techs are separated into tiers but there are no direct connections. You have to research 2 techs from a tier to get options in the next tier."
          coverImage={false}
        />
      </Section>
      <TechTreeVisualizer
        title="City State Tech Tree"
        jsonPath="TechTrees/city_state_tech_tree_data.json"
        defaultZoom={1.2}
      />
      <Section>
        <MarkdownSection
          name="Tooltips and Icons"
          description={MarkdownText.Tooltips}
        />
        <ImageDisplay
          imageLocation="images/CityState/TooltipTiny.JPG"
          altText="Zoomed in screenshot of a tooltip in the game"
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/CityState/Readability_.jpg"
          altText="Two Versions of the Top Bar, one is adjusted in color and placement to make UI elements clearer to read"
          imageCaption="The top UI bar shows the different resources in the game and the player's population. It went through many iterations to make it both readable and fit all the information needed."
          coverImage={true}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Adjacency Planning"
          description={MarkdownText.AdjacencyPlanning}
        />
        <ImageDisplay
          imageLocation="images/CityState/Indev2.jpg"
          altText="Early screenshot of the game, with the map and UI being far worse"
          imageCaption="Early screenshot of the game, with the map and UI being in development."
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="Adjacency Implementation"
          description={MarkdownText.AdjacencyImplementation}
        />
        <ImageDisplay
          imageLocation="images/CityState/LateGame.jpg"
          altText="Later screenshot of the game of a city with many built buildings"
          imageCaption="Later screenshot of the game of a city with many built buildings"
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection name="Terrain" description={MarkdownText.Terrain} />
        <ImageDisplay
          imageLocation="images/CityState/OtherCityBuilers.jpg"
          altText="Image of Cities Skylines, Civilization 6, Banished and Concrete Jungle"
          imageCaption="A look into four strategy/city building games and how you place buildings in them. Cities Skylines, Civilization 6, Banished and Concrete Jungle."
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="Uncertainty"
          description={MarkdownText.Uncertainty}
        />
        <ImageDisplay
          imageLocation="images/CityState/Itch7.jpg"
          altText="Screenshot of an event screen of an attack"
          imageCaption="Screenshot of an event screen of an attack"
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Future Lessons"
          description={MarkdownText.FutureLessons}
        />
        <ImageDisplay
          imageLocation="images/CityState/Itch8.jpg"
          altText="Screenshot of the Expedition mechanic, if the player has a harbour they can send out ships to explore the world and get random rewards."
          imageCaption="Screenshot of the Expedition mechanic, if the player has a harbour they can send out ships to explore the world and get random rewards"
          coverImage={false}
        />
      </Section>
    </>
  );
}
