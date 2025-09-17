import React from 'react'
import './ProductDetailPage.css';
import { useParams } from "react-router-dom";
import { getProductById } from '../../data/products.js';
import ProductDetail from '../ProductDetail/ProductDetail';
import ProductNotFound from '../../components/ProductNotFound/ProductNotFound';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';



export default function ProductDetailPage() {
  const { id } = useParams();
  
  try {
    const product = getProductById(id);

    if (!product) {
      return <ProductNotFound productId={id} />;
    }

    return (
      <ErrorBoundary>
        <div>
          <ProductDetail product={product} />
        </div>
      </ErrorBoundary>
    );
  } catch (error) {
    console.error('Error loading product:', error);
    return <ProductNotFound productId={id} />;
  }
}
