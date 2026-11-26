import ProjectLinks from "./ProjectLinks";
import overviewMarkdown from "../markdown/Intro.md?raw";
import { parseMarkdownByHeaders } from "../utils/parseMarkdown";
import MarkdownSection from "./MarkdownSection";

const DESC = parseMarkdownByHeaders(overviewMarkdown);

export default function HeroSection() {
  return (
    <>
      <section id="top" className="bg-linear-to-b from-sky-300">
        <div className="flex flex-row p-3 gap-3">
          <img
            className="rounded-lg w-75 h-75"
            src="images/AboutMe/Photo.jpg"
            alt="Picture of me"
          />
          <div className="text-black text-lg">
            <h2 className="text-4xl text-center underline m-1">Heya!</h2>
            <MarkdownSection description={DESC.Overview} children={false} />
            <ProjectLinks
              itchLink="https://acasez.itch.io"
              githubLink="https://github.com/Acasez"
              webpageLinks={[
                {
                  url: "https://linkedin.com/in/edvin-skosgholm-sanne",
                  label: "LinkedIn",
                },
                {
                  url: "mailto:edvin.sanne@gmail.com",
                  label: "Mail",
                },
              ]}
            />
            <p />
          </div>
        </div>
      </section>
    </>
  );
}
