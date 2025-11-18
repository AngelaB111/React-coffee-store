import React, { useState } from "react";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import espresso from "../assets/espresso.jpg"; 
import frappe from "../assets/greek-frappe.jpg";
import beans from "../assets/beans.jpg";
import latte from "../assets/latte.jpg";

// Example products
const PRODUCTS = [
  {
    id: 1,
    name: "Espresso",
    description: "Strong and bold espresso shot",
    price: 2.5,
    category: "Espresso",
    image: espresso,
  },
  {
    id: 2,
    name: "frappe",
    description: "Smooth and chilled coffee",
    price: 3.5,
    category: "frappe",
    image: frappe,
  },
  {
    id: 3,
    name: "Latte",
    description: "Creamy milk coffee",
    price: 3.0,
    category: "Lattes",
    image: latte,
  },
  {
    id: 4,
    name: "Coffee Beans",
    description: "Premium roasted beans",
    price: 10.0,
    category: "Beans",
    image: beans,
  },
];

const CATEGORIES = ["All", "Espresso", "frappe", "Lattes", "Beans"];

function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="px-10 md:px-36 py-16 bg-[#faf7f2] min-h-screen">
      <h2 className="text-4xl font-semibold text-center text-[#774b31] mb-8">
        Our Coffee Menu
      </h2>

      <CategoryFilter
        categories={CATEGORIES}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
