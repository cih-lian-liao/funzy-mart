// ✅【修改 1】引入 useCart，取得購物車資料與開關控制
import { useCart } from "../../CartContext.jsx";
import React from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  // ✅【修改 2】從 Context 取得 cartItems 與 setIsCartOpen
  const { cartItems, setIsCartOpen } = useCart();

  // ✅【修改 3】計算購物車中商品總數量
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="nav">
      <div className="nav__container">
        {/* 左側 Logo 與選單 */}
        <div className="nav__left">
          <p className="nav__logo">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="nav__logo-link"
            >
              FunzyMart
            </Link>
          </p>
          <ul className="nav__menu">
            <li>
              <NavLink
                to="/catalog"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={({ isActive }) =>
                  isActive ? "nav__item active" : "nav__item"
                }
              >
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/delivery"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={({ isActive }) =>
                  isActive ? "nav__item active" : "nav__item"
                }
              >
                Delivery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={({ isActive }) =>
                  isActive ? "nav__item active" : "nav__item"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={({ isActive }) =>
                  isActive ? "nav__item active" : "nav__item"
                }
              >
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={({ isActive }) =>
                  isActive ? "nav__item active" : "nav__item"
                }
              >
                Admin
              </NavLink>
            </li>
          </ul>
        </div>

        {/* ✅ 右側購物車區塊：可以開啟購物車彈窗 */}
        <div className="nav__right">
          <p className="nav__cart-label">Cart</p>
          <div
            className="nav__cart-icon"
            onClick={() => setIsCartOpen(true)} // ✅【修改 4】：點擊開啟購物車 Modal
          >
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf75c3bf02346640399fec_cart-icon.svg"
              alt="Cart Icon"
            />
          </div>

          {/* ✅ 顯示購物車商品總數 */}
          <div className="nav__cart-count">
            <p>{totalQuantity}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
