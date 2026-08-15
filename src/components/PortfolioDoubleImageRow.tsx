import "../CSS/PortfolioRow.css";
import "../CSS/ProjectLinks.css";
import "../CSS/ProjectTags.css";

interface PortFolioProps {
  imageLocationOne: string;
  altTextOne: string;
  imageLocationTwo: string;
  altTextTwo: string;
}

export default function PortfolioRow({
  imageLocationOne,
  altTextOne,
  imageLocationTwo,
  altTextTwo,
}: PortFolioProps) {
  return (
    <>
      <div className="portfolio-image">
        <img
          src={imageLocationOne}
          alt={altTextOne}
          className="portfolio-image"
        />
      </div>
      <div className="portfolio-image">
        <img
          src={imageLocationTwo}
          alt={altTextTwo}
          className="portfolio-image"
        />
      </div>
    </>
  );
}
