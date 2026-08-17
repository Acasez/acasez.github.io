import PortfolioCoverImage from "../components/PortfolioCoverImage";
import PortfolioDoubleImageRow from "../components/PortfolioDoubleImageRow";
import PortfolioRow from "../components/PortfolioOverviewRow";
import PortfolioRowFrame from "../components/PortfolioRowFrame";
import TitleSection from "../components/TitleSection";

export default function AboutMe() {
  return (
    <>
      <TitleSection title="About Me" subtitle="Yup, that's me" />
      <PortfolioRowFrame reverse={false}>
        <PortfolioCoverImage //Double Image
          imageLocationOne="src/Images/AboutMe/SkövdeSlice.jpg"
          altTextOne="Picture of Skövde from the nearby hill of Billingen, taken by me"
          imageCaptionOne="Picture of Skövde from the nearby hill of Billingen, taken by me"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Overview
          imageLocation="src/Images/AboutMe/Photo.jpg"
          altText="Picture of me"
          description="Hiya, welcome to the About Me page.

I grew up in the city of Norrköping, moved to Stockholm when I was 13 and lived there for 6 years. After that I moved to Skövde and studied game design for 6 years, getting a Bachelor’s Degree in Game Design and a Master’s in Digital Narration and Cultural Heritage from Högskolan i Sköve/Skövde University. Sadly that didn't give me a job, but it was a good time. 

Now I'm back in Stockholm looking for work, but I am open to moving to some other part of Sweden (or nearby EU countries) if I find a job there. Currently I'm studying fullstack programming/software development via a course by Lexicon/LTU. I’m also developing my own TTRPG, and organizing board game events at my nearest library. 
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Strategy Games
          imageLocation="src/Images/AboutMe/CK3Reform.jpg"
          altText="Screenshot from Crusader Kings 3 of me reforming the Asatru faith"
          description="I play a variety of games, but as I mentioned in my initial blurb on the front page and you might guess by the rest of my portfolio, strategy games are my favorite. I like grand strategy games (EU4, CK3), 4X's (Civ 5 & 6, Stellaris, Age of Wonders 3 & 4), turn based tactics (Xcom, Darkest Dungeon, Baldur's Gate 3), card games (Slay the Spire 1 & 2, Marvel Snap), city builders (City Skylines, Against The Storm) and more bite-sized strategy games (Slipways, Terraformers, FTL, Into the Breach).

While I like most types of strategy games, I don’t vibe as much with games like Starcraft or Age of Empires, as I find real time strategy games without pause quite stressful. Real time with pause like FTL or Shadow Gambit are cool though.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Other Games
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
