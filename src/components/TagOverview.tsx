import { useState } from "react";

interface TagGroupProps {
  groups: {
    title: string;
    tags: string[];
  }[];
  selectedTag?: string | null;
  onTagClick?: (tag: string | null) => void;
}

export default function TagOverview({
  groups,
  selectedTag,
  onTagClick,
}: TagGroupProps) {
  // Initialize displayTags with false (hidden by default)
  const [displayTags, setDisplayTags] = useState<boolean>(false);

  // Function to toggle the tags display
  const toggleTags = () => {
    setDisplayTags(!displayTags);
  };

  return (
    <div className="">
      <div>
        <button
          className="ml-3 mb-1 rounded-2xl bg-amber-100 p-1 px-2"
          onClick={toggleTags}
        >
          {displayTags ? "Hide tag filters" : "Show tag filters"}
        </button>
        {selectedTag && (
          <button className="tag selected" onClick={() => onTagClick?.(null)}>
            Show All
          </button>
        )}
      </div>

      {displayTags && (
        <div className="flex flex-col gap-2 m-3">
          {groups.map((group, index) => (
            <div key={index} className="flex flex-row align-middle">
              <span className="text-lg m-2">{group.title}:</span>
              <div className="flex flex-row gap-1">
                {group.tags.map((tag) => (
                  <button
                    key={tag}
                    className={`tag ${tag.toLowerCase().replace("#", "sharp").replace(" ", "-")} ${
                      selectedTag === tag ? "selected" : ""
                    }`}
                    onClick={() => {
                      onTagClick?.(selectedTag === tag ? null : tag);
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
