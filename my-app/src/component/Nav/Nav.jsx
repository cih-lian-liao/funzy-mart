// Import useCart hook to get cart data and control functions
import { useCart } from "../../hooks/useCart.js";
import React from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  // Get cartItems and setIsCartOpen from Context
  const { cartItems, setIsCartOpen } = useCart();

  // Calculate total quantity of items in cart
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="nav">
      <div className="nav__container">
        {/* Left side: Logo and menu */}
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

        {/* Right side: Cart section - can open cart modal */}
        <div className="nav__right">
          <p className="nav__cart-label">Cart</p>
          <div
            className="nav__cart-icon"
            onClick={() => setIsCartOpen(true)} // Click to open cart modal
          >
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf75c3bf02346640399fec_cart-icon.svg"
              alt="Cart Icon"
            />
          </div>

          {/* Display total quantity of items in cart */}
          <div className="nav__cart-count">
            <p>{totalQuantity}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
