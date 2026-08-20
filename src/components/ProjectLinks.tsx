import { Link } from "react-router-dom";
import "../CSS/ProjectLinks.css";

interface ExternalLinkConfig {
  key: keyof Pick<LinkProps, "itchLink" | "githubLink" | "youtubeLink">;
  label: string;
  class: string;
}

interface LinkProps {
  itchLink?: string;
  githubLink?: string;
  youtubeLink?: string;
  webpageLinks?: { url: string; label: string }[];
  portfolioLinks?: { linkTo: string; label: string }[];
}

export default function ProjectLinks({
  itchLink,
  githubLink,
  youtubeLink,
  webpageLinks = [],
  portfolioLinks = [],
}: LinkProps) {
  const LINK_CONFIG: ExternalLinkConfig[] = [
    { key: "itchLink", label: "Itch.io", class: "itch" },
    { key: "githubLink", label: "Github", class: "github" },
    { key: "youtubeLink", label: "Youtube Trailer", class: "youtube" },
  ];

  // Build a lookup map from the props
  const urlMap = { itchLink, githubLink, youtubeLink };

  return (
    <>
      <div className="project-links">
        {/* Fixed platform links — easily extendable */}
        {LINK_CONFIG.map(({ key, label, class: cls }) => {
          const url = urlMap[key];
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
            key={`${url}-${label}`}
            href={url}
            className="project-link web"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ))}

        {/* Links to other part of portfolio */}
        {portfolioLinks.map(({ linkTo, label }) => (
          <Link
            key={`${linkTo}-${label}`}
            to={linkTo}
            className="project-link pf"
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
