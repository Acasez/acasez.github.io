// App.jsx
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./Routes/config.ts";
import MainHeader from "./components/MainHeader";

export default function App() {
  return (
    <>
      <MainHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}
