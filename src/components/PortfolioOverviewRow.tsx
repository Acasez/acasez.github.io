import { Link } from "react-router-dom";
import "../CSS/PortfolioRow.css";
import "../CSS/ProjectLinks.css";
import "../CSS/ProjectTags.css";
import { memo } from "react";
import MediaDisplay from "./MediaDisplay";

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
}: PortFolioProps) {
  const LINK_CONFIG = [
    { label: "Itch.io", class: "itch" },
    { label: "Github", class: "github" },
  ] as const;
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
        <div className="project-links">
          {/* Fixed links (itch, github) */}
          {LINK_CONFIG.map(({ label, class: cls }) => {
            const url = label === "Itch.io" ? itchLink : githubLink;
            if (!url) return null;

            return (
              <a
                key={cls}
                href={url}
                className={`project-link ${cls}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            );
          })}

          {/* Custom webpage links */}
          {webpageLinks.map(({ url, label }) => (
            <a
              key={`${url}-${label}`} // Unique key combination
              href={url}
              className="project-link web"
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
        </div>
        <p />
      </div>
    </>
  );
}

export default memo(PortfolioRow);
