// src/pages/Browse.jsx
import React, { useEffect, useState } from "react";
import { getAvailableProducts } from "../../services/productService";

export default function AvailableProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAvailableProducts().then(setProducts);
  }, []);

  return (
    <section>
      <h2 className="text-2xl text-left text-green-300 mb-10 pl-7">
        Available Products
      </h2> 

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {products.map((p) => (
          <div
            key={p.id}
            className="relative rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Glow border */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 blur-xl opacity-30 animate-pulse" />

            {/* Inner card */}
            <div className="relative z-10 bg-gray-900/90 rounded-2xl p-6 flex flex-col items-center text-center">
              {/* Placeholder for product image */}
              <div className="w-31 h-20 mb-4 rounded-lg bg-gray-800 flex items-center justify-center text-gray-500">
                Image
              </div>

              <h3 className="text-xl font-semibold text-gray-200 mb-2">{p.name}</h3>
              <p className="text-green-400 font-bold text-lg mb-4">${p.price}</p>

              <button className="px-5  rounded bg-green-500 hover:bg-green-600 text-black font-semibold transition duration-200 shadow-md">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
