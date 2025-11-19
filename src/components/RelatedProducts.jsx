import React from "react";
import { Link } from "react-router-dom";
import PRODUCTS from "../data/products";

function RelatedProducts({ currentId }) {
  const related = PRODUCTS.filter((p) => p.id !== currentId).slice(0, 3);

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-[#774b31] mb-6">
        Related Products
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {related.map((p) => (
          <Link key={p.id} to={`/product/${p.id}`}>
            <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h4 className="font-semibold">{p.name}</h4>
              <span className="text-gray-700">${p.price.toFixed(2)}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
