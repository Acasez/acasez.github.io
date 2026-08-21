// Updated ProjectTags.tsx
import "../CSS/ProjectTags.css";

interface TagProps {
  projectTags?: string[];
  selectedTag?: string | null;
  onTagClick?: (tag: string | null) => void;
}

export default function ProjectTags({
  projectTags,
  selectedTag,
  onTagClick,
}: TagProps) {
  if (!projectTags) return null;

  return (
    <div className="project-tags">
      {projectTags.map((tag) => (
        <button
          key={tag}
          className={`tag ${tag.toLowerCase().replace("#", "sharp")} ${
            selectedTag === tag ? "selected" : ""
          }`}
          onClick={() => {
            // If clicking the currently selected tag, clear the filter
            onTagClick?.(selectedTag === tag ? null : tag);
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
