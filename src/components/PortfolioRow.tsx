import "../CSS/PortfolioRow.css";
import "../CSS/ProjectLinks.css";
import "../CSS/ProjectTags.css";
import { memo } from "react";

interface PortFolioProps {
  reverse: boolean;
  imageLocation: string;
  altText: string;
  projectTags: string[];
  name: string;
  subtitle: string;
  projectPageLink: string;
  description: string;
  itchLink?: string;
  githubLink?: string;
  webpageLink?: string;
}

function PortfolioRow({
  reverse,
  imageLocation,
  altText,
  projectTags,
  name,
  subtitle,
  projectPageLink,
  description,
  itchLink,
  githubLink,
  webpageLink,
}: PortFolioProps) {
  const LINK_OPTIONS: {
    url: string | undefined;
    label: string;
    class: string;
  }[] = [
    { url: itchLink, label: "Itch.io", class: "itch" },
    { url: githubLink, label: "Github", class: "github" },
    { url: webpageLink, label: "Webpage", class: "web" },
  ];
  return (
    <>
      <div
        className={reverse === true ? "portfolio-row reverse" : "portfolio-row"}
      >
        <div className="portfolio-image">
          <img src={imageLocation} alt={altText} />
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
            {LINK_OPTIONS.filter((link) => link.url).map(
              ({ url, label, class: cls }) => (
                <a
                  key={cls}
                  href={url}
                  className={`project-link ${cls}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              ),
            )}
          </div>
          <p />
        </div>
      </div>
    </>
  );
}

export default memo(PortfolioRow);
