import PortfolioDoubleImageRow from "../components/PortfolioDoubleImageRow";
import PortfolioListRow from "../components/PortfolioListRow";
import PortfolioRow from "../components/PortfolioOverviewRow";
import PortfolioRowFrame from "../components/PortfolioRowFrame";
import TitleSection from "../components/TitleSection";

export default function EdvinsNestedTooltips() {
  return (
    <>
      <TitleSection
        title="Edvin's Nested Tooltips"
        subtitle="Unity Asset to easily add nested tooltips based on a keyword system"
      />
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Edvins Nested Tooltips
          imageLocation="src/Images/EdvinsLayeredTooltips/CardTooltip.JPG"
          altText="Screenshot showing a card and a tooltip displaying the Nature Track feature from the Mariestad Climate Game"
          description="Edvin's Nested Tooltips is exactly what it sounds like, it's a Unity Asset that helps easily add nested tooltips. Perfect for strategy games, rpg's or just any game with many mechanics and subsystems. Originally I was planning to put it up for purchase on the Unity Asset Store, but that proved a real hassle so I decided to instead make it available for free on itch.io (though you can still donate on itch if you really like it).
      "
          itchLink="https://acasez.itch.io/edvins-nested-tooltips"
          githubLink="https://github.com/Acasez/EdvinsLayeredTooltips"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioListRow //Edvins Nested Tooltips
          imageLocation="src/Images/EdvinsLayeredTooltips/TooltipsExample.JPG"
          altText="Example of nested tooltips"
          listHeader="Features"
          listContent={[
            "Lightweight, easy-to-use tooltip system.",
            "Expandable keywords (tooltips within tooltips).",
            "Icons via TMPro Sprite sheets.",
            "Scriptable Objects for custom keyword info.",
            "Dedicated canvas layer (default: 200) to avoid UI conflicts.",
            "3 default tooltip types: custom text, keywords, and inline text fields.",
            "Lock/unlock tooltips with middle mouse button (configurable).",
            "Customizable settings: appear time, text color, formatting, titles and more.",
            "Instantiates only at game start, no runtime overhead.",
            "Includes example scene with setup guides.",
          ]}
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioDoubleImageRow //Edvins Nested Tooltips
          imageLocationOne="src/Images/EdvinsLayeredTooltips/Chain of Tooltips.JPG"
          altTextOne="Example of nested tooltips"
          imageCaptionOne="Example of the nested tooltips in the Mariestad Climate Game"
          imageLocationTwo="src/Images/EdvinsLayeredTooltips/LotsATooltip.JPG"
          altTextTwo="Example of nested tooltips"
          imageCaptionTwo="Example of many tooltips for different keywords in the tutorial for High Frontier 4 All"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Edvins Nested Tooltips
          name="Tooltips"
          imageLocation="src/Images/EdvinsLayeredTooltips/TooltipsInGame.JPG"
          altText="Screenshot of a chain of nested tooltips in High Frontier 4 All"
          description="A tooltip is simply a message that appears in a text box when you hover over a UI element. They are common in video games, but also on websites and in software. I have some tooltips on the Kastorix Character Sheet page. Doing tooltips in Unity isn’t particularly hard, there are many youtube tutorials on the subject and and you can find free assets for tooltips on the Unity Store
To make a tooltip you need a way to check if the user is hovering over a specific UI element, a way to get the right tooltip text on an object and show it in the right place There are some things to keep in mind here, enabling raycasting on the UI element, checking canvas layers so nothing obscures the UI or the tooltip and deciding how you want to show the tooltip text."
        />
      </PortfolioRowFrame>
    </>
  );
}
