import "./Section2.css";
import { getFeaturedProducts } from "../../data/products.js";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { Link } from "react-router-dom";

export default function Section2() {
  const { stuffedAnimals } = getFeaturedProducts();
  
  return (
    <section className="section-toys">
      <div className="section-toys__header">
        <h2 className="section-toys__title">Stuffed Animals</h2>
        <Link to="/catalog" className="section-toys__link">
          See All Toys
          <span className="section-toys__arrow">→</span>
        </Link>
      </div>
      <div className="divider-wrapper">
        <div className="divider green"></div>
        <div className="divider gray"></div>
      </div>

      <div className="section-toys__product-grid">
        {stuffedAnimals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
