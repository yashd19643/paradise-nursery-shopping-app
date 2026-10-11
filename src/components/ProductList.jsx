import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Check, ShoppingBag } from "lucide-react";
import { plantCategories } from "../data/plants.js";
import { addToCart, selectCartItems } from "../features/cart/CartSlice.jsx";

const money = value => new Intl.NumberFormat("en-US", {
  style: "currency", currency: "USD"
}).format(value);

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartIds = new Set(cartItems.map(item => item.id));

  return (
    <main className="catalogue page-wrap">
      <div className="section-heading">
        <p className="eyebrow">Find your new favourite</p>
        <h1>Bring nature <em>home.</em></h1>
        <p>Meet the plants that make your space feel more alive.</p>
      </div>
      {plantCategories.map(category => (
        <section className="plant-category" key={category.id} id={category.id}>
          <div className="category-heading">
            <div><h2>{category.title}</h2><p>{category.subtitle}</p></div>
            <span className="plant-count">{category.plants.length} plants</span>
          </div>
          <div className="plant-grid">
            {category.plants.map(plant => {
              const added = cartIds.has(plant.id);
              return (
                <article className="plant-card" key={plant.id}>
                  <div className="plant-image-wrap">
                    <img src={plant.image} alt={plant.name} loading="lazy" />
                    <span className="plant-tag">Houseplant</span>
                  </div>
                  <div className="plant-info">
                    <h3>{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <div className="plant-card-bottom">
                      <strong>{money(plant.price)}</strong>
                      <button className={added ? "add-button added" : "add-button"}
                        disabled={added} onClick={() => dispatch(addToCart(plant))}>
                        {added ? <><Check size={16} /> Added</> : <><ShoppingBag size={16} /> Add to Cart</>}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}