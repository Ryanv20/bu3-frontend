import React, { useEffect, useState } from "react";
import { getAvailableProducts } from "../../services/productService";
import { useRouter } from "next/navigation"; // ✅ Next.js navigation

export default function AvailableProducts() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [clickTimeout, setClickTimeout] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const router = useRouter();

  useEffect(() => {
    getAvailableProducts().then(setProducts);
  }, []);

  const handleClick = (product) => {
    if (clickTimeout) clearTimeout(clickTimeout);

    const timeout = setTimeout(() => {
      setSelectedProduct(product); // open modal preview
    }, 250);

    setClickTimeout(timeout);
  };

  const goToProductPage = (product) => {
    router.push(`/products/${product.id}`); // ✅ goes to /products/[id]
  };

  // only show two rows (2 * columns) when collapsed
  const itemsToShow = showAll
    ? products
    : products.slice(0, Math.min(products.length, 2 * 3)); // 2 rows * 3 items

  return (
    <section className="text-white px-4">
      <h2 className="text-2xl text-left mb-10 pl-2">Available Products</h2>

      <div
        className="grid gap-6 max-w-7xl mx-auto"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
      >
        {itemsToShow.map((p) => (
          <div
            key={p.id}
            className="relative rounded-xl shadow-lg border border-white/20 bg-black p-5 flex flex-col justify-between text-center
                        transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:scale-[1.02]"
            onClick={() => handleClick(p)}
          >
            {/* Status */}
            <div className="absolute top-3 right-3 text-xs border border-white px-2 py-0.5 rounded-full">
              {p.trend === "up" ? "▲ Rising" : "▼ Falling"}
            </div>

            {/* Image placeholder */}
            <div className="w-full h-32 mb-4 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 text-sm">
              Product Image
            </div>

            {/* Info */}
            <div>
              <h3 className="text-lg font-semibold mb-1">{p.name}</h3>
              <p className="text-sm text-gray-300 mb-3">${p.price}</p>
            </div>

            {/* Meta */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                {[...Array(3)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://via.placeholder.com/20`}
                    alt="trader"
                    className="w-6 h-6 rounded-full border border-white -ml-2 first:ml-0"
                  />
                ))}
                <span className="ml-2 text-xs text-gray-400">+2</span>
              </div>
              <div
                className={`text-xs font-medium ${
                  p.negotiable
                    ? "text-white animate-pulse"
                    : "text-gray-400 opacity-70"
                }`}
              >
                {p.negotiable ? "Negotiable" : "Non-Negotiable"}
              </div>
            </div>

            {/* View button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent opening modal
                goToProductPage(p); // ✅ navigate to dynamic page
              }}
              className="px-3 py-1 rounded border border-white text-white text-sm 
                          hover:bg-white hover:text-black transition shadow-sm"
            >
              View
            </button>
          </div>
        ))}
      </div>

      {/* Show more */}
      {products.length > 6 && (
        <div className="mt-6 text-left">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
          >
            {showAll ? "Show Less" : "Show All Products"}
          </button>
        </div>
      )}

      {/* Quick preview modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl max-w-md shadow-xl relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-black text-xl"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-2">
              {selectedProduct.name}
            </h2>
            <p className="mb-4">${selectedProduct.price}</p>
            <p className="text-sm text-gray-600 mb-4">
              Negotiable: {selectedProduct.negotiable ? "Yes" : "No"}
            </p>
            <button
              onClick={() => goToProductPage(selectedProduct)}
              className="bg-black text-white px-4 py-2 rounded"
            >
              View Full Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
