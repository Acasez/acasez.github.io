import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../CSS/Codeblock.css";

interface PortfolioProps {
  code: string;
  language?: string;
  title?: string;
}

export default function PortfolioCodeblock({
  code,
  language = "javascript",
  title = "",
}: PortfolioProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <div className="portfolio-row">
      {/* Header bar with title and toggle button */}
      <div className="portfolio-header">
        {title && <span className="portfolio-title">{title}</span>}
        <button
          className="toggle-button"
          onClick={handleToggle}
          aria-label={isExpanded ? "Collapse code" : "Expand code"}
        >
          {isExpanded ? "−" : "+"}
        </button>
      </div>

      {/* Collapsible content area */}
      <div
        className={`code-container ${isExpanded ? "expanded" : "collapsed"}`}
      >
        <SyntaxHighlighter
          language={language.toLowerCase()}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "1rem",
            borderRadius: "0 0 8px 8px",
            fontSize: "13px",
            lineHeight: "1.5",
          }}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>

      {/* Show preview of first few lines when collapsed */}
      {!isExpanded && (
        <div className="collapsed-preview">
          <pre>{code.split("\n").slice(0, 3).join("\n")}</pre>
          <p className="more-info">Click + to view full code</p>
        </div>
      )}
    </div>
  );
}
