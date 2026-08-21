import "../CSS/PortfolioRow.css";
import "../CSS/ProjectTags.css";

interface PortFolioProps {
  name?: string;
  description: string;
}

export default function PortfolioRow({ name, description }: PortFolioProps) {
  return (
    <>
      <div className="portfolio-text">
        <h1 className="portfolio-title">{name}</h1>
        <p className="portfolio-description">{description}</p>
      </div>
    </>
  );
}
