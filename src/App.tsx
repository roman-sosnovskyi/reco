import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "@/core/MainLayout.tsx";

const MainPage = lazy(() => import("@/pages/mainPage/MainPage.tsx"));
const AboutPage = lazy(() => import("@/pages/about/page.tsx"));
const ContactPage = lazy(() => import("@/pages/contacts/page.tsx"));
const FeedbackPage = lazy(() => import("@/pages/feedback/page.tsx"));
const CartPage = lazy(() => import("@/pages/cart/page.tsx"));
const SummaryPage = lazy(() => import("@/pages/summary/page.tsx"));
const CatalogPage = lazy(() => import("@/pages/catalog/page.tsx"));
const NotFoundPage = lazy(() => import("@/pages/notFound/page.tsx"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contacts" element={<ContactPage />} />
            <Route path="feedback" element={<FeedbackPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="summary" element={<SummaryPage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="*" element={<NotFoundPage />} /> {/* Обработка 404 */}
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
