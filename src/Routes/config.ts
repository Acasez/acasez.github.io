import { lazy } from "react";
import type { ComponentType, LazyExoticComponent } from "react";

/** A lazy-loaded page component */
export type LazyPage = LazyExoticComponent<ComponentType>;

/** One node of the route tree */
export interface RouteNode {
  /** Real routable path. Omitted on pure dropdown triggers. */
  path?: string;
  /** Lazy page component. Required for the node to be navigable. */
  component?: LazyPage;
  /** Text shown in the nav bar */
  header?: string;
  /** Wrap the header text in <u> (used on your name) */
  underline?: boolean;
  /** false → hidden from the header, still routable */
  createHeader?: boolean;
  /** Nested items → rendered as a dropdown menu */
  children?: RouteNode[];
}

/** A node guaranteed to be a real route (path + component) */
export interface RoutableRoute {
  path: string;
  component: LazyPage;
}

/** Type guard: node is a real route */
function isRoutable(node: RouteNode): node is RouteNode & RoutableRoute {
  return typeof node.path === "string" && typeof node.component !== "undefined";
}

/** Recursively flattens the tree, keeping only real routes */
export function flattenRoutes(nodes: RouteNode[]): RoutableRoute[] {
  return nodes.flatMap((node): RoutableRoute[] => {
    const self: RoutableRoute[] = isRoutable(node)
      ? [{ path: node.path, component: node.component }]
      : [];
    const nested: RoutableRoute[] = flattenRoutes(node.children ?? []);
    return [...self, ...nested];
  });
}

export const routes: RouteNode[] = [
  {
    path: "",
    component: lazy(() => import("../Subpages/PortfolioIndex")),
    header: "Edvin Skogsholm Sanne",
    underline: true,
    createHeader: true,
  },
  {
    path: "/index",
    component: lazy(() => import("../Subpages/PortfolioIndex")),
    header: "Edvin Skogsholm Sanne",
    createHeader: false, // the name above already links to "/"
  },
  {
    path: "/EdvinsNestedTooltips",
    component: lazy(() => import("../Subpages/NestedTooltips")),
    header: "Edvin's Layered Tooltips",
    createHeader: true,
  },
  {
    path: "/Amsvartne",
    component: lazy(() => import("../Subpages/Amsvartne")),
    header: "Amsvartne",
    createHeader: true,
  },
  {
    header: "Mariestad Board Game",
    createHeader: true,
    children: [
      {
        path: "/MariestadClimateGame",
        component: lazy(() => import("../Subpages/MariestadClimateGame")),
        header: "Mariestad Climate Game",
        createHeader: true,
      },
      {
        path: "/MariestadDigitalAdaptation",
        component: lazy(() => import("../Subpages/MariestadDigitalAdaptation")),
        header: "Mariestad Digital Adaptation",
        createHeader: true,
      },
    ],
  },
  {
    header: "Ion Internship",
    createHeader: true,
    children: [
      {
        path: "/IonInternship",
        component: lazy(() => import("../Subpages/IonInternship")),
        header: "Ion Internship",
        createHeader: true,
      },
      {
        path: "/HighFrontierTutorial",
        component: lazy(() => import("../Subpages/HighFrontierTutorial")),
        header: "High Frontier",
        createHeader: true,
      },
    ],
  },
  {
    path: "/CityState",
    component: lazy(() => import("../Subpages/CityState")),
    header: "City State",
    createHeader: true,
  },
  {
    path: "/ToHelAndBack",
    component: lazy(() => import("../Subpages/ToHelAndBack")),
    header: "To Hel And Back",
    createHeader: true,
  },
  {
    path: "/LandOfTheArcane",
    component: lazy(() => import("../Subpages/LandOfTheArcane")),
    header: "Land Of The Arcane",
    createHeader: true,
  },
  {
    path: "/Kastorix",
    component: lazy(() => import("../Subpages/Kastorix")),
    header: "Kastorix",
    createHeader: true,
  },
  {
    header: "About Me",
    createHeader: true,
    children: [
      {
        path: "/AboutMe",
        component: lazy(() => import("../Subpages/AboutMe")),
        header: "About Me",
        createHeader: true,
      },
      {
        header: "🞀 CV's",
        createHeader: true,
        children: [
          {
            path: "/EnglishCV",
            component: lazy(() => import("../Subpages/EnglishCV")),
            header: "English",
            createHeader: true,
          },
          {
            path: "/SwedishCV",
            component: lazy(() => import("../Subpages/SwedishCV")),
            header: "Swedish",
            createHeader: true,
          },
        ],
      },
    ],
  },

  // Hidden pages — routable, but not shown in the header
  {
    path: "/AOW4Tomes",
    component: lazy(() => import("../Subpages/AOW4Tomes")),
    header: "AOW4 Tomes",
    createHeader: false,
  },
  {
    path: "/MyHeroSnap",
    component: lazy(() => import("../Subpages/MyHeroSnap")),
    header: "My Hero Snap",
    createHeader: false,
  },
  {
    path: "/MeridianSunsets",
    component: lazy(() => import("../Subpages/MeridianSunsets")),
    header: "Meridian Sunsets",
    createHeader: false,
  },
];

/** Flat list for your <Routes> setup */
export const flatRoutes: RoutableRoute[] = flattenRoutes(routes);
