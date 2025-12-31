import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RelatedProducts({ currentId }) {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentId) return;

    fetch(`https://coffee-store-backend-wmt5.onrender.com/items/related/${currentId}?limit=3`)
      .then((res) => {
        if (!res.ok) throw new Error("Server error");
        return res.json();
      })
      .then((data) => {
        setRelated(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setRelated([]);
        setLoading(false);
      });
  }, [currentId]);

  if (loading) return null;

  if (related.length === 0) {
    return (
      <div className="mt-16 text-gray-500">No related products found.</div>
    );
  }

  return (
    
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-[#774b31] mb-6">
        Related Products
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {related.map((p) => (
          <Link key={p.item_id} to={`/product/${p.item_id}`}>
            <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h4 className="font-semibold">{p.name}</h4>
              <span className="text-gray-700">
                ${Number(p.price).toFixed(2)} 

              </span>
            </div>
          </Link>
        ))}
        
      </div>
    </div>
    
  );
}

export default RelatedProducts;
