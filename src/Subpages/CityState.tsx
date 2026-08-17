import PortfolioListRow from "../components/PortfolioListRow";
import PortfolioRow from "../components/PortfolioOverviewRow";
import PortfolioRowFrame from "../components/PortfolioRowFrame";
import TitleSection from "../components/TitleSection";

export default function CityState() {
  return (
    <>
      <TitleSection
        title="City State"
        subtitle="Story rich atmospheric puzzle-platformer set in a mystical dieselpunk world"
      />
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Turn Based City Builder
          imageLocation="src/Images/CityState/EarlyGame.gif"
          altText="Gif of the game in play"
          imageCaption="Gif of the early game with the random tech option, showing some of the choices that appear."
          description="City State was made for my Bachelor's Thesis about different structures in Tech Trees. It's a fairly short city building game that was made to see how different tech tree structures of tech trees affect the gameplay experience. To do that I still needed to design an interesting and fun game, and I focused I worked on it afterwards to add some ‘juice’ to the game"
          itchLink="https://acasez.itch.io/city-state"
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
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Turn Based City Builder
          imageLocation="src/Images/CityState/TooltipTiny.JPG"
          altText="Zoomed in screenshot of a tooltip in the game"
          description="Implemented tool tips and icons to clearly display what everything does and icons to help the game feel and player learning. Having an UI that was easy to navigate was a high priority, as the focus for the participants should be on the mechanics."
        />
      </PortfolioRowFrame>
    </>
  );
}
