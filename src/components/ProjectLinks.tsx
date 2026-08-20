import { Link } from "react-router-dom";
import "../CSS/ProjectLinks.css";

interface LinkProps {
  itchLink?: string;
  githubLink?: string;
  webpageLinks?: { url: string; label: string }[];
  portfolioLinks?: { linkTo: string; label: string }[];
}

export default function ProjectLinks({
  itchLink,
  githubLink,
  webpageLinks = [],
  portfolioLinks = [],
}: LinkProps) {
  const LINK_CONFIG = [
    { label: "Itch.io", class: "itch" },
    { label: "Github", class: "github" },
  ] as const;
  return (
    <>
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
        {/* Links to other part of portfolio */}
        {portfolioLinks.map(({ linkTo, label }) => (
          <Link
            key={`${linkTo}-${label}`} // Unique key combination
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
