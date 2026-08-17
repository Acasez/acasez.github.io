import PortfolioDoubleImageRow from "../components/PortfolioDoubleImageRow";
import PortfolioListRow from "../components/PortfolioListRow";
import PortfolioRow from "../components/PortfolioOverviewRow";
import PortfolioRowFrame from "../components/PortfolioRowFrame";
import TitleSection from "../components/TitleSection";

export default function Amsvartne() {
  return (
    <>
      <TitleSection
        title="Amsvartne"
        subtitle="Story rich atmospheric puzzle-platformer set in a mystical dieselpunk world"
      />
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Overview
          imageLocation="src/Images/Amsvartne/AmsvartneLamp.jpg"
          altText="Screenshot showing a card and a tooltip displaying the Nature Track feature from the Mariestad Climate Game"
          description="Amsvartne is a 2D puzzle platformer I made as part of the start up group Corvian Games (now Tiny Creature Games). It focuses on narrative exploration and puzzle solving using light to navigate levels and solve puzzles. It's set in a mystical mine in a fantasy dieselpunk setting. I worked on the game and level design, as well as programming multiple game systems.
"
          itchLink="https://corviangames.itch.io/amsvartne"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioListRow //Features List
          imageLocation="src/Images/Amsvartne/Amsvartnelorepage.JPG"
          altText="Lore text"
          listHeader="Things I've worked on"
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
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioDoubleImageRow //Double Image
          imageLocationOne="src/Images/Amsvartne/lightbehindwall.JPG"
          altTextOne="screenshot of the game, the player is walking through a door"
          imageLocationTwo="src/Images/Amsvartne/shineBright.JPG"
          altTextTwo="Bright Crystal that can be picked up"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Initial Idea
          name="Initial Idea"
          imageLocation="src/Images/Amsvartne/FirstScreenshot.JPG"
          altText="First Screenshot"
          imageCaption="The very first screenshot I took of the game"
          description="During the fall of 2024 we were doing some game jam style quick prototypes to get used to working together and find a cool game concept. Amsvartne, which begun as Escape The Mine, was one of those concepts and was pitched as a narrative focused platformer with a few puzzles, inspired by games like Limbo and Oknytt

My first job as a game designer was to work on exactly what those puzzles would be and setting up the main mechanics. As it's far easier to say ‘and we'll add some puzzles here’ than it is to actually do that
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Light as a Mechanic
          name="Light as a Mechanic"
          imageLocation="src/Images/Amsvartne/TurnAroundWithLight.gif"
          altText="Bright Crystal that can be picked up"
          description="After some early testing one of the key elements of the game we identified was light, both as a concept and main mechanic. The player, called Kol, finds a helmet with a light source and can use it to solve puzzles. The light mechanic also gave me as the designer a lot of ideas and concepts to make puzzles with. I designed puzzle elements like mirrors, lenses, crystals, light sensors and magical dark areas which I think could make for very cool puzzles."
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioDoubleImageRow //Double Image
          imageLocationOne="src/Images/Amsvartne/CrystalLight.gif"
          altTextOne="Crystals can change the lights intensity allowing to pass through magical darkness"
          imageCaptionOne="Crystals can change the lights intensity allowing to pass through magical darkness"
          imageLocationTwo="src/Images/Amsvartne/MultipleBounces.gif"
          altTextTwo="Lights can bounce on multiple mirrors"
          imageCaptionTwo="Lights can bounce on multiple mirrors"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Notes
          name="Notes"
          imageLocation="src/Images/Amsvartne/ExplosivesNoteGif.gif"
          altText="Gif of A note in the game. Featuring a scriptwriter effect"
          description="I also wrote most of the code for our notes system, which conveys the non-environmental storytelling. We started by using the Fungus plugin for text display, but I later made a custom script that handled the functionality we wanted to speed up development. The system stores notes using scriptable objects. It has a scriptwriter effect that causes letters to appear letter by letter, and a button to skip to the end of the note.
I also used textMeshPro style sheets to have icons displayed in the texts.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Testing Toolkit
          name="Testing Toolkit"
          imageLocation="src/Images/Amsvartne/TestingToolkit.JPG"
          altText="Testing Toolkit in unity inspector"
          description="To help test the game and new features we were developing I also made a testing toolkit script for the player. It features the variables seen to the side as well as keys for teleporting between checkpoints and summoning the camera to the player. Having a toolkit like this helped speed level design and testing a lot, and I will prioritize making one for future projects. From speaking with Ellis who worked on sound design for the game, he also seemed to have really appreciated the feature.
"
        />
      </PortfolioRowFrame>
    </>
  );
}
