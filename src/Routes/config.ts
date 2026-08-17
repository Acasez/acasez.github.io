// routes/config.js
import { lazy } from "react";

export const routes = [
  { path: "/", component: lazy(() => import("../Subpages/PortfolioIndex")) },
  {
    path: "/EdvinsNestedTooltips",
    component: lazy(() => import("../Subpages/NestedTooltips")),
  },
  {
    path: "/Amsvartne",
    component: lazy(() => import("../Subpages/Amsvartne")),
  },
  {
    path: "/MariestadClimateGame",
    component: lazy(() => import("../Subpages/MariestadClimateGame")),
  },
  {
    path: "/MariestadDigitalAdaptation",
    component: lazy(() => import("../Subpages/MariestadDigitalAdaptation")),
  },
  {
    path: "/IonInternship",
    component: lazy(() => import("../Subpages/IonInternship")),
  },
  {
    path: "/HighFrontierTutorial",
    component: lazy(() => import("../Subpages/HighFrontierTutorial")),
  },
  {
    path: "/CityState",
    component: lazy(() => import("../Subpages/CityState")),
  },
  {
    path: "/LandOfTheArcane",
    component: lazy(() => import("../Subpages/LandOfTheArcane")),
  },
  {
    path: "/AboutMe",
    component: lazy(() => import("../Subpages/AboutMe")),
  },
];
