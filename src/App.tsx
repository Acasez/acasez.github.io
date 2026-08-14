import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import PortfolioIndex from "./Subpages/PortfolioIndex";
import NestedTooltips from "./Subpages/NestedTooltips";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/" element={<PortfolioIndex />} />
          <Route path="/EdvinsNestedTooltips" element={<NestedTooltips />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
