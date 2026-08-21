import PortfolioDoubleImageRow from "../PortfolioRows/PortfolioDoubleImageRow";
import PortfolioRow from "../PortfolioRows/PortfolioOverviewRow";
import PortfolioRowFrame from "../PortfolioRows/PortfolioRowFrame";
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
      <hr />
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Tooltips
          name="Tooltips"
          imageLocation="images/HighFrontier/AcademicLimitNoTooltip.jpg"
          altText="Tutorial Info on the hand size limit in the game"
          description="Besides having a tutorial I know I wanted tooltips, ideally layered tooltips like in Paradox Games, which I had coded before. Tooltips are an extremely useful bit of UI design, especially for complex games like this with many keywords. I designed the tooltips to show up on resource displays and UI elements, and set up with a simple Tooltip Trigger script that can be applied to more UI objects in the future. I also designed the tooltips to work on keywords in texts as seen below. 

          My work here on tooltips later led me to develop Edvin's Nested Tooltips as a standalone Unity asset for easy creation of nested tooltips
          "
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Keyword System
          name="Keyword System"
          imageLocation="images/HighFrontier/KeywordsSheet.JPG"
          altText="Keyword sheet on google sheets I used while developing the system"
          imageCaption="Keyword sheet on google sheets I used while developing the system. I also used the same document to plan out the tutorial phases"
          description="One UI element I really think is great is the layered tooltip system used in Crusader Kings 3 and other recent paradox games. It allows you to quickly understand concepts and connect them and is very helpful for understanding complex games. After designing the tutorial, I also designed a keyword system, which is used to underline words and add icons in the text, and lead into a nested tooltip system, that I later developed into Edvin’s Nested Tooltips, a standalone Unity asset for easy creation of nested tooltips."
          portfolioLinks={[
            {
              linkTo: "/portfolio-v2/EdvinsNestedTooltips",
              label: "Edvin's Nested Tooltips",
            },
          ]}
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Other UI Improvements
          name="Other UI Improvements"
          imageLocation="images/HighFrontier/sitenodeprefab.JPG"
          altText="Screenshot of the game in Unity."
          imageCaption="Screenshot of the game in Unity. I know that some people are working on a more PC focused UI for the game overall, which will definitely help."
          description="During my time working on High Frontier I also helped with some other UI improvements. One early problem I found was that it was really hard to differentiate the sprites for claims, factories and colonies at a glance so I set up a system where the name texts for factory sites are underlined (and colonized sites are also bolded). 

As part of making the keywords system I set up a SpriteSheet with all the icons in Krita and used that to make a TextMeshPro sprite sheet, which could be used in all sorts of texts.
I used the sprites to update the support chain interface when selecting parts to use symbols instead of text, and did some minor tweaks such as graying out buttons that can’t be used. There are still some cases where the game should be better at communicating to the player that something is impossible before they try, but there are fewer now and hopefully future designers can continue to work on it.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Refactored Code
          name="Refactored Code"
          imageLocation="images/HighFrontier/MovementTooltip.jpg"
          altText="Screenshot of the game quite zoomed out. The player is hovering over the Aqua display on the interface, showing a tooltip."
          description="Finally I did some fixes in the code backend to increase performance and clarity. One thing I fixed in multiple locations was reducing the game’s overreliance on instantiating objects for display and UI.
For example, when I joined the game it would instantiate the “chit” tokens for every site that wasn’t unexplored every turn and every time one site somewhere changed. This could easily be replaced with a system that includes the chit token in the prefab, but has it hidden by default. When the site needs to show that it’s a claim/factory/colony/bust, it changes the color, sprite and sets it to be shown.

Unnecessary instantiating and destruction of objects is bad for performance and adds more things to keep in memory and also makes the prefabs themselves harder to interact with in editor as everything is split into tiny prefabs. There were many other similar examples of instantiating prefabs, where just serializing objects and showing, hiding and changing their sprite would work.
"
        />
      </PortfolioRowFrame>
    </>
  );
}
