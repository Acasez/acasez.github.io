import "../CSS/PortfolioRow.css";
import "../CSS/ProjectLinks.css";
import "../CSS/ProjectTags.css";

interface PortFolioProps {
  imageLocation?: string;
  altText: string;
  listHeader: string;
  listContent: string[];
}

export default function PortfolioRow({
  imageLocation,
  altText,
  listHeader,
  listContent,
}: PortFolioProps) {
  return (
    <>
      <div className="portfolio-image">
        <img src={imageLocation} alt={altText} className="portfolio-image" />
      </div>
      <div className="portfolio-description">
        <h3>{listHeader}:</h3>
        <ul>
          {listContent.map((listEntry) => (
            <li>{listEntry}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
