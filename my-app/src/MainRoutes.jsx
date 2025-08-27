import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop.jsx";
import Home from "./component/Home/Home.jsx";
import Catalog from "./component/Catalog/Catalog.jsx";
import ProductDetailPage from "./component/ProductDetailPage/ProductDetailPage.jsx";
import Delivery from "./component/Delivery/Delivery.jsx";
import About from "./component/About/About.jsx";
import Contacts from "./component/Contacts/Contacts.jsx";
import Admin from "./component/Admin/Admin.jsx";
import NotFound from "./component/NotFound/Notfound.jsx";

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
