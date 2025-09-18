import React, { useState, useEffect } from 'react';
import './Admin.css';
import Breadcrumb from '../Breadcrumb/BreadCrumb.jsx';
import productsData from '../../data/products.js';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [products, setProducts] = useState([]);
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    lowStockItems: 0
  });

  useEffect(() => {
    // Load products
    setProducts(productsData);
    
    // Calculate stats
    const totalProducts = productsData.length;
    const lowStockItems = productsData.filter(p => p.stock < 10).length;
    
    setStats({
      totalProducts,
      totalOrders: 0, // Would come from orders API
      totalRevenue: 0, // Would come from orders API
      lowStockItems
    });
  }, []);

  const handleStockUpdate = (productId, newStock) => {
    setProducts(prev => 
      prev.map(p => 
        p.id === productId ? { ...p, stock: newStock } : p
      )
    );
  };

  const handlePriceUpdate = (productId, newPrice) => {
    setProducts(prev => 
      prev.map(p => 
        p.id === productId ? { ...p, price: newPrice } : p
      )
    );
  };

  return (
    <div className="admin">
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Admin", path: "/admin" },
        ]}
      />
      
      <div className="admin__container">
        <div className="admin__header">
          <h1 className="admin__title">🛠️ Admin Dashboard</h1>
          <p className="admin__subtitle">Manage your FunzyMart store</p>
        </div>

        <div className="admin__tabs">
          <button 
            className={`admin__tab ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            📊 Dashboard
          </button>
          <button 
            className={`admin__tab ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            🧸 Products
          </button>
          <button 
            className={`admin__tab ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            📦 Orders
          </button>
          <button 
            className={`admin__tab ${activeTab === 'inventory' ? 'active' : ''}`}
            onClick={() => setActiveTab('inventory')}
          >
            📋 Inventory
          </button>
        </div>

        <div className="admin__content">
          {activeTab === 'dashboard' && (
            <div className="admin__dashboard">
              <div className="admin__stats">
                <div className="admin__stat-card">
                  <div className="admin__stat-icon">🧸</div>
                  <div className="admin__stat-content">
                    <h3 className="admin__stat-number">{stats.totalProducts}</h3>
                    <p className="admin__stat-label">Total Products</p>
                  </div>
                </div>
                <div className="admin__stat-card">
                  <div className="admin__stat-icon">📦</div>
                  <div className="admin__stat-content">
                    <h3 className="admin__stat-number">{stats.totalOrders}</h3>
                    <p className="admin__stat-label">Total Orders</p>
                  </div>
                </div>
                <div className="admin__stat-card">
                  <div className="admin__stat-icon">💰</div>
                  <div className="admin__stat-content">
                    <h3 className="admin__stat-number">${stats.totalRevenue.toFixed(2)}</h3>
                    <p className="admin__stat-label">Total Revenue</p>
                  </div>
                </div>
                <div className="admin__stat-card">
                  <div className="admin__stat-icon">⚠️</div>
                  <div className="admin__stat-content">
                    <h3 className="admin__stat-number">{stats.lowStockItems}</h3>
                    <p className="admin__stat-label">Low Stock Items</p>
                  </div>
                </div>
              </div>

              <div className="admin__quick-actions">
                <h2 className="admin__section-title">Quick Actions</h2>
                <div className="admin__action-buttons">
                  <button className="admin__action-btn">
                    ➕ Add New Product
                  </button>
                  <button className="admin__action-btn">
                    📊 View Reports
                  </button>
                  <button className="admin__action-btn">
                    ⚙️ Settings
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="admin__products">
              <div className="admin__section-header">
                <h2 className="admin__section-title">Product Management</h2>
                <button className="admin__add-btn">➕ Add Product</button>
              </div>
              
              <div className="admin__products-grid">
                {products.map(product => (
                  <div key={product.id} className="admin__product-card">
                    <img src={product.img} alt={product.name} className="admin__product-image" />
                    <div className="admin__product-info">
                      <h3 className="admin__product-name">{product.name}</h3>
                      <p className="admin__product-sku">SKU: {product.sku}</p>
                      <div className="admin__product-controls">
                        <div className="admin__control-group">
                          <label>Price:</label>
                          <input
                            type="number"
                            value={product.price}
                            onChange={(e) => handlePriceUpdate(product.id, parseFloat(e.target.value))}
                            className="admin__control-input"
                          />
                        </div>
                        <div className="admin__control-group">
                          <label>Stock:</label>
                          <input
                            type="number"
                            value={product.stock}
                            onChange={(e) => handleStockUpdate(product.id, parseInt(e.target.value))}
                            className="admin__control-input"
                          />
                        </div>
                      </div>
                      <div className="admin__product-actions">
                        <button className="admin__edit-btn">✏️ Edit</button>
                        <button className="admin__delete-btn">🗑️ Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="admin__orders">
              <h2 className="admin__section-title">Order Management</h2>
              <div className="admin__empty-state">
                <div className="admin__empty-icon">📦</div>
                <h3>No Orders Yet</h3>
                <p>Orders will appear here once customers start placing them.</p>
              </div>
            </div>
          )}

          {activeTab === 'inventory' && (
            <div className="admin__inventory">
              <h2 className="admin__section-title">Inventory Management</h2>
              <div className="admin__inventory-table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>SKU</th>
                      <th>Current Stock</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <tr key={product.id}>
                        <td>
                          <div className="admin__inventory-product">
                            <img src={product.img} alt={product.name} />
                            <span>{product.name}</span>
                          </div>
                        </td>
                        <td>{product.sku}</td>
                        <td>
                          <input
                            type="number"
                            value={product.stock}
                            onChange={(e) => handleStockUpdate(product.id, parseInt(e.target.value))}
                            className="admin__stock-input"
                          />
                        </td>
                        <td>
                          <span className={`admin__stock-status ${product.stock > 10 ? 'in-stock' : product.stock > 0 ? 'low-stock' : 'out-of-stock'}`}>
                            {product.stock > 10 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock'}
                          </span>
                        </td>
                        <td>
                          <button className="admin__update-btn">Update</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
