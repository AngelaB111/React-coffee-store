import React from "react";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-[#774b31] mb-2">
            {product.name}
          </h3>
          <p className="text-gray-700 text-sm mb-4">{product.description}</p>
        </div>
        <div className="flex  flex-col justify-between items-center mt-auto">
          <span className="text-lg font-semibold text-[#774b31]">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex flex-col gap-2 mt-4">
            <button className="bg-[#774b31] text-white px-3 py-1 rounded hover:bg-[#633628] transition">
              Add to Cart
            </button>
            <button className= "bg-gray-200 text-[#774b31] px-3 py-1 rounded hover:bg-gray-300 transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
