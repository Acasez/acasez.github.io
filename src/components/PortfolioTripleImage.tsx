import "../CSS/PortfolioRow.css";
import "../CSS/ProjectLinks.css";
import "../CSS/ProjectTags.css";
import MediaDisplay from "./MediaDisplay";

interface PortFolioProps {
  videoIdOne?: string;
  imageLocationOne?: string;
  altTextOne: string;
  imageCaptionOne?: string;
  videoIdTwo?: string;
  imageLocationTwo?: string;
  altTextTwo: string;
  imageCaptionTwo?: string;
  videoIdThree?: string;
  imageLocationThree?: string;
  altTextThree: string;
  imageCaptionThree?: string;
}

export default function PortfolioTripleImage({
  videoIdOne,
  imageLocationOne,
  altTextOne,
  imageCaptionOne,
  videoIdTwo,
  imageLocationTwo,
  altTextTwo,
  imageCaptionTwo,
  videoIdThree,
  imageLocationThree,
  altTextThree,
  imageCaptionThree,
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
      <div className="portfolio-media">
        <MediaDisplay
          videoId={videoIdThree}
          imageLocation={imageLocationThree}
          altText={altTextThree}
          imageCaption={imageCaptionThree}
          coverImage={false}
        />
      </div>
    </>
  );
}
