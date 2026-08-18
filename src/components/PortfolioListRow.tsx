import "../CSS/PortfolioRow.css";
import "../CSS/ProjectLinks.css";
import "../CSS/ProjectTags.css";

interface PortFolioProps {
  imageLocation?: string;
  altText: string;
  imageCaption?: string;
  listHeader: string;
  listContent: string[];
}

export default function PortfolioRow({
  imageLocation,
  altText,
  imageCaption,
  listHeader,
  listContent,
}: PortFolioProps) {
  return (
    <>
      <div className="portfolio-image">
        {imageCaption ? (
          <div className="image-with-caption">
            <img src={imageLocation} alt={altText} />
            <p>{imageCaption}</p>
          </div>
        ) : (
          <img src={imageLocation} alt={altText} className="portfolio-image" />
        )}
      </div>
      <div className="portfolio-description">
        <h3>{listHeader}:</h3>
        <ul>
          {listContent.map((listEntry) => (
            <li key={listEntry}>{listEntry}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
