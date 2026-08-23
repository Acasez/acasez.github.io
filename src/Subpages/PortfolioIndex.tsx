// Updated PortfolioIndex.tsx
import React from "react";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import TagOverview from "../components/TagOverview";
import TitleSection from "../components/TitleSection";
import PortfolioRow from "../PortfolioRows/PortfolioOverviewRow";
import PortfolioRowFrame from "../PortfolioRows/PortfolioRowFrame";
import {
  mainProjects,
  gameDrafts,
  smallProjects,
} from "../constants/PortfolioIndexProjects";

const tagGroups = [
  {
    title: "Programming Languages",
    tags: ["C#", "Javascript", "Python", "SQLite"],
  },
  {
    title: "Game Engines & Frameworks",
    tags: ["Unity", "Unreal", "Avalonia"],
  },
  {
    title: "Project Types",
    tags: [
      "Game",
      "Asset",
      "Board Game",
      "TTRPG",
      "Website",
      "Level Design",
      "Game Concept",
    ],
  },
  {
    title: "Project Scope",
    tags: ["Solo", "Group", "Professional Project", "Internship"],
  },
];

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
  // Your projects data - you'll want to move this to a separate file/data structure

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
      {/* Tags and Reset Button Container */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "16px",
          padding: "0 16px",
        }}
      >
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
          />
          {filteredMainProjects.map((project, index) => (
            <React.Fragment key={index}>
              <PortfolioRowFrame reverse={index % 2 === 0}>
                <PortfolioRow
                  imageLocation={project.imageLocation}
                  altText={project.altText}
                  projectTags={project.projectTags}
                  name={project.name}
                  subtitle={project.subtitle}
                  projectPageLink={project.projectPageLink}
                  description={project.description}
                  itchLink={project.itchLink}
                  githubLink={project.githubLink}
                  youtubeLink={project.youtubeLink}
                  webpageLinks={project.webpageLinks}
                />
              </PortfolioRowFrame>
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
          />
          <hr />
          {filteredGameDrafts.map((project, index) => (
            <React.Fragment key={index}>
              <PortfolioRowFrame reverse={index % 2 === 0}>
                <PortfolioRow {...project} />
              </PortfolioRowFrame>
              {index < filteredGameDrafts.length - 1 && <hr />}
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
          />
          {filteredSmallProjects.map((project, index) => (
            <React.Fragment key={index}>
              <PortfolioRowFrame reverse={index % 2 === 0}>
                <PortfolioRow {...project} />
              </PortfolioRowFrame>
              {index < filteredSmallProjects.length - 1 && <hr />}
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
