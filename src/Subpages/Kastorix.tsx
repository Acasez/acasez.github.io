import ImageDisplay from "../components/ImageDisplay";
import MarkdownSection from "../components/MarkdownSection";
import ProjectLinks from "../components/ProjectLinks";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import kastorixMarkdown from "../markdown/Kastorix.md?raw";
import { parseMarkdownByHeaders } from "../utils/parseMarkdown";
import "../CSS/HRLInes.css";

const MarkdownText = parseMarkdownByHeaders(kastorixMarkdown);

export default function Kastorix() {
  return (
    <>
      <TitleSection title="Kastorix" subtitle="Fantasy TTRPG" />
      <Section>
        <MarkdownSection name="Overview" description={MarkdownText.Overview}>
          <ProjectLinks
            webpageLinks={[
              {
                url: "https://acasez.github.io/kastorixv2",
                label: "TTRPG Home Page",
              },
              {
                url: "https://acasez.github.io/kastorix/Kastorix/RPG%20Overview.html",
                label: "Old page with more worldbuilding",
              },
            ]}
          />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/Kastorix/Maps/Kastorix.jpg"
          altText="World Map"
          imageCaption="Kastorix World Map, created in Wonderdraft"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <ImageDisplay
          imageLocation="images/Kastorix/Maps/Santsim.jpg"
          altText="Map of the smallest continent on Kastorix, Santsim"
          imageCaption="Map of the smallest continent on Kastorix, Santsim, which has the ancient desert nation of El-Shavri and the emerging federation of Glarnast"
          coverImage={false}
        />
        <ImageDisplay
          imageLocation="images/Kastorix/Maps/The Draconium.jpg"
          altText="Map of the largest nation in Kastorix, The Draconium, home of the dragons and the only surviving nation on the continent of Avijor."
          imageCaption="Map of the largest nation in Kastorix, The Draconium, home of the dragons and the only surviving nation on the continent of Avijor."
          coverImage={false}
        />
      </Section>
      <hr />
      <Section contentReverse={true}>
        <MarkdownSection
          name="Character Sheet"
          description={MarkdownText.CharacterSheet}
        >
          <ProjectLinks
            webpageLinks={[
              {
                url: "https://acasez.github.io/kastorixv2/characterSheet",
                label: "Character Sheet",
              },
              {
                url: "https://pathbuilder2e.com",
                label: "Pathbuilder",
              },
            ]}
          />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/Kastorix/Site/CharacterSheetV2.JPG"
          altText="An screenshot of the Character Sheet"
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/Kastorix/Site/CSV2SpellSelection.JPG"
          altText="Screenshot of the selection modal on the character sheet, the user looking at spells, filtered for those with the metal aspect."
          coverImage={false}
        />
        <ImageDisplay
          imageLocation="images/Kastorix/Site/CharacterSheetV2Selections.JPG"
          altText="Screenshot of character sheet, with the user having picked some more spells for their character Zulsa."
          coverImage={false}
        />
      </Section>
      <hr />
      <Section>
        <MarkdownSection name="DM Screen" description={MarkdownText.DMScreen}>
          <ProjectLinks
            webpageLinks={[
              {
                url: "https://acasez.github.io/kastorixv2/DMScreen",
                label: "Dm Screen",
              },
            ]}
          />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/Kastorix/Site/DmScreenV2.JPG"
          altText="Screenshot of the DM Screen with two creatures open"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="Data Handling"
          description={MarkdownText.DataHandling}
        />
        <ImageDisplay
          imageLocation="images/Kastorix/Site/Kastorix Sheets.JPG"
          altText="Screenshot of my google sheet open, showing some arcane feats"
          coverImage={false}
        />
      </Section>
    </>
  );
}
