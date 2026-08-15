import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainHeader from "./components/MainHeader";
import PortfolioIndex from "./Subpages/PortfolioIndex";

const NestedTooltips = lazy(() => import("./Subpages/NestedTooltips"));

export default function App() {
  return (
    <>
      <MainHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PortfolioIndex />} />
          <Route path="/EdvinsNestedTooltips" element={<NestedTooltips />} />
        </Routes>
      </Suspense>
    </>
  );
}
