import ReactMarkdown, { type Components } from "react-markdown";
import { NavLink } from "react-router-dom";
import tooltips from "../data/tooltips";
import TraitTooltip from "./Tooltip";
import React, { type JSX } from "react";

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Wrap each trait's FIRST occurrence in %%Name%% markers. Pure function. */
function markFirstOccurrences(markdown: string): string {
  let result = markdown;
  const names = tooltips.map((t) => t.name).sort((a, b) => b.length - a.length);
  for (const name of names) {
    // replace only the first occurrence of this trait
    result = result.replace(new RegExp(escapeRegExp(name)), `%%${name}%%`);
  }
  return result;
}

/** Split a text node on %%Trait%% markers and swap in tooltips. */
function renderText(text: string): (string | JSX.Element)[] {
  return text.split(/%%(.+?)%%/g).map((part, i) =>
    i % 2 === 1 ? (
      <TraitTooltip
        key={`${part}-${i}`}
        tooltip={tooltips.find((t) => t.name === part)!}
      >
        {part}
      </TraitTooltip>
    ) : (
      part
    ),
  );
}

function transformChildren(children: React.ReactNode): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (typeof child === "string") return renderText(child);
    if (
      React.isValidElement<{ children?: React.ReactNode }>(child) &&
      child.props.children
    ) {
      return React.cloneElement(
        child,
        undefined,
        transformChildren(child.props.children),
      );
    }
    return child;
  });
}

interface MarkdownSectionProps {
  name?: string;
  tagLine?: string;
  projectPageLink?: string;
  description: string;
  cursive?: boolean;
  children: React.ReactNode;
}

export default function MarkdownSection({
  name,
  projectPageLink,
  description,
  cursive,
  tagLine,
  children,
}: MarkdownSectionProps) {
  const marked = markFirstOccurrences(description);

  const components: Components = {
    p: ({ children }) => <p>{transformChildren(children)}</p>,
    li: ({ children }) => <li>{transformChildren(children)}</li>,
  };

  return (
    <div className="">
      {projectPageLink ? (
        <NavLink
          className="text-5xl text-text-projectTitle text-center font-bold block self-center mb-2"
          to={projectPageLink}
        >
          <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:origin-left after:scale-x-0 after:border-b-3 after:border-striking after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
            {name}
          </span>
        </NavLink>
      ) : (
        <h1 className="text-5xl text-orange-500 text-center font-bold">
          {name}
        </h1>
      )}
      <h2 className="text-xl font-bold text-center block">{tagLine}</h2>
      <div
        className={`text-center text-xl m-2 text-text-flavor flex flex-col ${cursive ? "italic text-text" : ""}`}
      >
        <ReactMarkdown components={components}>{marked}</ReactMarkdown>
        {children}
      </div>
    </div>
  );
}
