import React from "react";
import { useState } from "react";
import { ArrowRight, Leaf, Sprout } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const navigate = nextPage => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <Navbar page={page} navigate={navigate} />
      {page === "home" && <>
        <main className="hero">
          <div className="hero-shade" />
          <div className="hero-content">
            <div className="hero-kicker"><Sprout size={17} /> YOUR HOME, A LITTLE GREENER</div>
            <h1>Grow a little<br /><em>happiness.</em></h1>
            <p>Thoughtfully chosen houseplants to help you create a calmer, greener place to call home.</p>
            <button className="hero-button" onClick={() => navigate("plants")}>Get Started <ArrowRight size={18} /></button>
            <div className="hero-note"><Leaf size={16} /> Find the right plant for your space</div>
          </div>
          <div className="hero-bottom"><span>PARADISE NURSERY</span><span>GROW SLOW. LIVE GREEN.</span></div>
        </main>
        <AboutUs />
        <section className="home-cta">
          <p className="eyebrow">Your next green chapter</p>
          <h2>Make room for <em>something growing.</em></h2>
          <button className="primary-button" onClick={() => navigate("plants")}>Shop houseplants <ArrowRight size={17} /></button>
        </section>
      </>}
      {page === "plants" && <ProductList />}
      {page === "cart" && <CartItem navigate={navigate} />}
      <footer className="site-footer">
        <div className="footer-brand"><Leaf size={19} /> Paradise Nursery</div>
        <p>Bring nature home, one leaf at a time.</p>
        <span>© {new Date().getFullYear()} Paradise Nursery</span>
      </footer>
    </div>
  );
}