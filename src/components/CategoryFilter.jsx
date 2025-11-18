import React from "react";

function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="flex gap-4 mb-6 flex-wrap justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full font-semibold transition ${
            selected === cat
              ? "bg-[#774b31] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
