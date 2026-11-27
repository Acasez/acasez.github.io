import ImageDisplay from "../components/ImageDisplay";
import List from "../components/List";
import MarkdownSection from "../components/MarkdownSection";
import ProjectLinks from "../components/ProjectLinks";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import mariestadClimateGameMarkdown from "../markdown/MariestadClimateGame.md?raw";
import { parseMarkdownByHeaders } from "../utils/parseMarkdown";
import "../CSS/HRLInes.css";

const MarkdownText = parseMarkdownByHeaders(mariestadClimateGameMarkdown);

export default function MariestadClimateGame() {
  return (
    <>
      <TitleSection
        title="Mariestad Climate Board Game"
        subtitle="Eurogame style board game about city planning and sustainability"
      />
      <Section>
        <MarkdownSection
          name="Overview"
          description={MarkdownText.Overview}
        >
          <ProjectLinks
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
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/MariestadClimateGame/Gameboard in Play.jpg"
          altText="The game in play"
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/MariestadClimateGame/HisMariestad.jpg"
          altText="Photo from Skövde universities Web Page"
          coverImage={false}
        />
        <ImageDisplay
          imageLocation="images/MariestadClimateGame/MariestadLaunch.webp"
          altText="Photo from the launch"
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/MariestadClimateGame/ActorCards.jpg"
          altText="Actor Cards"
          imageCaption="Actor Cards from the game"
          coverImage={false}
        />
        <List
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
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="Pitch and Crew"
          description={MarkdownText.PitchAndCrew}
        >
          <ProjectLinks
            webpageLinks={[
              {
                url: "https://his.diva-portal.org/smash/record.jsf?aq2=%5B%5B%5D%5D&c=2&af=%5B%5D&searchType=SIMPLE&sortOrder2=title_sort_asc&query=Skogsholm+Sanne%2C+Edvin+&language=sv&pid=diva2%3A1773941&aq=%5B%5B%5D%5D&sf=all&aqe=%5B%5D&sortOrder=dateIssued_sort_desc&onlyFullText=false&noOfRows=50&dswid=3853",
                label: "My Masters Thesis",
              },
            ]}
          />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/MariestadClimateGame/Game on boxes.jpg"
          altText="Game boxes"
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Project Cards"
          description={MarkdownText.ProjectCards}
        />
        <ImageDisplay
          imageLocation="images/MariestadClimateGame/Project Cards.jpg"
          altText="A bunch of project Cards"
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/MariestadClimateGame/cardssheet.JPG"
          altText="Google Sheet with the cards"
          imageCaption="Screenshot from our cards spreadsheet. The columns seen are; Name, Price, Requirements, Border, Tags (1-3), Construction, Effect, Flavor text, Version and Image Inspiration. Each row is a different card. We used different color codes to mark which cards had complete illustrations, new changes and other things that came up."
          coverImage={true}
        />
      </Section>
      <hr />
      <Section>
        <MarkdownSection
          name="Design Process"
          description={MarkdownText.DesignProcess}
        />
        <ImageDisplay
          imageLocation="images/MariestadClimateGame/firstboard.png"
          altText="The first version of the game board. Had an awareness track and an event pile, but a much shorter pollution track and no VP display (it was counted on player boards)"
          imageCaption="The first printed version of the game board"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="Card Evolution"
          description={MarkdownText.CardEvolution}
        />
        <ImageDisplay
          imageLocation="images/MariestadClimateGame/Kort evolution.jpg"
          altText="The evolution of card design in the game"
          imageCaption="Evolution of a card's design and layout during development."
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Inspiration and Research"
          description={MarkdownText.InspirationAndResearch}
        >
          <ProjectLinks
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
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/MariestadClimateGame/info_Sheet-Backside.png"
          altText="Card explanation sheet that comes with the game"
          coverImage={false}
        />
      </Section>
      <hr />
      <Section contentReverse={true}>
        <MarkdownSection
          name="Fall 2023 Playtesting"
          description={MarkdownText.Fall2023Playtesting}
        />
        <ImageDisplay
          imageLocation="images/MariestadClimateGame/beforeButWithBonus.png"
          altText="Game board at the start of playtesting"
          imageCaption="Game board at the start of playtesting"
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Game Board Changes"
          description={MarkdownText.GameBoardChanges}
        />
        <ImageDisplay
          imageLocation="images/MariestadClimateGame/afterPlaytests.png"
          altText="Game board after playtests."
          imageCaption="Game board after playtests."
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="Smaller Changes"
          description={MarkdownText.SmallerChanges}
        />
        <ImageDisplay
          imageLocation="images/MariestadClimateGame/Lokala sponsorer.png"
          altText="Example of the card Lokala Sponsorer"
          imageCaption="Example of the card Lokala Sponsorer/Local Sponsors. Every card doesn't reduce pollution directly, you also got make sure you have the money needed for your projects"
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Tested Ideas"
          description={MarkdownText.TestedIdeas}
        />
        <ImageDisplay
          imageLocation="images/MariestadClimateGame/election.png"
          altText="The Election board in the game, with scaling rewards based on placement vs the number of players"
          coverImage={false}
        />
      </Section>
      <hr />
      <Section contentReverse={true}>
        <MarkdownSection
          name="The Search for a Card Making Tool"
          description={MarkdownText.SearchForCardMakingTool}
        />
        <ImageDisplay
          imageLocation="images/MariestadClimateGame/BiologiskaStudier.png"
          altText="Example of the card Biologiska Studier/Biological Studies"
          imageCaption="Example of the card Biologiska Studier/Biological Studies"
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="My Unity Card Maker"
          description={MarkdownText.MyUnityCardMaker}
        >
          <ProjectLinks
            portfolioLinks={[
              {
                linkTo: "/portfolio-v2/MariestadDigitalAdaptation",
                label: "Digital Variant",
              },
            ]}
          />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/MariestadClimateGame/ScripatbleObject.JPG"
          altText="Scripatble Object for the card above"
          imageCaption="Scripatble Object for the card above"
          coverImage={false}
        />
      </Section>
    </>
  );
}
