import MediaDisplay from "../components/MediaDisplay";
import PortfolioCoverImage from "../components/PortfolioCoverImage";
import PortfolioDoubleImageRow from "../components/PortfolioDoubleImageRow";
import PortfolioListRow from "../components/PortfolioListRow";
import PortfolioRow from "../components/PortfolioOverviewRow";
import PortfolioRowFrame from "../components/PortfolioRowFrame";
import TitleSection from "../components/TitleSection";

export default function MariestadDigitalAdaptation() {
  return (
    <>
      <TitleSection
        title="Mariestad Digital Adaptation"
        subtitle="Digital Adaptation of the climate board game"
      />
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Overview
          imageLocation="src/images/MariestadDigitalAdaptation/NewMidScience.JPG"
          altText="The game in play"
          description="I made a digital, solo only, adaption of the Mariestad Board Game. It has most of the features of a physical board game and an inbuilt tutorial. It has support to be played in both English and Swedish and has options for different amounts of starting pollution, to provide different levels of challenge.
When I made my Unity Asset for layered tooltips I also updated this project to feature them.
"
          itchLink="https://acasez.itch.io/mariestad-climate-game"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioCoverImage>
          <MediaDisplay
            imageLocation="src/images/MariestadDigitalAdaptation/gameplay.gif"
            altText="Gif of gameplay"
            imageCaption="Some gameplay, you can see the mini animations as cards fly across the screen."
            coverImage={true}
          />
        </PortfolioCoverImage>
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioListRow //Features List
          imageLocation="src/images/MariestadDigitalAdaptation/CardExample.JPG"
          altText="Explanation of a cards cost in the tutorial"
          listHeader="Part of the tutorial explaining how a card costs work"
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
      </PortfolioRowFrame>
      <hr />
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Idea
          name="Idea and start"
          imageLocation="src/images/MariestadClimateGame/ScripatbleObject.JPG"
          altText="Card scripatble Object from Unity"
          description="When I was making the Unity Script that put together the cards for the Board Game, I got the idea of trying to actually make a digital adaptation. It would be nice to play and an easier way to show people the game design of the board game without having to sit down and play it. I had also gotten really into playing solo Terraforming Mars at https://terraforming-mars.herokuapp.com, and I liked the idea of making something similar.

I did most of the game code in spring 2024 as the game was being printed, and had a playable version in May. But for the initial versions I just used the games boards for UI, which looked awkward and was inefficient on a digital screen. I knew I wanted to fix something better, but I was a bit tired of the game then and took a few months break from the project.

In the fall of 2024 I took a remote course in UI design from Uppsala University and decided that was a good time to fix the UI of the digital adaption.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Idea
          name="Game Board Design"
          imageLocation="src/images/MariestadDigitalAdaptation/CurrentDigital.JPG"
          altText="Old UI for the game"
          imageCaption="The early UI for the digital adaptation "
          description="The first part of this was splitting up the game boards and moving elements around for a more natural feeling layout that follows strategy genre conventions. Money, Income and tags were moved to the top of the screen where resources generally are in strategy games. Many resources that used tracks in the board game were made into numbers instead to take advantage of the digital format.

I also changed the size of green energy and traffic tracks as the current size was way to fit for solo play. The pollution track I did a large redesign on, making into a dynamic display that shows the next couple of steps and their bonus rewards. This removes a lot of unused game elements and creates a nice visual of ‘pulling’ in pollution. It also allowed me to create an alternative setting where the bonuses on the track are randomly placed. 
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioDoubleImageRow //Double Image
          imageLocationOne="src/images/MariestadDigitalAdaptation/FigmaPlanning.JPG"
          altTextOne="Inspiration images I collected in a Figma board"
          imageCaptionOne="I began by finding images of UI for strategy, solarpunk and digital board games."
          imageLocationTwo="src/images/MariestadDigitalAdaptation/Wireframe0.1.JPG"
          altTextTwo="Wireframe Design"
          imageCaptionTwo="I then used Figma to plan out the new design for the UI, starting with a wireframe and adding more details over time. "
        />
      </PortfolioRowFrame>
    </>
  );
}
