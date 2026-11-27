import ImageDisplay from "../components/ImageDisplay";
import List from "../components/List";
import MarkdownSection from "../components/MarkdownSection";
import ProjectLinks from "../components/ProjectLinks";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import nestedTooltipsMarkdown from "../markdown/NestedTooltips.md?raw";
import { parseMarkdownByHeaders } from "../utils/parseMarkdown";

const MarkdownText = parseMarkdownByHeaders(nestedTooltipsMarkdown);

export default function EdvinsNestedTooltips() {
  return (
    <>
      <TitleSection
        title="Edvin's Nested Tooltips"
        subtitle="Unity Asset to easily add nested tooltips based on a keyword system"
      />
      <Section>
        <MarkdownSection
          name="Overview"
          description={MarkdownText.Overview}
        >
          <ProjectLinks
            itchLink="https://acasez.itch.io/edvins-nested-tooltips"
            githubLink="https://github.com/Acasez/EdvinsLayeredTooltips"
          />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/EdvinsLayeredTooltips/CardTooltip.JPG"
          altText="Screenshot showing a card and a tooltip displaying the Nature Track feature from the Mariestad Climate Game"
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/EdvinsLayeredTooltips/TooltipsExample.JPG"
          altText="Example of nested tooltips"
          coverImage={false}
        />
        <List
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
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/EdvinsLayeredTooltips/Chain of tooltips.JPG"
          altText="Example of nested tooltips"
          imageCaption="Example of the nested tooltips in the Mariestad Climate Game"
          coverImage={false}
        />
        <ImageDisplay
          imageLocation="images/EdvinsLayeredTooltips/LotsATooltip.JPG"
          altText="Example of nested tooltips"
          imageCaption="Example of many tooltips for different keywords in the tutorial for High Frontier 4 All"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="Tooltips"
          description={MarkdownText.Tooltips}
        />
        <ImageDisplay
          imageLocation="images/EdvinsLayeredTooltips/TooltipsInGame.JPG"
          altText="Screenshot of a chain of nested tooltips in High Frontier 4 All"
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Implementation"
          description={MarkdownText.Implementation}
        />
        <ImageDisplay
          imageLocation="images/EdvinsLayeredTooltips/TooltipManager.JPG"
          altText="Screenshot of the tooltip manager in the inspector view in Unity"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="Keywords"
          description={MarkdownText.Keywords}
        />
        <ImageDisplay
          imageLocation="images/EdvinsLayeredTooltips/IconImage.JPG"
          altText="Screenshot of a nested tooltip displaying the Tag keyword in the Mariestad Climate Game"
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/EdvinsLayeredTooltips/KeywordScriptableObject.JPG"
          altText="Screenshot of a the a keyword Scriptable Object in the unity inspector"
          imageCaption="Example of a keyword Scriptable Object"
          coverImage={false}
        />
        <ImageDisplay
          imageLocation="images/EdvinsLayeredTooltips/ExampleSceneInGame.JPG"
          altText="Screenshot of a the scene object management showing objects"
          imageCaption="The layout of the scene objects in the example scene with a tooltip open"
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Development Process"
          description={MarkdownText.DevelopmentProcess}
        />
        <ImageDisplay
          imageLocation="images/EdvinsLayeredTooltips/TopBarIncomeTextChained.JPG"
          altText="Screenshot of a nested tooltip displaying the Tag keyword in the Mariestad Climate Game"
          coverImage={false}
        />
      </Section>
    </>
  );
}
