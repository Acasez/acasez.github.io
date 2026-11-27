import ImageDisplay from "../components/ImageDisplay";
import List from "../components/List";
import MarkdownSection from "../components/MarkdownSection";
import ProjectLinks from "../components/ProjectLinks";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import toHelAndBackMarkdown from "../markdown/ToHelAndBack.md?raw";
import { parseMarkdownByHeaders } from "../utils/parseMarkdown";
import "../CSS/HRLInes.css";

const MarkdownText = parseMarkdownByHeaders(toHelAndBackMarkdown);

export default function ToHelAndBack() {
  return (
    <>
      <TitleSection
        title="To Hel And Back"
        subtitle="Norse mythology inspired hack and slash roguelike"
      />
      <Section>
        <MarkdownSection
          name="Overview"
          description={MarkdownText.Overview}
        >
          <ProjectLinks
            itchLink="https://10hpstudios.itch.io/to-hel-and-back"
            youtubeLink="https://www.youtube.com/watch?v=7FwxtrYJtMs"
          />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/ToHelAndBack/axeattack.jpg"
          altText="Screenshot of the game during play, showing the main character Sif attacking enemies"
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/ToHelAndBack/PillarInUnity.jpg"
          altText="A screenshot of the game in the Unity Editor"
          coverImage={false}
        />
        <List
          listHeader="Things I worked on"
          listContent={[
            "Worked on design document with rest of the team, planned out features",
            "Planned out level designs in Unity using the Probuilder addon.",
            "Worked with the graphics team on level design and appearance",
            "Balanced by the different enemies and player attacks",
            "Organizing playtests and adapting the game after feedback",
            "Designed the attacks of different enemies with help from the programmers",
            "Designed and balanced the rune system, the roguelike perks",
          ]}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/ToHelAndBack/earlydesigndraft.jpg"
          altText="Screenshot of a level design wireframe in Unity overlaid with a UI concept"
          imageCaption="Early design draft made by taking a screenshot and laying over UI elements"
          coverImage={false}
        />
        <ImageDisplay
          imageLocation="images/ToHelAndBack/probuilder.jpg"
          altText="Screenshot of two copies a level draft in Unity, one with Probuilder shapes and one with actual models"
          imageCaption="I started by mapping out levels with Probuilder shapes then replaced them with actual models. Green cylinder represents the player, red represents a melee enemy and blue represents a ranged enemyl"
          coverImage={false}
        />
      </Section>
      <Section>
        <ImageDisplay
          imageLocation="images/ToHelAndBack/runechoice.jpg"
          altText="Screenshot of the rune choice menu, presenting three options."
          imageCaption="The game has powerups in forms of runes that you can choose between at end of each level. I worked on designing and balancing them"
          coverImage={false}
        />
        <ImageDisplay
          imageLocation="images/ToHelAndBack/lightpath.jpg"
          altText="Screenshot of a level from above"
          imageCaption="I worked with assets and lighting alongside our graphical team."
          coverImage={false}
        />
      </Section>
      <hr />
      <Section contentReverse={true}>
        <MarkdownSection
          name="Axe Throw"
          description={MarkdownText.AxeThrow}
        />
        <ImageDisplay
          imageLocation="images/ToHelAndBack/axethrow.gif"
          altText="Gif of Throwing the axe and teleporting to it."
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Homing Enemies"
          description={MarkdownText.HomingEnemies}
        />
        <ImageDisplay
          imageLocation="images/ToHelAndBack/homingenemies.gif"
          altText="Gif of large ranged enemy shooting homing projectiles"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="Aggression and Game Flow"
          description={MarkdownText.AggressionAndGameFlow}
        />
        <ImageDisplay
          imageLocation="images/ToHelAndBack/axeattack.jpg"
          altText="Screenshot of the player attacking"
          coverImage={false}
        />
      </Section>
      <hr />
      <Section>
        <MarkdownSection
          name="Character Design"
          description={MarkdownText.CharacterDesign}
        />
        <ImageDisplay
          imageLocation="images/ToHelAndBack/playermodel.jpg"
          altText="Screenshot of the player in Unity"
          imageCaption="The player model in Unity. All enemy models are just this one with a recolor and an attached mask"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name="Other Biomes"
          description={MarkdownText.OtherBiomes}
        />
        <ImageDisplay
          imageLocation="images/ToHelAndBack/treebiome.jpg"
          altText="Screenshot of my probuilder draft for the Yggdrasil biome"
          imageCaption="The player model in Unity. All enemy models are just this one with a recolor and an attached mask"
          coverImage={false}
        />
      </Section>
    </>
  );
}
