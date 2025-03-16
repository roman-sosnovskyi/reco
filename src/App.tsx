import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/core/MainLayout";
import MainPage from "@/pages/mainPage/MainPage";
import AboutPage from "@/pages/about/page";
import ContactPage from "./pages/contacts/page";
import FeedbackPage from "./pages/feedback/page";
import CartPage from "./pages/cart/page";
import SummaryPage from "./pages/summary/page";

function App() {
  return (
    <Router basename="/reco" >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="feedback" element={<FeedbackPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="summary" element={<SummaryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
