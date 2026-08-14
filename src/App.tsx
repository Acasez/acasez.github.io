import MainHeader from "./components/MainHeader";
import PortfolioIndex from "./Subpages/PortfolioIndex";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/" element={<PortfolioIndex />} />
          <Route
            path="/NestedTooltips"
            element={<div>Edvin's Nested tooltips</div>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
