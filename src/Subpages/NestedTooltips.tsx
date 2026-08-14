import PortfolioRow from "../components/PortfolioRow";
import TitleSection from "../components/TitleSection";

export default function EdvinsNestedTooltips() {
  return (
    <>
      <TitleSection
        title="Edvin's Nested Tooltips"
        subtitle="Unity Asset to easily add nested tooltips based on a keyword system"
      />
      <PortfolioRow //Edvins Nested Tooltips
        reverse={true}
        imageLocation="src/Images/EdvinsLayeredTooltips/CardTooltip.JPG"
        altText="Example of tooltip"
        description="Edvin's Nested Tooltips is exactly what it sounds like, it's a Unity Asset that helps easily add nested tooltips. Perfect for strategy games, rpg's or just any game with many mechanics and subsystems. Originally I was planning to put it up for purchase on the Unity Asset Store, but that proved a real hassle so I decided to instead make it available for free on itch.io (though you can still donate on itch if you really like it).
      "
        itchLink="https://acasez.itch.io/edvins-nested-tooltips"
        githubLink="https://github.com/Acasez/EdvinsLayeredTooltips"
      />
    </>
  );
}
