import { NavLink } from "react-router-dom";
import { routes } from "../Routes/config";
import type { RouteNode } from "../Routes/config";
import "../CSS/headerStyle.css";

/** Hidden from header when createHeader === false */
function isVisible(node: RouteNode): boolean {
  return node.createHeader !== false;
}

interface NavItemProps {
  item: RouteNode;
}

/** Recursively renders one nav node: either a plain link or a dropdown */
function NavItem({ item }: NavItemProps) {
  const visibleChildren: RouteNode[] = (item.children ?? []).filter(isVisible);

  // Node with children → dropdown trigger + menu (works at any depth)
  if (visibleChildren.length > 0) {
    return (
      <li>
        {item.path ? (
          <NavLink to={item.path || "/"} end={item.path === ""}>
            {item.header} ▼
          </NavLink>
        ) : (
          <a href="#">{item.header} ▼</a>
        )}
        <div className="dropdown_menu">
          <ul>
            {visibleChildren.map((child: RouteNode) => (
              <NavItem key={child.path ?? child.header} item={child} />
            ))}
          </ul>
        </div>
      </li>
    );
  }

  // Leaf node → plain link
  return (
    <li>
      <NavLink
        to={item.path || "/"}
        end={item.path === "" || item.path === "/index"}
      >
        {item.underline ? <u>{item.header}</u> : item.header}
      </NavLink>
    </li>
  );
}

export default function MainHeader() {
  return (
    <nav className="topnav" role="navigation">
      <ul>
        {routes.filter(isVisible).map((item: RouteNode) => (
          <NavItem key={item.path ?? item.header} item={item} />
        ))}
      </ul>
    </nav>
  );
}
