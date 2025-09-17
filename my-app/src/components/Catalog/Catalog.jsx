import React, { useState, useMemo } from "react";
import { getProductsByType } from "../../data/products.js";
import ProductCard from "../ProductCard/ProductCard.jsx";
import "./Catalog.css";
import Breadcrumb from "../Breadcrumb/Breadcrumb.jsx";

export default function Catalog() {
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filteredProducts = getProductsByType(filterType);

  // Search and sort products
  const processedProducts = useMemo(() => {
    let products = [...filteredProducts];

    // Apply search filter
    if (searchQuery.trim()) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    products.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        case "stock":
          return b.stock - a.stock;
        default:
          return 0;
      }
    });

    return products;
  }, [filteredProducts, searchQuery, sortBy]);

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
          
          {/* Search Bar */}
          <div className="catalog__search">
            <div className="catalog__search-container">
              <input
                type="text"
                placeholder="Search products by name or SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="catalog__search-input"
              />
              <div className="catalog__search-icon">🔍</div>
            </div>
          </div>

          <div className="catalog__controls">
            {/* Category Filter */}
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

            {/* Sort Controls */}
            <div className="catalog__sort">
              <label htmlFor="sort-select" className="catalog__sort-label">
                Sort by:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="catalog__sort-select"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="stock">Stock (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Results Info */}
          <div className="catalog__results-info">
            <span className="catalog__results-count">
              Showing {processedProducts.length} of {filteredProducts.length} products
            </span>
            {searchQuery && (
              <span className="catalog__search-info">
                for "{searchQuery}"
              </span>
            )}
          </div>
        </div>

        <div className="catalog__divider-wrapper">
          <div className="catalog__divider catalog__divider--green"></div>
          <div className="catalog__divider catalog__divider--gray"></div>
        </div>

        <div className="catalog__product-grid">
          {processedProducts.length > 0 ? (
            processedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="catalog__no-results">
              <div className="catalog__no-results-icon">🔍</div>
              <h3 className="catalog__no-results-title">No products found</h3>
              <p className="catalog__no-results-message">
                {searchQuery 
                  ? `No products match your search "${searchQuery}". Try adjusting your search terms.`
                  : "No products available in this category."
                }
              </p>
              {searchQuery && (
                <button 
                  className="catalog__clear-search"
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
