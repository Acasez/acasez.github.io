// Updated ProjectTags.tsx
import "../CSS/ProjectTags.css";

interface TagProps {
  projectTags?: string[];
  selectedTag?: string | null;
}

export default function ProjectTags({ projectTags, selectedTag }: TagProps) {
  if (!projectTags) return null;

  return (
    <div className="project-tags">
      {projectTags.map((tag) => (
        <div
          key={tag}
          className={`tag ${tag.toLowerCase().replace("#", "sharp").replace(" ", "-")} ${
            selectedTag === tag ? "selected" : ""
          }`}
        >
          {tag.replace("-", " ")}
        </div>
      ))}
    </div>
  );
}
