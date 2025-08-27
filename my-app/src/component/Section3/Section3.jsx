import "./Section3.css";
import section3DemoProductList from "./Section3DemoProductList.js";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { Link } from "react-router-dom";

export default function Section3() {
  return (
    <section className="wooden-toys">
      <div className="section-toys__header">
        <h2 className="section-toys__title">Wooden Toys</h2>
        <Link to="/catalog" className="section-toys__link">
          See All Toys
        </Link>
      </div>
      <div className="divider-wrapper">
        <div className="divider green"></div>
        <div className="divider gray"></div>
      </div>

      <div className="section-toys__product-grid">
        {section3DemoProductList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
