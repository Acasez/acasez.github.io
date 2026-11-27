import ImageDisplay from "../components/ImageDisplay";
import List from "../components/List";
import MarkdownSection from "../components/MarkdownSection";
import ProjectLinks from "../components/ProjectLinks";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import highFrontierMarkdown from "../markdown/HighFrontier.md?raw";
import { parseMarkdownByHeaders } from "../utils/parseMarkdown";
import "../CSS/HRLInes.css";

const MarkdownText = parseMarkdownByHeaders(highFrontierMarkdown);

export default function HighFrontierTutorial() {
  return (
    <>
      <TitleSection
        title="High Frontier"
        subtitle="Tutorial and UI improvements for digital board game implementation"
      />
      <Section>
        <MarkdownSection
          name="Overview"
          description={MarkdownText.Overview}
        />
        <ImageDisplay
          imageLocation="images/HighFrontier/mainmenu.jpg"
          altText="Screenshot of the Main Menu of High Frontier"
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/HighFrontier/RadRoll.jpg"
          altText="A screenshot of the game explaining radiation belts"
          coverImage={false}
        />
        <List
          listHeader="Things I worked on"
          listContent={[
            "Planning out the tutorial parts, style and tone.",
            "Writing and testing the tutorial.",
            "Creating the tutorial components and coding it in C#.",
            "Connecting the tutorial script with other components, so it can guide the player.",
            "Playtesting and iterating the tutorial from feedback.",
            "Creating a system for tooltips and keywords.",
            "Making other UI improvements on the game.",
            "Refactoring game code for performance and clarity.",
          ]}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/HighFrontier/TutorialWelcome.jpg"
          altText="Screenshot of the first bit of the tutorial"
          imageCaption="The first message that greets you as you enter the tutorial."
          coverImage={false}
        />
        <ImageDisplay
          imageLocation="images/HighFrontier/ReactorCard.jpg"
          altText="Screenshot of the a card called D-T GUN FUSION. In front of it we can see Tutorial text describing card types."
          imageCaption="Tutorial text describing card types. You also see a tooltip describing the concept of a reactor card as the player is hovering over that word"
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Tutorial Design"
          description={MarkdownText.TutorialDesign}
        />
        <ImageDisplay
          imageLocation="images/HighFrontier/TooltipGameflow.jpg"
          altText="Tutorial page with an overview of the game concepts"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="Tutorial Implementation"
          description={MarkdownText.TutorialImplementation}
        />
        <ImageDisplay
          imageLocation="images/HighFrontier/AcademicLimitNoTooltip.jpg"
          altText="Tutorial Info on the hand size limit in the game"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <ImageDisplay
          imageLocation="images/HighFrontier/AuctionBid.jpg"
          altText="Tutorial for the auction system"
          coverImage={false}
        />
        <ImageDisplay
          imageLocation="images/HighFrontier/DoABoost.jpg"
          altText="Tutorial for the boost system"
          coverImage={false}
        />
      </Section>
      <hr />
      <Section contentReverse={true}>
        <MarkdownSection name="Tooltips" description={MarkdownText.Tooltips} />
        <ImageDisplay
          imageLocation="images/HighFrontier/AcademicLimitNoTooltip.jpg"
          altText="Tutorial Info on the hand size limit in the game"
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Keyword System"
          description={MarkdownText.KeywordSystem}
        >
          <ProjectLinks
            portfolioLinks={[
              {
                linkTo: "/portfolio-v2/EdvinsNestedTooltips",
                label: "Edvin's Nested Tooltips",
              },
            ]}
          />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/HighFrontier/KeywordsSheet.JPG"
          altText="Keyword sheet on google sheets I used while developing the system"
          imageCaption="Keyword sheet on google sheets I used while developing the system. I also used the same document to plan out the tutorial phases"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="Other UI Improvements"
          description={MarkdownText.OtherUIImprovements}
        />
        <ImageDisplay
          imageLocation="images/HighFrontier/sitenodeprefab.JPG"
          altText="Screenshot of the game in Unity."
          imageCaption="Screenshot of the game in Unity. I know that some people are working on a more PC focused UI for the game overall, which will definitely help."
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Refactored Code"
          description={MarkdownText.RefactoredCode}
        />
        <ImageDisplay
          imageLocation="images/HighFrontier/MovementTooltip.jpg"
          altText="Screenshot of the game quite zoomed out. The player is hovering over the Aqua display on the interface, showing a tooltip."
          coverImage={false}
        />
      </Section>
    </>
  );
}
