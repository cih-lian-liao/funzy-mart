import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import Home from "./components/Home/Home.jsx";
import Catalog from "./components/Catalog/Catalog.jsx";
import ProductDetailPage from "./components/ProductDetailPage/ProductDetailPage.jsx";
import Delivery from "./components/Delivery/Delivery.jsx";
import About from "./components/About/About.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Admin from "./components/Admin/Admin.jsx";
import NotFound from "./components/NotFound/Notfound.jsx";

export default function MainRoutes() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
