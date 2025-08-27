import React from 'react'
import './ProductDetailPage.css';
import { useParams } from "react-router-dom";
import goodsList from '../Catalog/goodsList';
import ProductDetail from '../ProductDetail/ProductDetail';



export default function ProductDetailPage() {
  const { id } = useParams();
  const product = goodsList.find((item) => item.id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
}
