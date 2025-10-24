// // src/pages/products/[id].tsx
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import Products from "../components/products";
// import { Product } from "../assets/products"; // adjust path
// import { getAvailableProducts } from "../../services/productService";

// export default function ProductPage() {
//   const router = useRouter();
//   const { id } = router.query;

//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     if (id) {
//       getAvailableProducts().then((items) => {
//         const found = items.find((p) => p.id.toString() === id.toString());
//         setProduct(found || null);
//       });
//     }
//   }, [id]);

//   if (!product) return <p className="text-white px-6">Loading...</p>;

//   return <Products product={product} onBack={() => router.back()} />;
// }
