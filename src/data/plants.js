export const plantCategories = [
  {
    id: "easy-care",
    title: "Easy-care favourites",
    subtitle: "Beautiful greenery with a little less fuss.",
    plants: [
      { id: "snake-plant", name: "Snake Plant", price: 18.99, description: "Upright, architectural leaves for a bright or low-light corner.", image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b8b?auto=format&fit=crop&w=900&q=85" },
      { id: "zz-plant", name: "ZZ Plant", price: 22.50, description: "Glossy leaves and a relaxed nature make this a resilient favourite.", image: "https://images.unsplash.com/photo-1632207691143-643e2c7a2f96?auto=format&fit=crop&w=900&q=85" },
      { id: "golden-pothos", name: "Golden Pothos", price: 14.99, description: "Trailing heart-shaped leaves for shelves and hanging pots.", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=85" },
      { id: "spider-plant", name: "Spider Plant", price: 16.25, description: "Arching striped foliage adds movement to desks and sunny rooms.", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=900&q=85" },
      { id: "jade-plant", name: "Jade Plant", price: 19.00, description: "A compact succulent with plump leaves and a sculptural silhouette.", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=85" },
      { id: "peace-lily", name: "Peace Lily", price: 24.75, description: "Deep green leaves and elegant white blooms make a calm statement.", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=900&q=85" }
    ]
  },
  {
    id: "tropical",
    title: "Tropical statement plants",
    subtitle: "Lush shapes for a room that needs a focal point.",
    plants: [
      { id: "monstera", name: "Monstera Deliciosa", price: 32.00, description: "Iconic split leaves create an indoor-jungle feel.", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=85" },
      { id: "rubber-plant", name: "Rubber Plant", price: 29.50, description: "Rich, broad leaves with a polished finish and bold presence.", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85" },
      { id: "bird-of-paradise", name: "Bird of Paradise", price: 48.00, description: "Large paddle-shaped leaves bring a tropical look.", image: "https://images.unsplash.com/photo-1597055181300-0c9c7a9f1d7b?auto=format&fit=crop&w=900&q=85" },
      { id: "calathea", name: "Calathea Orbifolia", price: 27.25, description: "Rounded leaves with silvery stripes make a soft display.", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=900&q=85" },
      { id: "heartleaf-philodendron", name: "Heartleaf Philodendron", price: 17.50, description: "Easy trailing vines with charming heart-shaped leaves.", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85" },
      { id: "alocasia", name: "Alocasia Polly", price: 26.99, description: "Dramatic arrow-shaped leaves with contrasting pale veins.", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=85" }
    ]
  },
  {
    id: "small-spaces",
    title: "Small-space greens",
    subtitle: "Little plants with plenty of personality.",
    plants: [
      { id: "succulent-trio", name: "Succulent Trio", price: 15.00, description: "Compact shapes for bright windowsills and little nooks.", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85" },
      { id: "chinese-money-plant", name: "Chinese Money Plant", price: 21.00, description: "Round coin-like leaves on slender stems for a side table.", image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=900&q=85" },
      { id: "air-plant", name: "Air Plant", price: 12.50, description: "A sculptural, soil-free plant for a small shelf or desk.", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=85" },
      { id: "parlor-palm", name: "Parlor Palm", price: 20.50, description: "Fine, feathery fronds add a soft green texture to small rooms.", image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=85" },
      { id: "peperomia", name: "Peperomia Green", price: 18.00, description: "Compact glossy foliage for a work-from-home desk.", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85" },
      { id: "mini-ficus", name: "Mini Ficus", price: 23.50, description: "A tidy little tree with bright leaves and a classic shape.", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85" }
    ]
  }
];

export const allPlants = plantCategories.flatMap(category =>
  category.plants.map(plant => ({
    ...plant,
    categoryId: category.id,
    categoryTitle: category.title
  }))
);