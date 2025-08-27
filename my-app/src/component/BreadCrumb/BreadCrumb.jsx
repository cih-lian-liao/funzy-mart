import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb">
      {items.map((item, index) => (
        <span key={index} className="breadcrumb__item">
          {index !== items.length - 1 ? (
            <>
              <Link to={item.path} className="breadcrumb__link">
                {item.label}
              </Link>
              <span className="breadcrumb__separator">➜</span>
            </>
          ) : (
            <span className="breadcrumb__current">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
