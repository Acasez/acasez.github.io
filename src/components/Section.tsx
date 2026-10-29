// src/components/Layout/Section.tsx
import ContentRow from "./ContentRow";
import ReactMarkdown from "react-markdown";

interface SectionProps {
  // Header content
  title?: string;
  subtitle?: string;
  flavorText?: string;
  icon?: string;
  iconAlt?: string;

  // Layout controls
  headerReverse?: boolean;
  contentReverse?: boolean;
  vertical?: boolean;

  // Styling
  className?: string;
  children: React.ReactNode;
}

export default function Section({
  title,
  subtitle,
  flavorText,
  headerReverse = false,
  contentReverse = false,
  vertical = false,
  className = "",
  children,
}: SectionProps) {
  // Only render header if there's content for it
  const hasHeader = title || subtitle || flavorText;

  return (
    <div className={`w-full ${className}`}>
      {/* Header Row */}
      {hasHeader && (
        <ContentRow reverse={headerReverse}>
          <div className="flex-1 text-center">
            {title && (
              <h2 className="text-5xl text-orange-500 font-bold mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <h3 className="text-2xl text-orange-400 font-semibold mb-2">
                {subtitle}
              </h3>
            )}
            {flavorText && (
              <div className="text-xl text-text-flavor italic mx-auto">
                <ReactMarkdown>{flavorText}</ReactMarkdown>
              </div>
            )}
          </div>
        </ContentRow>
      )}

      {/* Content Row */}
      <ContentRow reverse={contentReverse} vertical={vertical}>
        {children}
      </ContentRow>
    </div>
  );
}
