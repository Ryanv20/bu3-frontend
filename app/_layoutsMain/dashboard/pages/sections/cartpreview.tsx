import React, { useState } from "react";
import Cart from "../cart";
export default function CartPreview() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Headphones", price: 200 },
    { id: 3, name: "Keyboard", price: 150 },
  ]);
  const [removedItem, setRemovedItem] = useState<any>(null);
  const [showCart, setShowCart] = useState(false);

  const handleRemove = (id: number) => {
    const item = cartItems.find((i) => i.id === id);
    setRemovedItem(item);
    setCartItems(cartItems.filter((i) => i.id !== id));
  };

  const handleUndo = () => {
    if (removedItem) {
      setCartItems([...cartItems, removedItem]);
      setRemovedItem(null);
    }
  };

  return (
    <section className="text-white px-4 mt-6">
      <h2 className="text-lg font-bold mb-4">Cart Preview</h2>

      {!showCart && (
        <button
          onClick={() => setShowCart(true)}
          className="bg-green-600 px-3 py-1 rounded-lg hover:bg-green-700 text-sm"
        >
          View Cart
        </button>
      )}

      {showCart && (
        <div className="space-y-3 mt-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-400">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-gray-700 pb-2"
              >
                <span>
                  {item.name} - ${item.price}
                </span>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            ))
          )}

          {removedItem && (
            <button
              onClick={handleUndo}
              className="bg-yellow-500 px-2 py-1 rounded-lg text-sm mt-2 hover:bg-yellow-600"
            >
              Undo Remove
            </button>
          )}
        </div>
      )}
    </section>
  );
}
