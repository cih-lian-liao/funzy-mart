import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductNotFound.css';

export default function ProductNotFound({ productId }) {
  return (
    <div className="product-not-found">
      <div className="product-not-found__container">
        <div className="product-not-found__icon">🔍</div>
        <h1 className="product-not-found__title">Product Not Found</h1>
        <p className="product-not-found__message">
          Sorry, the product you're looking for doesn't exist or has been removed.
          {productId && (
            <span className="product-not-found__product-id">
              Product ID: {productId}
            </span>
          )}
        </p>
        
        <div className="product-not-found__suggestions">
          <h3>You can try:</h3>
          <ul>
            <li>Check if the product ID is correct</li>
            <li>Browse our product catalog</li>
            <li>Use the search function to find products</li>
            <li>Contact customer service for help</li>
          </ul>
        </div>

        <div className="product-not-found__actions">
          <Link 
            to="/catalog" 
            className="product-not-found__button product-not-found__button--primary"
          >
            Browse Product Catalog
          </Link>
          <Link 
            to="/" 
            className="product-not-found__button product-not-found__button--secondary"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

ProductNotFound.propTypes = {
  productId: PropTypes.string,
};

ProductNotFound.defaultProps = {
  productId: null,
};
