interface ImageProps {
  imageLocation: string;
  altText: string;
  imageCaption?: string;
  coverImage: boolean;
}

export default function ImageDisplay({
  imageLocation,
  altText,
  imageCaption,
  coverImage,
}: ImageProps) {
  return (
    <>
      <div className={coverImage ? "" : ""}>
        <div className="w-200">
          {imageCaption ? (
            <div className="text-center text-xl cursive">
              <img src={imageLocation} alt={altText} />
              <p>{imageCaption}</p>
            </div>
          ) : (
            <img className="" src={imageLocation} alt={altText} />
          )}
        </div>
      </div>
    </>
  );
}
