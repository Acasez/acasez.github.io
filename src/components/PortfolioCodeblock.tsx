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
    <div className="code-block-row">
      {/* Header bar with title and toggle button */}
      <div className="code-block-header">
        {title && <span className="code-block-title">{title}</span>}
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
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            background: "#1e1e1e",
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

/*
<PortfolioRowFrame reverse={false}>
        <PortfolioCodeblock //Double Image
          code="private Vector2 GetPositionInsideCanvas(RectTransform tooltipRect, Vector2 screenPosition)
          {
              // Convert screen position to local position in canvas
              RectTransformUtility.ScreenPointToLocalPointInRectangle(
                  canvasRectTransform,
                  screenPosition,
                  null, // Use null for overlay canvas, or specify your camera if using Screen Space - Camera
                  out Vector2 localPosition
              );

              // Calculate tooltip size
              float tooltipWidth = tooltipRect.rect.width;
              float tooltipHeight = tooltipRect.rect.height;

              // Calculate the desired position (adjust for tooltip pivot and offset)
              float tipDownDistance = (tooltipHeight * tooltipSizeDownwardFactor) + tipNudge;
              //When playing on mobile you will generally want the tooltips to appear above where you hover so your finger doesn't obscure it
              if (mobile) tipDownDistance *= -1f; 
              Vector2 desiredPosition = new(localPosition.x, localPosition.y - tipDownDistance);

              // Get canvas bounds (already in local space)
              Vector2 canvasMin = canvasRectTransform.rect.min;
              Vector2 canvasMax = canvasRectTransform.rect.max;

              // Calculate min/max allowed positions (accounting for tooltip size and pivot)
              float minX = canvasMin.x + edgeOfScreenMargin + tooltipWidth * tooltipRect.pivot.x;
              float maxX = canvasMax.x - edgeOfScreenMargin - tooltipWidth * (1 - tooltipRect.pivot.x);
              float minY = canvasMin.y + edgeOfScreenMargin + tooltipHeight * tooltipRect.pivot.y;
              float maxY = canvasMax.y - edgeOfScreenMargin - tooltipHeight * (1 - tooltipRect.pivot.y);

              // Clamp
              float clampedX = Mathf.Clamp(desiredPosition.x, minX, maxX);
              float clampedY = Mathf.Clamp(desiredPosition.y, minY, maxY);

              return new Vector2(clampedX, clampedY);
          }"
          language="csharp"
        />
      </PortfolioRowFrame>*/
