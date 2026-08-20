import { Link } from "react-router-dom";
import "../CSS/PortfolioRow.css";
import "../CSS/ProjectLinks.css";
import "../CSS/ProjectTags.css";
import { memo } from "react";
import MediaDisplay from "./MediaDisplay";
import ProjectLinks from "./ProjectLinks";

interface PortFolioProps {
  imageLocation?: string;
  videoId?: string;
  altText: string;
  imageCaption?: string;
  projectTags?: string[];
  name?: string;
  subtitle?: string;
  projectPageLink?: string;
  description: string;
  itchLink?: string;
  githubLink?: string;
  webpageLinks?: { url: string; label: string }[];
  portfolioLinks?: { linkTo: string; label: string }[];
  //featuresList?: string[];
}

function PortfolioRow({
  imageLocation,
  videoId,
  altText,
  imageCaption,
  projectTags,
  name,
  subtitle,
  projectPageLink,
  description,
  itchLink,
  githubLink,
  webpageLinks = [],
  portfolioLinks = [],
}: PortFolioProps) {
  return (
    <>
      <div>
        <div className="portfolio-media">
          <MediaDisplay
            videoId={videoId}
            imageLocation={imageLocation}
            altText={altText}
            imageCaption={imageCaption}
            coverImage={false}
          />
        </div>
        {projectTags ? (
          <div className="project-tags">
            {projectTags.map((tag) => (
              <span
                key={tag}
                className={`tag ${tag.toLowerCase().replace("#", "sharp")}`}
              >
                {tag}
              </span>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="portfolio-text">
        {projectPageLink ? (
          <Link className="portfolio-title" to={projectPageLink}>
            {name}
          </Link>
        ) : (
          <h1 className="portfolio-title">{name}</h1>
        )}
        <p className="portfolio-subtitle">
          <strong>{subtitle}</strong>
        </p>
        <p className="portfolio-description">{description}</p>
        <ProjectLinks
          itchLink={itchLink}
          githubLink={githubLink}
          webpageLinks={webpageLinks}
          portfolioLinks={portfolioLinks}
        />
        <p />
      </div>
    </>
  );
}

export default memo(PortfolioRow);
