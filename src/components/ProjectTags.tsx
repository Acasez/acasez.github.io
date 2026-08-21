import "../CSS/ProjectTags.css";

interface TagProps {
  projectTags?: string[];
}

export default function ProjectTags({ projectTags }: TagProps) {
  return (
    <>
      <div>
        {projectTags ? (
          <div className="project-tags">
            {projectTags.map((tag) => (
              <span
                key={tag}
                className={`tag ${tag.toLowerCase().replace("#", "sharp")}`}
              >
                {tag}
              </span>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
