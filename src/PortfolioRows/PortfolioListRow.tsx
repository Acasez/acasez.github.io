import "../CSS/PortfolioRow.css";
import "../CSS/ProjectLinks.css";
import "../CSS/ProjectTags.css";
import MediaDisplay from "../components/MediaDisplay";

interface PortFolioProps {
  videoId?: string;
  imageLocation?: string;
  altText: string;
  imageCaption?: string;
  listHeader: string;
  listContent: string[];
}

export default function PortfolioRow({
  videoId,
  imageLocation,
  altText,
  imageCaption,
  listHeader,
  listContent,
}: PortFolioProps) {
  return (
    <>
      <div className="portfolio-media">
        <MediaDisplay
          videoId={videoId}
          imageLocation={imageLocation}
          altText={altText}
          imageCaption={imageCaption}
          coverImage={false}
        />
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
