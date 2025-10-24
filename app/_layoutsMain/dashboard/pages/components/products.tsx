// import React from "react";
// import { Product } from "../assets/products"; // adjust path

// interface ProductsProps {
//   product: Product | null;   // nullable so you can handle "not selected"
//   onBack: () => void;
// }

// export default function Products({ product, onBack }: ProductsProps) {
//   if (!product) return <p>No product selected.</p>;

//   return (
//     <section className="text-white px-6 py-10">
//       <button
//         onClick={onBack}
//         className="mb-6 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
//       >
//         ← Back
//       </button>

//       <div className="max-w-4xl mx-auto bg-black border border-white/20 p-6 rounded-xl shadow-lg">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Product Image */}
//           <div className="w-full md:w-1/2 h-64 bg-gray-800 flex items-center justify-center rounded-lg">
//             <span className="text-gray-400">Product Image</span>
//           </div>

//           {/* Product Details */}
//           <div className="flex-1">
//             <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//             <p className="text-xl text-gray-300 mb-4">${product.price}</p>
//             <p className="text-sm text-gray-400 mb-6">
//               Negotiable: {product.negotiable ? "Yes" : "No"}
//             </p>

//             <button className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
