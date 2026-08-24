import "../CSS/PortfolioRow.css";

interface RowProps {
  reverse: boolean;
  children: React.ReactNode;
  introRow?: boolean;
}

export default function PortfolioRowFrame({
  reverse,
  children,
  introRow,
}: RowProps) {
  const className = [
    "portfolio-row",
    reverse ? "reverse" : "",
    introRow ? "intro-row" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={className}>{children}</div>;
}
