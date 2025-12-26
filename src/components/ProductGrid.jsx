import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import axios from "axios";
function ProductGrid() {
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5000/categories");
        console.log(res.data);
        const apiCategories = res.data.map((item) => item.category);

        setCategories(["All", ...apiCategories]);
      } catch (error) {
        console.error("Failed to load categories", error);
      }
    };

    fetchCategories();
  }, []);
  useEffect(() => {
    const url =
      selectedCategory === "All"
        ? "http://localhost:5000/items"
        : `http://localhost:5000/items/${selectedCategory}`;

    axios
      .get(url)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, [selectedCategory]);

  return (
    <div className="px-10 md:px-36 py-16 bg-[#faf7f2] min-h-screen">
      <h2 className="text-4xl font-semibold text-center text-[#774b31] mb-8">
        Our Coffee Menu
      </h2>

      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.item_id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default ProductGrid;
