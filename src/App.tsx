// App.tsx
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer.tsx";
import AppRoutes from "./components/AppRouter.tsx";
import { Suspense } from "react";

export default function App() {
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
