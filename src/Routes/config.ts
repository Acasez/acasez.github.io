// routes/config.js
import { lazy } from "react";

export const routes = [
  {
    path: "",
    component: lazy(() => import("../Subpages/PortfolioIndex")),
  },
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
    path: "/ToHelAndBack",
    component: lazy(() => import("../Subpages/ToHelAndBack")),
  },
  {
    path: "/LandOfTheArcane",
    component: lazy(() => import("../Subpages/LandOfTheArcane")),
  },
  {
    path: "/Kastorix",
    component: lazy(() => import("../Subpages/Kastorix")),
  },
  {
    path: "/AboutMe",
    component: lazy(() => import("../Subpages/AboutMe")),
  },
  {
    path: "/EnglishCV",
    component: lazy(() => import("../Subpages/EnglishCV")),
  },
  {
    path: "/AOW4Tomes",
    component: lazy(() => import("../Subpages/AOW4Tomes")),
  },
  {
    path: "/MyHeroSnap",
    component: lazy(() => import("../Subpages/MyHeroSnap")),
  },
  {
    path: "/MeridianSunsets",
    component: lazy(() => import("../Subpages/MeridianSunsets")),
  },
];
