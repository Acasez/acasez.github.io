// App.tsx
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import AppRoutes from "./components/AppRouter.tsx";
import { Suspense } from "react";

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
      <Footer />
    </>
  );
}
