// routes/config.js
import { lazy } from "react";

export const routes = [
  {
    path: "",
    component: lazy(() => import("../Subpages/PortfolioIndex")),
    createHeader: false,
  },
  {
    path: "/index",
    component: lazy(() => import("../Subpages/PortfolioIndex")),
    header: "Overview",
    createHeader: true,
  },
  {
    path: "/EdvinsNestedTooltips",
    component: lazy(() => import("../Subpages/NestedTooltips")),
    header: "Edvins Layered Tooltips",
    createHeader: true,
  },
  {
    path: "/Amsvartne",
    component: lazy(() => import("../Subpages/Amsvartne")),
    header: "Amsvartne",
    createHeader: true,
  },
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
  {
    path: "/IonInternship",
    component: lazy(() => import("../Subpages/IonInternship")),
    header: "Ion Internship",
    createHeader: true,
  },
  {
    path: "/HighFrontierTutorial",
    component: lazy(() => import("../Subpages/HighFrontierTutorial")),
    header: "High Frontier Tutorial",
    createHeader: true,
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
    path: "/AboutMe",
    component: lazy(() => import("../Subpages/AboutMe")),
    header: "About Me",
    createHeader: true,
  },
  {
    path: "/EnglishCV",
    component: lazy(() => import("../Subpages/EnglishCV")),
    header: "English CV",
    createHeader: true,
  },
  {
    path: "/SwedishCV",
    component: lazy(() => import("../Subpages/SwedishCV")),
    header: "Swedish CV",
    createHeader: true,
  },
  {
    path: "/AOW4Tomes",
    component: lazy(() => import("../Subpages/AOW4Tomes")),
    header: "AOW4 Tomes",
    createHeader: true,
  },
  {
    path: "/MyHeroSnap",
    component: lazy(() => import("../Subpages/MyHeroSnap")),
    header: "My Hero Snap",
    createHeader: true,
  },
  {
    path: "/MeridianSunsets",
    component: lazy(() => import("../Subpages/MeridianSunsets")),
    header: "Meridian Sunsets",
    createHeader: true,
  },
];
