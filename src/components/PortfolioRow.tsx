import "../CSS/PortfolioRow.css";
import "../CSS/ProjectLinks.css";
import "../CSS/ProjectTags.css";
import { memo } from "react";

interface PortFolioProps {
  reverse: boolean;
  imageLocation?: string;
  videoId?: string;
  altText: string;
  projectTags: string[];
  name: string;
  subtitle: string;
  projectPageLink: string;
  description: string;
  itchLink?: string;
  githubLink?: string;
  webpageLinks?: { url: string; label: string }[];
}

function PortfolioRow({
  reverse,
  imageLocation,
  videoId,
  altText,
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
      <div
        className={reverse === true ? "portfolio-row reverse" : "portfolio-row"}
      >
        <div className="portfolio-media">
          <div className="portfolio-image">
            {videoId ? (
              // YouTube embed
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={altText}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="portfolio-video"
              />
            ) : (
              // Static image fallback
              <img
                src={imageLocation}
                alt={altText}
                className="portfolio-image"
              />
            )}
          </div>
          {/* Tags stay in same spot */}
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
        </div>
        <div className="portfolio-text">
          <a className="portfolio-title" href={projectPageLink}>
            {name}
          </a>
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
      </div>
    </>
  );
}

export default memo(PortfolioRow);
