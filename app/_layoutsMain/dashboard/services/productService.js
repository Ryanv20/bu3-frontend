// src/services/productService.js
const BASE_URL = "http://localhost:5000";

export async function getAvailableProducts() {
  const res = await fetch(`http://localhost:5000/products/available`);
  const json = await res.json();
  return json.data;
}
