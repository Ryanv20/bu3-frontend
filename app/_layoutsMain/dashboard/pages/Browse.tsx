// src/pages/Browse.jsx
import React, { useEffect, useState } from "react";
import { availableMemory } from "process";
import AvailableProducts from "./sections/AvailableProducts"
import Chatbot from "./sections/chatbot";
export default function Browse() {
  const [products, setProducts] = useState([]);
  return (
    <div className="">
    <Chatbot />
    <AvailableProducts />
    </div>
  );
}
