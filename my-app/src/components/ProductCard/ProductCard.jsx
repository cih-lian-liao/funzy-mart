import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { id, name, price, img } = product;

  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-card__image-wrapper">
        <img src={img} alt={name} className="product-card__image" />
      </div>
      <div className="product-card__info">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__price">${price.toFixed(2)} USD</p>
      </div>
    </Link>
  );
}
