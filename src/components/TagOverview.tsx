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
  return (
    <div className="project-tags-container">
      {selectedTag && (
        <div style={{ marginBottom: "8px" }}>
          <button
            className="tag selected"
            onClick={() => onTagClick?.(null)}
            style={{ marginRight: "8px" }}
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
                className={`tag ${tag.toLowerCase().replace("#", "sharp")} ${
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
  );
}
