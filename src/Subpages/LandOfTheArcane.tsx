import ImageDisplay from "../components/ImageDisplay";
import List from "../components/List";
import MarkdownSection from "../components/MarkdownSection";
import Section from "../components/Section";
import TechTreeVisualizer from "../components/TechTreeVisualizer";
import TitleSection from "../components/TitleSection";
import landOfTheArcaneMarkdown from "../markdown/LandOfTheArcane.md?raw";
import { parseMarkdownByHeaders } from "../utils/parseMarkdown";
import "../CSS/HRLInes.css";

const MarkdownText = parseMarkdownByHeaders(landOfTheArcaneMarkdown);

export default function LandOfTheArcane() {
  return (
    <>
      <TitleSection
        title="Land Of The Arcane"
        subtitle="Fantasy/Magitech 4X Concept"
      />
      <Section>
        <MarkdownSection
          name="Introduction"
          description={MarkdownText.Introduction}
        />
        <ImageDisplay
          imageLocation="images/LandOfTheArcane/LateTechTree.jpg"
          altText="Screenshot of my tech tree on a Miro board showing the Age of Nations and Age of Magic"
          imageCaption="Part of the tech tree showing Age of Nations and Age of Magic"
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/LandOfTheArcane/EarlyCivicTree.jpg"
          altText="Screenshot of my civic tree on a Miro board showing the Age of Tribes and Age of Kingdoms"
          coverImage={false}
        />
        <List
          listHeader="Things I've worked on"
          listContent={[
            "Initial idea, worldbuilding",
            "Tech and Civic trees",
            "Concept for a dynamic culture system",
            "Ideas for a combat system and a unit editor.",
            "A pitch for the game",
            "Interactive visualiser for the tech and civic trees using Vis.Js",
          ]}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Overview"
          description={MarkdownText.Overview}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="The Pitch"
          description={MarkdownText.ThePitch}
        />
      </Section>
      <TechTreeVisualizer
        title="LOTA Tech Tree"
        jsonPath="TechTrees/tech_tree_data.json"
        defaultZoom={0.46}
      />
      <Section>
        <MarkdownSection
          name="Tech Tree"
          description={MarkdownText.TechTree}
        />
      </Section>
      <TechTreeVisualizer
        title="LOTA Civic Tree"
        jsonPath="TechTrees/civic_tree_data.json"
        defaultZoom={0.46}
      />
      <Section>
        <MarkdownSection
          name="Civic Tree"
          description={MarkdownText.CivicTree}
        />
      </Section>
      <hr />
      <Section>
        <MarkdownSection
          name="Species Creation"
          description={MarkdownText.SpeciesCreation}
        />
        <ImageDisplay
          imageLocation="images/LandOfTheArcane/SpeciesSetup.jpg"
          altText="A screenshot of the species design notes"
          imageCaption="My species notes and some example traits"
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/LandOfTheArcane/UnitDesign.jpg"
          altText="A screenshot of my unit design notes"
          coverImage={true}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Unit Editor"
          description={MarkdownText.UnitEditor}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Inspiration"
          description={MarkdownText.Inspiration}
        />
      </Section>
    </>
  );
}
