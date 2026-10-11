import React from "react";
import { Leaf, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { selectCartCount } from "../features/cart/CartSlice.jsx";

export default function Navbar({ page, navigate }) {
  const count = useSelector(selectCartCount);

  return (
    <header className="navbar">
      <button className="brand" onClick={() => navigate("home")} aria-label="Paradise Nursery home">
        <span className="brand-mark"><Leaf size={22} /></span>
        <span>Paradise <b>Nursery</b></span>
      </button>
      <nav aria-label="Main navigation">
        <button className={page === "home" ? "nav-link active" : "nav-link"} onClick={() => navigate("home")}>Home</button>
        <button className={page === "plants" ? "nav-link active" : "nav-link"} onClick={() => navigate("plants")}>Plants</button>
        <button className={page === "cart" ? "nav-cart active" : "nav-cart"} onClick={() => navigate("cart")} aria-label={`Cart, ${count} items`}>
          <ShoppingCart size={21} /><span>Cart</span><span className="cart-count">{count}</span>
        </button>
      </nav>
    </header>
  );
}