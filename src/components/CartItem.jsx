import React from "react";
import { ArrowLeft, Minus, Plus, Trash2, Leaf, ShoppingBag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart, decreaseQuantity, increaseQuantity, removeFromCart,
  selectCartItems, selectCartTotal
} from "../features/cart/CartSlice.jsx";

const money = value => new Intl.NumberFormat("en-US", {
  style: "currency", currency: "USD"
}).format(value);

export default function CartItem({ navigate }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (!items.length) {
    return (
      <main className="cart-page page-wrap">
        <button className="back-link" onClick={() => navigate("plants")}><ArrowLeft size={17} /> Continue shopping</button>
        <div className="empty-cart">
          <span className="empty-cart-icon"><ShoppingBag size={34} /></span>
          <p className="eyebrow">Your basket is taking a nap</p>
          <h1>Your cart is empty.</h1>
          <p>Find a leafy friend to bring home.</p>
          <button className="primary-button" onClick={() => navigate("plants")}>Explore plants</button>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page page-wrap">
      <button className="back-link" onClick={() => navigate("plants")}><ArrowLeft size={17} /> Continue shopping</button>
      <div className="cart-heading">
        <div><p className="eyebrow">Your leafy selections</p><h1>Shopping <em>cart.</em></h1><p>{itemCount} {itemCount === 1 ? "item" : "items"} ready to brighten your home.</p></div>
        <span className="cart-leaf"><Leaf size={42} /></span>
      </div>
      <div className="cart-layout">
        <section className="cart-items" aria-label="Items in your cart">
          {items.map(item => (
            <article className="cart-row" key={item.id}>
              <img className="cart-thumb" src={item.image} alt={item.name} />
              <div className="cart-product">
                <h2>{item.name}</h2><p>{money(item.price)} <span>each</span></p>
                <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={15} /> Remove</button>
              </div>
              <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                <button onClick={() => dispatch(decreaseQuantity(item.id))} aria-label="Decrease quantity"><Minus size={15} /></button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))} aria-label="Increase quantity"><Plus size={15} /></button>
              </div>
              <strong className="line-total">{money(item.price * item.quantity)}</strong>
            </article>
          ))}
        </section>
        <aside className="order-summary">
          <p className="eyebrow">The little details</p><h2>Order summary</h2>
          <div className="summary-line"><span>Plants ({itemCount})</span><span>{money(total)}</span></div>
          <div className="summary-line"><span>Delivery</span><span className="free-label">Calculated later</span></div>
          <div className="summary-total"><span>Subtotal</span><strong>{money(total)}</strong></div>
          <p className="summary-note">Taxes and delivery are calculated at checkout.</p>
          <button className="primary-button checkout-button" onClick={() => window.alert("Coming Soon! Checkout will be available in a future update.")}>Proceed to Checkout</button>
          <button className="clear-cart" onClick={() => dispatch(clearCart())}>Clear cart</button>
        </aside>
      </div>
    </main>
  );
}