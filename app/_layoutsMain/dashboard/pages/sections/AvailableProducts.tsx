import React, { useEffect, useState } from "react";
import { getAvailableProducts } from "../../services/productService";
import ProductPage from "../subpages/productpage"; // adjust path as needed

export default function AvailableProducts() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [clickTimeout, setClickTimeout] = useState(null);
  const [currentPage, setCurrentPage] = useState("browse");

  useEffect(() => {
    getAvailableProducts().then(setProducts);
  }, []);

  const handleClick = (product) => {
    if (clickTimeout) clearTimeout(clickTimeout);

    const timeout = setTimeout(() => {
      setSelectedProduct(product); // open modal
    }, 250);

    setClickTimeout(timeout);
  };

  const goToProductPage = (product) => {
    setSelectedProduct(product);
    setCurrentPage("product");
  };

  if (currentPage === "product" && selectedProduct) {
    return <ProductPage product={selectedProduct} onBack={() => setCurrentPage("browse")} />;
  }

  return (
    <section className="text-white px-4">
      <h2 className="text-2xl text-left mb-10 pl-2">Available Products</h2>
      <div
        className="grid gap-6 max-w-7xl mx-auto"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            className="relative rounded-xl shadow-lg border border-white/20 bg-black p-5 flex flex-col justify-between text-center
                       transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:scale-[1.02]"
            onClick={() => handleClick(p)}
          >
            <div className="absolute top-3 right-3 text-xs border border-white px-2 py-0.5 rounded-full">
              {p.trend === "up" ? "▲ Rising" : "▼ Falling"}
            </div>
            <div className="w-full h-32 mb-4 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 text-sm">
              Product Image
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{p.name}</h3>
              <p className="text-sm text-gray-300 mb-3">${p.price}</p>
            </div>
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
            <button
              onClick={() => goToProductPage(p)}
              className="px-3 py-1 rounded border border-white text-white text-sm 
                         hover:bg-white hover:text-black transition shadow-sm"
            >
              View
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && currentPage === "browse" && (
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
