import "../CSS/PortfolioRow.css";
import "../CSS/ProjectLinks.css";
import "../CSS/ProjectTags.css";

interface PortFolioProps {
  children: React.ReactNode;
}

export default function PortfolioCoverImage({
  children: children,
}: PortFolioProps) {
  return (
    <>
      <div className="portfolio-image cover">{children}</div>
    </>
  );
}
