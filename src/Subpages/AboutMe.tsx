import TitleSection from "../components/TitleSection";
import Section from "../components/Section";
import MarkdownSection from "../components/MarkdownSection";
import aboutMeMarkdown from "../markdown/AboutMe.md?raw";
import { parseMarkdownByHeaders } from "../utils/parseMarkdown";
import ImageDisplay from "../components/ImageDisplay";
import ProjectLinks from "../components/ProjectLinks";

const MarkdownText = parseMarkdownByHeaders(aboutMeMarkdown);

export default function AboutMe() {
  return (
    <>
      <TitleSection
        title="About Me"
        subtitle="Yup, that's me"
        topBorder={false}
      />
      <Section>
        <ImageDisplay
          imageLocation="images/AboutMe/SkövdeSlice.jpg"
          altText="Picture of Skövde from the nearby hill of Billingen, taken by me"
          imageCaption="Picture of Skövde from the nearby hill of Billingen, taken by me"
          coverImage={true}
        />
      </Section>
      <Section>
        <MarkdownSection
          name="Yo"
          tagLine="Welcome to the About Me page"
          description={MarkdownText.Overview}
          children={undefined}
        ></MarkdownSection>
        <ImageDisplay
          imageLocation="images/AboutMe/Photo.jpg"
          altText="Picture of me"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name={"Strategy Games"}
          description={MarkdownText.StrategyGames}
          children={undefined}
        ></MarkdownSection>
        <ImageDisplay
          imageLocation="images/AboutMe/CK3Reform.jpg"
          altText="Screenshot from Crusader Kings 3 of me reforming the Asatru faith"
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection
          name={"Other Games"}
          description={MarkdownText.OtherGames}
          children={undefined}
        ></MarkdownSection>
        <ImageDisplay
          imageLocation="images/AboutMe/HFWCauldron.jpg"
          altText="Screenshot from Horizon Forbidden West, me playing as Aloy gliding into a Cauldron"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection
          name={"Board Games"}
          description={MarkdownText.BoardGames}
          children={undefined}
        ></MarkdownSection>
        <ImageDisplay
          imageLocation="images/AboutMe/Sugs.jpg"
          altText="Image of (some of) the games at SUGS"
          coverImage={false}
        />
      </Section>
      <Section>
        <MarkdownSection name={"TTRPG"} description={MarkdownText.TTRPG}>
          <ProjectLinks
            portfolioLinks={[
              {
                linkTo: "/portfolio-v2/Kastorix",
                label: "Kastorix",
              },
            ]}
          />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/AboutMe/Jadiar 1.1.png"
          altText="A Map I used as setting for a Pathfinder campaign"
          coverImage={false}
        />
      </Section>
      <Section contentReverse={true}>
        <MarkdownSection name={"Reading"} description={MarkdownText.Reading}>
          <ProjectLinks
            webpageLinks={[
              {
                url: "https://archiveofourown.org/works/45724504",
                label: "Meridian Sunsets (AO3)",
              },
            ]}
          />
        </MarkdownSection>
        <ImageDisplay
          imageLocation="images/AboutMe/Bookshelf.jpg"
          altText="An image a row of my bookshelf"
          coverImage={false}
        />
      </Section>
    </>
  );
}
