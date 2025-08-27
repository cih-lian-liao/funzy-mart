import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import goodList from "./goodsList.js";
import ProductCard from "../ProductCard/ProductCard.jsx";
import "./Catalog.css";
import Subscribe from "../Subscribe/Subscribe.jsx";
import FollowInstagram from "../FollowInstagram/FollowInstagram";
import Footer from "../Footer/Footer.jsx";
import Breadcrumb from "../BreadCrumb/BreadCrumb.jsx";

export default function Catalog() {
  const [filterType, setFilterType] = useState("all");

  const filteredProducts =
    filterType === "all"
      ? goodList
      : goodList.filter((item) => item.type === filterType);

  return (
    <div>
      <section className="catalog">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Catalog", path: "/catalog" },
          ]}
        />

        <div className="catalog__header">
          <h2 className="catalog__title">All Toys</h2>

          <div className="catalog__filter">
            <button
              className={`catalog__filter-button ${
                filterType === "all" ? "active" : ""
              }`}
              onClick={() => setFilterType("all")}
            >
              All Toys
            </button>
            <button
              className={`catalog__filter-button ${
                filterType === "wooden-toys" ? "active" : ""
              }`}
              onClick={() => setFilterType("wooden-toys")}
            >
              Wooden Toys
            </button>
            <button
              className={`catalog__filter-button ${
                filterType === "stuffed-animals" ? "active" : ""
              }`}
              onClick={() => setFilterType("stuffed-animals")}
            >
              Stuffed Animals
            </button>
          </div>
        </div>

        <div className="catalog__divider-wrapper">
          <div className="catalog__divider catalog__divider--green"></div>
          <div className="catalog__divider catalog__divider--gray"></div>
        </div>

        <div className="catalog__product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
