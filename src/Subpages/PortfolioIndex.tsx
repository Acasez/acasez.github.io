// Updated PortfolioIndex.tsx
import React from "react";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import TagOverview from "../components/TagOverview";
import TitleSection from "../components/TitleSection";
import {
  mainProjects,
  gameDrafts,
  smallProjects,
} from "../constants/PortfolioIndexProjects";
import { tagGroups } from "../constants/TagGroups";
import MarkdownSection from "../components/MarkdownSection";
import Section from "../components/Section";
import ImageDisplay from "../components/ImageDisplay";
import ProjectLinks from "../components/ProjectLinks";
import ProjectTags from "../components/ProjectTags";

interface Project {
  imageLocation: string;
  altText: string;
  projectTags: string[];
  name: string;
  subtitle: string;
  projectPageLink?: string;
  description: string;
  itchLink?: string;
  githubLink?: string;
  youtubeLink?: string;
  webpageLinks?: { url: string; label: string }[];
  hasSubpage?: boolean;
}

// Define a type for your project arrays
type ProjectArray = Project[];

export default function PortfolioIndex() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter projects based on selected tag
  const filterProjects = (projects: ProjectArray): ProjectArray => {
    return selectedTag
      ? projects.filter((project) =>
          project.projectTags.includes(selectedTag || ""),
        )
      : projects;
  };

  const filteredMainProjects = filterProjects(mainProjects);
  const filteredGameDrafts = filterProjects(gameDrafts);
  const filteredSmallProjects = filterProjects(smallProjects);

  // Check if we have any projects to display in each section
  const hasMainProjects = filteredMainProjects.length > 0;
  const hasGameDrafts = filteredGameDrafts.length > 0;
  const hasSmallProjects = filteredSmallProjects.length > 0;

  return (
    <>
      <HeroSection />
      <div>
        <TagOverview
          groups={tagGroups}
          selectedTag={selectedTag}
          onTagClick={setSelectedTag}
        />
      </div>
      {hasMainProjects && (
        <>
          <TitleSection
            title="Main Projects"
            subtitle="Some of the projects I've done. Clicking on the titles go to their link"
            extraLine={
              selectedTag
                ? `Showing "${filteredMainProjects.length}" projects tagged with "${selectedTag}."`
                : ""
            }
            topBorder={true}
          />
          {filteredMainProjects.map((project, index) => (
            <React.Fragment key={index}>
              <Section contentReverse={index % 2 === 0}>
                <MarkdownSection
                  name={project.name}
                  tagLine={project.subtitle}
                  projectPageLink={project.projectPageLink}
                  description={project.description}
                >
                  <ProjectLinks
                    itchLink={project.itchLink}
                    githubLink={project.githubLink}
                    youtubeLink={project.youtubeLink}
                    webpageLinks={project.webpageLinks}
                  />
                  <ProjectTags projectTags={project.projectTags} />
                </MarkdownSection>
                <ImageDisplay
                  imageLocation={project.imageLocation}
                  altText={project.altText}
                  coverImage={false}
                />
              </Section>
              {index < filteredMainProjects.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </>
      )}
      {/* Game Drafts Section */}
      {hasGameDrafts && (
        <>
          <TitleSection
            title="Game Drafts and Cancelled projects"
            subtitle="For things that aren't finished, but I still have a lot to say about"
            extraLine={
              selectedTag
                ? `Showing "${filteredGameDrafts.length}" projects tagged with "${selectedTag}."`
                : ""
            }
            topBorder={true}
          />
          <hr />
          {filteredGameDrafts.map((project, index) => (
            <React.Fragment key={index}>
              <Section contentReverse={index % 2 === 0}>
                <MarkdownSection
                  name={project.name}
                  tagLine={project.subtitle}
                  projectPageLink={project.projectPageLink}
                  description={project.description}
                >
                  <ProjectLinks
                    itchLink={project.itchLink}
                    githubLink={project.githubLink}
                    youtubeLink={project.youtubeLink}
                    webpageLinks={project.webpageLinks}
                  />
                  <ProjectTags projectTags={project.projectTags} />
                </MarkdownSection>
                <ImageDisplay
                  imageLocation={project.imageLocation}
                  altText={project.altText}
                  coverImage={false}
                />
              </Section>
              {index < filteredMainProjects.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </>
      )}
      {/* Small Projects Section */}
      {hasSmallProjects && (
        <>
          <TitleSection
            title="Small Projects"
            subtitle="Small or old projects. They lack their own subpage"
            extraLine={
              selectedTag
                ? `Showing "${filteredSmallProjects.length}" projects tagged with "${selectedTag}."`
                : ""
            }
            topBorder={true}
          />
          {filteredSmallProjects.map((project, index) => (
            <React.Fragment key={index}>
              <Section contentReverse={index % 2 === 0}>
                <MarkdownSection
                  name={project.name}
                  tagLine={project.subtitle}
                  projectPageLink={project.projectPageLink}
                  description={project.description}
                >
                  <ProjectLinks
                    itchLink={project.itchLink}
                    githubLink={project.githubLink}
                    youtubeLink={project.youtubeLink}
                    webpageLinks={project.webpageLinks}
                  />
                  <ProjectTags projectTags={project.projectTags} />
                </MarkdownSection>
                <ImageDisplay
                  imageLocation={project.imageLocation}
                  altText={project.altText}
                  coverImage={false}
                />
              </Section>
              {index < filteredMainProjects.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </>
      )}
      {/* Show message if no projects match the filter */}
      {!hasMainProjects && !hasGameDrafts && !hasSmallProjects && (
        <p style={{ textAlign: "center", padding: "20px" }}>
          No projects found with the tag "{selectedTag}". Try another tag!
        </p>
      )}
    </>
  );
}
