import "../CSS/PortfolioRow.css";
import "../CSS/ProjectLinks.css";
import "../CSS/ProjectTags.css";

interface PortFolioProps {
  imageLocationOne: string;
  altTextOne: string;
  imageCaptionOne?: string;
}

export default function PortfolioCoverImage({
  imageLocationOne,
  altTextOne,
  imageCaptionOne,
}: PortFolioProps) {
  return (
    <>
      <div className="portfolio-image cover">
        {imageCaptionOne ? (
          <div className="image-with-caption">
            <img src={imageLocationOne} alt={altTextOne} />
            <p>{imageCaptionOne}</p>
          </div>
        ) : (
          <img
            src={imageLocationOne}
            alt={altTextOne}
            className="portfolio-image"
          />
        )}
      </div>
    </>
  );
}
