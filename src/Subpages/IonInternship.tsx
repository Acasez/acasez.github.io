import PortfolioListRow from "../components/PortfolioListRow";
import PortfolioRow from "../components/PortfolioOverviewRow";
import PortfolioRowFrame from "../components/PortfolioRowFrame";
import TitleSection from "../components/TitleSection";

export default function IonInternship() {
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
    </>
  );
}
