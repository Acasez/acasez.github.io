import "../CSS/aowStyle.css";

interface TomeProps {
  name: string;
  tier: number;
  subtitle: string;
  description: string;
  tomeImageLocation: string;
}

export default function CustomTome({
  name,
  tier,
  subtitle,
  description,
  tomeImageLocation,
}: TomeProps) {
  return (
    <div className="portfolio-row sidebar-section">
      <div className="tome-header-container">
        <div className="tome-image">
          <img src={tomeImageLocation} alt={name} />
        </div>
        <div className="tome-content">
          <div className="tome-header">
            <h1>{name}</h1>
            <span className="tome-tier">Tier {tier} Tome</span>
            <p className="tome-flavor">{subtitle}</p>
          </div>
          <p className="tome-description">{description}</p>
        </div>
      </div>
    </div>
  );
}
