// routes/config.js
import { lazy } from "react";

export const routes = [
  {
    path: "/portfolio-v2",
    component: lazy(() => import("../Subpages/PortfolioIndex")),
  },
  {
    path: "/portfolio-v2/EdvinsNestedTooltips",
    component: lazy(() => import("../Subpages/NestedTooltips")),
  },
  {
    path: "/portfolio-v2/Amsvartne",
    component: lazy(() => import("../Subpages/Amsvartne")),
  },
  {
    path: "/portfolio-v2/MariestadClimateGame",
    component: lazy(() => import("../Subpages/MariestadClimateGame")),
  },
  {
    path: "/portfolio-v2/MariestadDigitalAdaptation",
    component: lazy(() => import("../Subpages/MariestadDigitalAdaptation")),
  },
  {
    path: "/portfolio-v2/IonInternship",
    component: lazy(() => import("../Subpages/IonInternship")),
  },
  {
    path: "/portfolio-v2/HighFrontierTutorial",
    component: lazy(() => import("../Subpages/HighFrontierTutorial")),
  },
  {
    path: "/portfolio-v2/CityState",
    component: lazy(() => import("../Subpages/CityState")),
  },
  {
    path: "/portfolio-v2/ToHelAndBack",
    component: lazy(() => import("../Subpages/ToHelAndBack")),
  },
  {
    path: "/portfolio-v2/LandOfTheArcane",
    component: lazy(() => import("../Subpages/LandOfTheArcane")),
  },
  {
    path: "/portfolio-v2/Kastorix",
    component: lazy(() => import("../Subpages/Kastorix")),
  },
  {
    path: "/portfolio-v2/AboutMe",
    component: lazy(() => import("../Subpages/AboutMe")),
  },
];
