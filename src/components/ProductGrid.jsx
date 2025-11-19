import React, { useState } from "react";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";

import { PRODUCTS } from "../data/products";

const CATEGORIES = ["All", "Espresso", "frappe", "Lattes", "Beans"];

function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <>
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
    </>
  );
}

export default ProductGrid;
