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
    <div className="tag-filter-container">
      <div>
        <button className="tag show-filters-tag" onClick={toggleTags}>
          {displayTags ? "Hide tag filters" : "Show tag filters"}
        </button>
      </div>

      {displayTags && (
        <div className="project-tags-container">
          {selectedTag && (
            <div className="show-all-container">
              <button
                className="tag selected"
                onClick={() => onTagClick?.(null)}
              >
                Show All
              </button>
            </div>
          )}

          {groups.map((group, index) => (
            <div key={index} className="tag-group">
              <span className="tag-group-title">{group.title}:</span>
              <div className="tag-group-tags">
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
