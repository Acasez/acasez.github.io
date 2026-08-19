import PortfolioDoubleImageRow from "../components/PortfolioDoubleImageRow";
import PortfolioRow from "../components/PortfolioOverviewRow";
import PortfolioRowFrame from "../components/PortfolioRowFrame";
import TitleSection from "../components/TitleSection";

export default function HighFrontierTutorial() {
  return (
    <>
      <TitleSection
        title="High Frontier"
        subtitle="Tutorial and UI improvements for digital board game implementation"
      />
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Overview
          imageLocation="images/HighFrontier/mainmenu.jpg"
          altText="Screenshot of the Main Menu of High Frontier"
          description="During the fall of 2025 I returned to Ion Games for 3 months to do another internship, this one focusing on the digital side. I worked on making a tutorial and UI improvements for the digital implementation of the board game High Frontier, as well as various bug fixes, performance improvements and debug tools. I worked with many talented interns, as well as game designers in the company. "
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioDoubleImageRow //Overview
          imageLocationOne="images/HighFrontier/TutorialWelcome.jpg"
          altTextOne="Screenshot of the first bit of the tutorial"
          imageCaptionOne="The first message that greets you as you enter the tutorial."
          imageLocationTwo="images/HighFrontier/ReactorCard.jpg"
          altTextTwo="Screenshot of the a card called D-T GUN FUSION. In front of it we can see Tutorial text describing card types. "
          imageCaptionTwo="Tutorial text describing card types. You also see a tooltip describing the concept of a reactor card as the player is hovering over that word"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Tutorial Design
          name="Tutorial Design"
          imageLocation="images/HighFrontier/TooltipGameflow.jpg"
          altText="Tutorial page with an overview of the game concepts"
          description="My main priority was making the tutorial, something very necessary due to the game's complexity (the board game has a complexity rating of 4.8 on BGG), long learning curve and basic UI. I began by playing the game and analyzing its (56 pages) rulebook, to plan out a tutorial and see what steps were needed.


I knew I wanted the tutorial to be interactive, go through the core mechanics without being too long, and feature tooltips and modern UI design elements. So I decided to structure the tutorial in five parts; first steps and cards, rocket building, movement, sites and industrializing, and gameflow and goals.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Tutorial Implementation
          name="Tutorial Implementation"
          imageLocation="images/HighFrontier/AcademicLimitNoTooltip.jpg"
          altText="Tutorial Info on the hand size limit in the game"
          description="After design came implementation and programming. Since the game is built in Unity, a game engine I'm very familiar with, I wanted to try to code and implement the tutorial myself. I began with setting up a simple system that would display the tutorial windows from the cheat engine we use to test things in High Frontier, then went to add features such as a structure for pages, displaying text and going back and forth in the tutorial. I also programmed a system where the tutorial box could appear in five possible locations to not obscure the current relevant item. 


Then the challenge came with integrating the tutorial with the rest of the gameplay systems. Since I wanted the tutorial to be interactive I had to set up a system for it to check which UI element you had open. I also had to give it systems for giving the player cards, Aqua (the game's core resource), and placing rockets. There were many challenges here with working with old code, whose original designers had left the project, but I got help from the other interns at ION and our digital lead Stewart.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioDoubleImageRow //Overview
          imageLocationOne="images/HighFrontier/AuctionBid.jpg"
          altTextOne="Tutorial for the auction system"
          imageLocationTwo="images/HighFrontier/DoABoost.jpg"
          altTextTwo="Tutorial for the boost system"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Tooltips
          name="Tooltips"
          imageLocation="images/HighFrontier/AcademicLimitNoTooltip.jpg"
          altText="Tutorial Info on the hand size limit in the game"
          description="Besides having a tutorial I know I wanted tooltips, ideally layered tooltips like in Paradox Games, which I had coded before. Tooltips are an extremely useful bit of UI design, especially for complex games like this with many keywords. I designed the tooltips to show up on resource displays and UI elements, and set up with a simple Tooltip Trigger script that can be applied to more UI objects in the future. I also designed the tooltips to work on keywords in texts as seen below. 

My work here on tooltips later led me to develop Edvins Nested Tooltips as a standalone Unity asset for easy creation of nested tooltips
"
        />
      </PortfolioRowFrame>
    </>
  );
}
