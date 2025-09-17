import { useContext } from "react";
import { CartContext } from "../contexts/CartContext.js";

export function useCart() {
  return useContext(CartContext);
}
