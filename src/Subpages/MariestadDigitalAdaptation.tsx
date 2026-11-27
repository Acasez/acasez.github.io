import ImageDisplay from "../components/ImageDisplay";
import List from "../components/List";
import MarkdownSection from "../components/MarkdownSection";
import ProjectLinks from "../components/ProjectLinks";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import mariestadDigitalAdaptationMarkdown from "../markdown/MariestadDigitalAdaptation.md?raw";
import { parseMarkdownByHeaders } from "../utils/parseMarkdown";
import "../CSS/HRLInes.css";

const MarkdownText = parseMarkdownByHeaders(mariestadDigitalAdaptationMarkdown);

export default function MariestadDigitalAdaptation() {
  return (
    <>
      <TitleSection
        title="Mariestad Digital Adaptation"
        subtitle="Digital Adaptation of the climate board game"
      />
      <Section>
        <MarkdownSection name="Overview" description={MarkdownText.Overview}>
          <ProjectLinks
            itchLink="https://acasez.itch.io/mariestad-climate-game"
            portfolioLinks={[
              {
                linkTo: "/portfolio-v2/MariestadClimateGame",
                label: "Board Game",
              },
              {
                linkTo: "/portfolio-v2/NestedTooltips",
                label: "Nested Tooltips",
              },
            ]}
          />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/MariestadDigitalAdaptation/NewMidScience.JPG"
          altText="The game in play"
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/MariestadDigitalAdaptation/gameplay.gif"
          altText="Gif of gameplay"
          imageCaption="Some gameplay, you can see the mini animations as cards fly across the screen."
          coverImage={true}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/MariestadDigitalAdaptation/CardExample.JPG"
          altText="Explanation of a cards cost in the tutorial"
          imageCaption="The tutorial (if enabled) shows up in the top left corner and explains the game concepts. It can be minimized, and their are options to go forwards and back in it."
          coverImage={false}
        />
        <List
          listHeader="Things I worked on"
          listContent={[
            "Made a unity script to put together cards from their components using scriptable objects",
            "Coded the game and its many possible interactions, between different cards and game mechanics",
            "Used google sheet as a card database and created a script to import data to unity from CSV files. ).",
            "Re-balanced the game for a solo only challenge",
            "Set up options for different difficulties and challenges ",
            "Changed cards that needed to work differently in a digital, singleplayer format",
            "Tested the game many times, and got feedback from friends, working iteratively.",
            "Redesigned the UI to be something that fit in a digital format and felt modern.",
            "Worked in Figma to plan out and prototype the UI. ",
            "Added micro animations using the DOTween Unity plugin to add game fee",
            "Made an in game tutorial that explains how the game works.",
            "Made a simple localization system using JSON files so it can be played in both English and Swedish.",
            "Implemented my Nested Tooltips system.",
          ]}
        />
      </Section>
      <hr />
      <Section>
        <MarkdownSection
          name="Idea and Start"
          description={MarkdownText.IdeaAndStart}
        />
        <ImageDisplay
          imageLocation="images/MariestadClimateGame/ScripatbleObject.JPG"
          altText="Card scripatble Object from Unity"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="Game Board Design"
          description={MarkdownText.GameBoardDesign}
        />
        <ImageDisplay
          imageLocation="images/MariestadDigitalAdaptation/CurrentDigital.JPG"
          altText="Old UI for the game"
          imageCaption="The early UI for the digital adaptation"
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/MariestadDigitalAdaptation/FigmaPlanning.JPG"
          altText="Inspiration images I collected in a Figma board"
          imageCaption="I began by finding images of UI for strategy, solarpunk and digital board games."
          coverImage={false}
        />
        <ImageDisplay
          imageLocation="images/MariestadDigitalAdaptation/Wireframe0.1.JPG"
          altText="Wireframe Design"
          imageCaption="I then used Figma to plan out the new design for the UI, starting with a wireframe and adding more details over time."
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/MariestadDigitalAdaptation/PollutionTrack.JPG"
          altText="Screenshot of the Pollution Track in the digital game"
          imageCaption="The pollution track I described earlier. As you reduce pollution it gets moved into the green VP display, connecting the two elements and creating a visual of ‘pulling’ pollution into nature. I really like this visual idea, and even if it’s a small touch, I think it adds a lot."
          coverImage={false}
        />
        <ImageDisplay
          imageLocation="images/MariestadDigitalAdaptation/gameboardpollution.jpg"
          altText="Image of the Pollution Track on physical game board"
          imageCaption="The same pollution track on the physical game board"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="DoTween Micro Animations"
          description={MarkdownText.DoTweenMicroAnimations}
        />
        <ImageDisplay
          imageLocation="images/MariestadDigitalAdaptation/DoScale.JPG"
          altText="moneyText.transform.DOScale(1.1f, animationsTimer).OnComplete(() => ResetText(moneyText));"
          imageCaption="DOTween code for scaling up the money text temporary when your receive income, and then scaling it back after animationsTimer const has passed."
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/MariestadDigitalAdaptation/NewStart.JPG"
          altText="Screenshot of the game in the early game"
          coverImage={false}
        />
        <ImageDisplay
          imageLocation="images/MariestadDigitalAdaptation/NewEndGame.JPG"
          altText="Screenshot of the game in the late game"
          coverImage={false}
        />
      </Section>
    </>
  );
}
