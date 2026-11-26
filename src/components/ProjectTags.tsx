// Updated ProjectTags.tsx
import "../CSS/ProjectTags.css";

interface TagProps {
  projectTags?: string[];
  selectedTag?: string | null;
}

export default function ProjectTags({ projectTags, selectedTag }: TagProps) {
  if (!projectTags) return null;

  return (
    <div className="flex justify-center gap-1.5 bg-blue-300 rounded-2xl p-3 w-fit self-center">
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
