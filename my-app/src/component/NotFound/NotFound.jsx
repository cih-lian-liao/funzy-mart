import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! 找不到這個頁面。</p>
      <p>
        <Link to="/">← 回到首頁</Link>
      </p>
    </div>
  );
}
