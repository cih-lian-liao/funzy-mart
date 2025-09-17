import { useRef } from "react";
import { useCart } from "../../hooks/useCart.js";
import "./ProductDetail.css";

export default function ProductDetail({ product }) {
  const { name, price, img, sku, details } = product;

  const quantityRef = useRef();

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const qty = parseInt(quantityRef.current.value, 10);
    if (qty > 0) {
      addToCart(product, qty);
    }
  };

  return (
    <section className="product-detail">
      <div className="product-detail__top">
        <div className="product-detail__info">
          <h1 className="product-detail__title">{name}</h1>
          <p className="product-detail__description">
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
            There is no magic formula to write perfect ad copy. It is based on a
            number of factors.
          </p>
          <p className="product-detail__price">${price.toFixed(2)} USD</p>

          <div className="product-detail__actions">
            
            <input
              type="number"
              min="1"
              defaultValue="1"
              ref={quantityRef} 
              className="product-detail__quantity"
            />
            <button
              className="product-detail__add-button"
              onClick={handleAddToCart}
            >
              Add to Cart
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
            <h3>Add Your Product Description</h3>
            <p>
              The rich text element allows you to create and format headings,
              paragraphs, blockquotes, images, and video all in one place
              instead of having to add and format them individually. Just
              double-click and easily create content.
            </p>

            <h3>Simple & Elegant Template</h3>
            <ul>
              <li>Beautifully Designed</li>
              <li>Fully Responsive</li>
              <li>CMS Content</li>
              <li>Smooth Animations</li>
            </ul>

            <h3>Perfect Choice for Your Business</h3>
            <p>
              Grabbing the consumer’s attention isn’t enough; you have to keep
              that attention for at least a few seconds. This is where your
              benefits come into play or a product description that sets your
              offer apart from the others.
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
