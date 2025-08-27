import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 每次切換路由時，滾動到頁面頂端
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}