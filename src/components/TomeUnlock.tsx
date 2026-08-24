import "../CSS/aowStyle.css";

interface UnlockProps {
  name: string;
  tier?: number;
  type: string;
  unitTier?: number;
  description: string;
  tags?: string[];
}

// Lookup object for numbers 1-10
const romanNumerals: Record<number, string> = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
};

export default function TomeUnlock({
  name,
  tier,
  type,
  unitTier,
  description,
  tags,
}: UnlockProps) {
  return (
    <div className="portfolio-row sidebar-section">
      <div className="unit-row">
        <h4 className="unit-name">{name}</h4>
        <p className="unit-type">
          {tier && `Tier ${romanNumerals[tier]} - `}
          {type}
          {unitTier && `, Tier ${romanNumerals[unitTier]}`}
        </p>
        <p className="unit-description">{description}</p>
        <div className="tags">
          {tags &&
            tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
