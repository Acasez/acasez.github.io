import { Suspense, useEffect, type ReactNode } from "react";
import { Routes, Route } from "react-router";
import { flatRoutes } from "../Routes/config";
import { useLocation } from "react-router";

export default function AppRoutes({ fallback }: { fallback?: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

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
