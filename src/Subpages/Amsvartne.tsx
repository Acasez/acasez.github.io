import ImageDisplay from "../components/ImageDisplay";
import List from "../components/List";
import MarkdownSection from "../components/MarkdownSection";
import ProjectLinks from "../components/ProjectLinks";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import aboutMeMarkdown from "../markdown/Amsvartne.md?raw";
import { parseMarkdownByHeaders } from "../utils/parseMarkdown";

const MarkdownText = parseMarkdownByHeaders(aboutMeMarkdown);

export default function Amsvartne() {
  return (
    <>
      <TitleSection
        title="Amsvartne"
        subtitle="Story rich atmospheric puzzle-platformer set in a mystical dieselpunk world"
        topBorder={false}
      />
      <Section>
        <MarkdownSection name="Overview" description={MarkdownText.Overview}>
          <ProjectLinks itchLink="https://corviangames.itch.io/amsvartne" />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/Amsvartne/AmsvartneLamp.jpg"
          altText="Screenshot showing a card and a tooltip displaying the Nature Track feature from the Mariestad Climate Game"
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/Amsvartne/Amsvartnelorepage.JPG"
          altText="Lore text"
          coverImage={false}
        />
        <List
          listHeader={"Things I've worked on"}
          listContent={[
            "Programmed the light mechanic.",
            "Expandable keywords (tooltips within tooltips).",
            "Designed and programmed objects like mirrors, crystals and light sensors that interact with light.",
            "Designed the first level and worked iteratively on multiple puzzles.",
            "Programmed the respawn and lamp recharge system .",
            "Programmed and designed many level design and testing tools to speed up the development process.",
            "Programmed many different puzzle elements like moving platforms, rune puzzles and levers.",
            "Helped with narrative, worldbuilding and the ludo-narrative connection between the story and puzzles.",
          ]}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/Amsvartne/lightbehindwall.JPG"
          altText="Screenshot of the game, the player is walking through a door"
          imageCaption="The player is walking through a door"
          coverImage={false}
        />
        <ImageDisplay
          imageLocation="images/Amsvartne/shineBright.JPG"
          altText="Bright Crystal that can be picked up"
          imageCaption="Bright Crystal that can be picked up"
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Initial Idea"
          description={MarkdownText.InitialIdea}
        />
        <ImageDisplay
          imageLocation="images/Amsvartne/FirstScreenshot.JPG"
          altText="First Screenshot"
          imageCaption="The very first screenshot I took of the game"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="Light as a Mechanic"
          description={MarkdownText.Light}
        />
        <ImageDisplay
          imageLocation="images/Amsvartne/TurnAroundWithLight.gif"
          altText="Bright Crystal that can be picked up"
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/Amsvartne/CrystalLight.gif"
          altText="Crystals can change the lights intensity allowing to pass through magical darkness"
          imageCaption="Crystals can change the lights intensity allowing to pass through magical darkness"
          coverImage={false}
        />
        <ImageDisplay
          imageLocation="images/Amsvartne/MultipleBounces.gif"
          altText="Lights can bounce on multiple mirrors"
          imageCaption="Lights can bounce on multiple mirrors"
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection name="Notes" description={MarkdownText.Notes} />
        <ImageDisplay
          imageLocation="images/Amsvartne/ExplosivesNoteGif.gif"
          altText="Gif of A note in the game. Featuring a scriptwriter effect"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="Testing Toolkit"
          description={MarkdownText.Testing}
        />
        <ImageDisplay
          imageLocation="images/Amsvartne/TestingToolkit.JPG"
          altText="Testing Toolkit in unity inspector"
          coverImage={false}
        />
      </Section>
    </>
  );
}
