import "../CSS/PortfolioRow.css";

interface RowProps {
  reverse: boolean;
  children: React.ReactNode;
}

export default function PortfolioRowFrame({ reverse, children }: RowProps) {
  return (
    <div className={reverse ? "portfolio-row reverse" : "portfolio-row"}>
      {children}
    </div>
  );
}
