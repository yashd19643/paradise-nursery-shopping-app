import React from "react";
import { Heart, Sprout, Sun } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-copy">
        <p className="eyebrow">A little more green, every day</p>
        <h2>Plants make a house feel like <em>home.</em></h2>
        <p>At Paradise Nursery, we believe caring for a plant can make everyday life feel calmer, brighter, and more connected to nature. We curate welcoming houseplants for first-time plant parents and seasoned indoor gardeners alike.</p>
      </div>
      <div className="about-values">
        <article><span><Sprout /></span><h3>Thoughtfully chosen</h3><p>Plants selected to bring texture, colour, and life to your space.</p></article>
        <article><span><Sun /></span><h3>Growing made simple</h3><p>Friendly descriptions help you find a plant that suits your home.</p></article>
        <article><span><Heart /></span><h3>Rooted in care</h3><p>We want every new leaf to be a little reason to smile.</p></article>
      </div>
    </section>
  );
}