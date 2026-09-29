// App.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, useEffect, type ReactNode } from "react";
import { flatRoutes } from "./Routes/config.ts";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer.tsx";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  return (
    <>
      <MainHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
      <Footer />
    </>
  );
}

export function AppRoutes({ fallback }: { fallback?: ReactNode }) {
  return (
    <Routes>
      {flatRoutes.map(({ path, component: Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={fallback ?? <div>Loading…</div>}>
              <Component />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}
