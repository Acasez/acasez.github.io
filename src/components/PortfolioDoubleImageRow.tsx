import "../CSS/PortfolioRow.css";
import "../CSS/ProjectLinks.css";
import "../CSS/ProjectTags.css";

interface PortFolioProps {
  imageLocationOne: string;
  altTextOne: string;
  imageCaptionOne?: string;
  imageLocationTwo: string;
  altTextTwo: string;
  imageCaptionTwo?: string;
}

export default function PortfolioRow({
  imageLocationOne,
  altTextOne,
  imageCaptionOne,
  imageLocationTwo,
  altTextTwo,
  imageCaptionTwo,
}: PortFolioProps) {
  return (
    <>
      <div className="portfolio-image doubleImage">
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
      <div className="portfolio-image doubleImage">
        {imageCaptionTwo ? (
          <div className="image-with-caption">
            <img src={imageLocationTwo} alt={altTextTwo} />
            <p>{imageCaptionTwo}</p>
          </div>
        ) : (
          <img
            src={imageLocationTwo}
            alt={altTextTwo}
            className="portfolio-image"
          />
        )}
      </div>
    </>
  );
}
