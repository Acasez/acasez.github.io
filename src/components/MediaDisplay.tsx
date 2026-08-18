import "../CSS/PortfolioRow.css";

interface MediaProps {
  videoId?: string;
  imageLocation?: string;
  altText: string;
  imageCaption?: string;
  coverImage: boolean;
}

export default function MediaDisplay({
  videoId,
  imageLocation,
  altText,
  imageCaption,
  coverImage,
}: MediaProps) {
  return (
    <>
      <div className={coverImage ? "portfolio-media cover" : "portfolio-media"}>
        <div>
          {videoId ? (
            // YouTube embed
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={altText}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="portfolio-video"
            />
          ) : (
            <div>
              {imageCaption ? (
                <div className="image-with-caption">
                  <img src={imageLocation} alt={altText} />
                  <p>{imageCaption}</p>
                </div>
              ) : (
                <img
                  src={imageLocation}
                  alt={altText}
                  className="portfolio-image"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
