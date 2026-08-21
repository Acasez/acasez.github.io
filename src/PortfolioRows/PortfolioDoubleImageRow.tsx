import "../CSS/PortfolioRow.css";
import "../CSS/ProjectLinks.css";
import "../CSS/ProjectTags.css";
import MediaDisplay from "../components/MediaDisplay";

interface PortFolioProps {
  videoIdOne?: string;
  imageLocationOne?: string;
  altTextOne: string;
  imageCaptionOne?: string;
  videoIdTwo?: string;
  imageLocationTwo?: string;
  altTextTwo: string;
  imageCaptionTwo?: string;
}

export default function PortfolioRow({
  videoIdOne,
  imageLocationOne,
  altTextOne,
  imageCaptionOne,
  videoIdTwo,
  imageLocationTwo,
  altTextTwo,
  imageCaptionTwo,
}: PortFolioProps) {
  return (
    <>
      <div className="portfolio-media">
        <MediaDisplay
          videoId={videoIdOne}
          imageLocation={imageLocationOne}
          altText={altTextOne}
          imageCaption={imageCaptionOne}
          coverImage={false}
        />
      </div>
      <div className="portfolio-media">
        <MediaDisplay
          videoId={videoIdTwo}
          imageLocation={imageLocationTwo}
          altText={altTextTwo}
          imageCaption={imageCaptionTwo}
          coverImage={false}
        />
      </div>
    </>
  );
}
