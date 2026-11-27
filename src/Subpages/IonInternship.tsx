import ImageDisplay from "../components/ImageDisplay";
import MarkdownSection from "../components/MarkdownSection";
import ProjectLinks from "../components/ProjectLinks";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import ionInternshipMarkdown from "../markdown/IonInternship.md?raw";
import { parseMarkdownByHeaders } from "../utils/parseMarkdown";

const MarkdownText = parseMarkdownByHeaders(ionInternshipMarkdown);

export default function IonInternship() {
  return (
    <>
      <TitleSection
        title="Ion Internship"
        subtitle="Internship at a board game company"
      />
      <Section>
        <MarkdownSection
          name="Overview"
          description={MarkdownText.Overview}
        >
          <ProjectLinks
            webpageLinks={[
              {
                url: "https://iongamedesign.com/",
                label: "Ion Game Design Website",
              },
            ]}
          />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/IonGames/IonGameDesignLogo.png"
          altText="The logo of Ion Games"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="Dino Dynasty"
          description={MarkdownText.DinoDynasty}
        >
          <ProjectLinks
            webpageLinks={[
              {
                url: "https://boardgamegeek.com/boardgame/416530/dino-dynasty",
                label: "Dino Dynasty on BGG",
              },
            ]}
          />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/IonGames/DINOEmailBox.png"
          altText="Dino Dynasty Kickstarter image"
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Atlas: Explore The World"
          description={MarkdownText.AtlasExploreTheWorld}
        >
          <ProjectLinks
            webpageLinks={[
              {
                url: "https://boardgamegeek.com/boardgame/424579/atlas-explore-the-world",
                label: "Atlas on BGG",
              },
            ]}
          />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/IonGames/AtlasAtTableTop.png"
          altText="Image of Atlas on Tabletop Simulator"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="Pax Viking"
          description={MarkdownText.PaxViking}
        >
          <ProjectLinks
            webpageLinks={[
              {
                url: "https://boardgamegeek.com/boardgame/303954/pax-viking",
                label: "Pax Viking on BGG",
              },
            ]}
          />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/IonGames/PaxViking.png"
          altText="Image of Pax Viking being played taken from BGG"
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Kartini - From Darkness to Light"
          description={MarkdownText.KartiniFromDarknessToLight}
        >
          <ProjectLinks
            webpageLinks={[
              {
                url: "https://boardgamegeek.com/boardgame/379935/kartini-from-darkness-to-light",
                label: "Kartini on BGG",
              },
            ]}
          />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/IonGames/Kartini.png"
          altText="Cover of Kartini"
          coverImage={false}
        />
      </Section>
    </>
  );
}
