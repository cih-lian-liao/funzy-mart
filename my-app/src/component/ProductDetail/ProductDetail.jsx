import { useRef, useState } from "react";
import { useCart } from "../../hooks/useCart.js";
import "./ProductDetail.css";

export default function ProductDetail({ product }) {
  const { name, price, img, sku, details, type, stock } = product;

  const quantityRef = useRef();
  const [notification, setNotification] = useState(null);

  const { addToCart } = useCart();

  // Show notification
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAddToCart = () => {
    const qty = parseInt(quantityRef.current.value, 10);
    if (qty > 0) {
      const result = addToCart(product, qty);
      if (result.success) {
        showNotification(result.message, 'success');
      } else {
        showNotification(result.message, 'error');
      }
    }
  };

  // Generate product-specific content based on type
  const getProductDescription = () => {
    if (type === "stuffed-animals") {
      return `Meet your child's new best friend! This adorable ${name.toLowerCase()} is crafted with premium soft materials and designed for endless cuddles. Perfect for bedtime stories, imaginative play, and creating precious childhood memories.`;
    } else if (type === "wooden-toys") {
      return `Discover the joy of learning through play! This beautifully crafted ${name.toLowerCase()} combines traditional wooden toy charm with modern safety standards. Designed to stimulate creativity, develop fine motor skills, and provide hours of educational fun.`;
    }
    return `A wonderful addition to your child's toy collection! This ${name.toLowerCase()} is designed with love and care to bring joy and learning to your little one's playtime.`;
  };

  const getProductFeatures = () => {
    if (type === "stuffed-animals") {
      return [
        "Ultra-soft premium materials",
        "Child-safe construction",
        "Machine washable",
        "Perfect for all ages"
      ];
    } else if (type === "wooden-toys") {
      return [
        "Natural wood construction",
        "Non-toxic finishes",
        "Educational value",
        "Durable and long-lasting"
      ];
    }
    return [
      "High-quality materials",
      "Child-safe design",
      "Educational benefits",
      "Great value for money"
    ];
  };

  const getProductBenefits = () => {
    if (type === "stuffed-animals") {
      return `This cuddly companion provides comfort and security for your child. The soft texture and friendly design help develop emotional intelligence and provide a sense of comfort during bedtime or stressful moments.`;
    } else if (type === "wooden-toys") {
      return `This wooden toy encourages hands-on learning and creativity. It helps develop problem-solving skills, hand-eye coordination, and spatial awareness while providing a screen-free alternative to modern entertainment.`;
    }
    return `This carefully selected toy promotes healthy development and provides endless entertainment for your child.`;
  };

  return (
    <section className="product-detail">
      {/* Notification */}
      {notification && (
        <div className={`product-detail__notification product-detail__notification--${notification.type}`}>
          {notification.message}
        </div>
      )}

      <div className="product-detail__top">
        <div className="product-detail__info">
          <h1 className="product-detail__title">{name}</h1>
          <p className="product-detail__description">
            {getProductDescription()}
          </p>
          <p className="product-detail__price">${price.toFixed(2)} USD</p>
          
          {/* Stock information */}
          <div className="product-detail__stock">
            <span className={`product-detail__stock-badge ${stock > 10 ? 'in-stock' : stock > 0 ? 'low-stock' : 'out-of-stock'}`}>
              {stock > 10 ? '✅ In Stock' : stock > 0 ? `⚠️ Only ${stock} left` : '❌ Out of Stock'}
            </span>
          </div>

          <div className="product-detail__actions">
            <input
              type="number"
              min="1"
              max={stock || 999}
              defaultValue="1"
              ref={quantityRef} 
              className="product-detail__quantity"
              disabled={stock === 0}
            />
            <button
              className="product-detail__add-button"
              onClick={handleAddToCart}
              disabled={stock === 0}
            >
              {stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>

        <div className="product-detail__image-wrapper">
          <img src={img} alt={name} className="product-detail__image" />
          <p className="product-detail__sku">SKU:{sku}</p>
        </div>
      </div>

      <hr className="product-detail__divider" />

      <div className="product-detail__section">
        <h2 className="product-detail__section-title">Product Details</h2>

        <div className="product-detail__body">
          <div className="product-detail__richtext">
            <h3>Why Choose This {name}?</h3>
            <p>
              {getProductBenefits()}
            </p>

            <h3>Key Features</h3>
            <ul>
              {getProductFeatures().map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h3>Perfect Gift Choice</h3>
            <p>
              Whether you're looking for a birthday present, holiday gift, or just want to surprise your little one, this {name.toLowerCase()} makes an excellent choice. It's designed to grow with your child and provide years of enjoyment and learning.
            </p>
          </div>

          <div className="product-detail__specs">
            <table>
              <tbody>
                <tr>
                  <td>Width</td>
                  <td>
                    <strong>{details.width}in</strong>
                  </td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>
                    <strong>{details.height}in</strong>
                  </td>
                </tr>
                <tr>
                  <td>Length</td>
                  <td>
                    <strong>{details.length}in</strong>
                  </td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>
                    <strong>{details.weight}oz</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
