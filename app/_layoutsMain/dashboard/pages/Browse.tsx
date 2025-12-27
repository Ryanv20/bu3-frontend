// src/pages/Browse.jsx
import React, { useEffect, useState } from "react";
import { availableMemory } from "process";
import AvailableProducts from "./sections/AvailableProducts"
import Navbar from "./components/Navbar";
import CartPreview from "./sections/cartpreview";
export default function Browse() {
  const [products, setProducts] = useState([]);
  return (
    <div className="bg-black">
    <Navbar />
    <AvailableProducts />
    <CartPreview />
    </div>
  );
}
