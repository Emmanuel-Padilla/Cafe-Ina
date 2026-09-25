import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { MenuPage } from "./pages/MenuPage";
import { BakeryPage } from "./pages/BakeryPage";
import { NotFound } from "./pages/NotFound";
import { useScrollToHash } from "./hooks/useScrollToHash";
import { useDocumentMeta } from "./hooks/useDocumentMeta";

function AppRoutes() {
  useScrollToHash();
  useDocumentMeta();

  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/panaderia" element={<BakeryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RootLayout>
  );
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
