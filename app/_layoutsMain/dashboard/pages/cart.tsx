"use client";

import { useState, useEffect } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product Alpha",
      price: 29.99,
      quantity: 1,
      image: "/placeholder1.png",
    },
    {
      id: 2,
      name: "Product Beta",
      price: 49.99,
      quantity: 2,
      image: "/placeholder2.png",
    },
  ]);

  const [lastRemoved, setLastRemoved] = useState<any>(null);

  const removeItem = (id: number) => {
    const itemToRemove = cartItems.find((item) => item.id === id);
    if (itemToRemove) {
      setLastRemoved(itemToRemove);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const undoRemove = () => {
    if (lastRemoved) {
      setCartItems((prev) => [...prev, lastRemoved]);
      setLastRemoved(null);
    }
  };

  useEffect(() => {
    if (lastRemoved) {
      const timer = setTimeout(() => setLastRemoved(null), 5000); // auto-clear after 5s
      return () => clearTimeout(timer);
    }
  }, [lastRemoved]);

  const updateQuantity = (id: number, qty: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 border-b border-white/20">
        <h1 className="text-2xl font-bold">Your Cart</h1>
      </header>

      {/* Cart Items */}
      <main className="flex-1 px-6 py-8">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-400">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border border-white/20 rounded-lg p-4 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded bg-gray-800 object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-400">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 border border-white/20 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 border border-white/20 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-400 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Undo Snackbar */}
      {lastRemoved && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-800 border border-white/20 px-6 py-3 rounded-lg shadow-lg flex items-center gap-4">
          <span className="text-sm">
            Removed <span className="font-semibold">{lastRemoved.name}</span>
          </span>
          <button
            onClick={undoRemove}
            className="text-green-400 hover:underline font-medium"
          >
            Undo
          </button>
        </div>
      )}

      {/* Summary */}
      {cartItems.length > 0 && (
        <section className="px-6 py-4 border-t border-white/20">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="mt-4 w-full bg-green-500 text-black py-2 rounded-lg font-semibold hover:bg-green-600 transition">
            Proceed to Checkout
          </button>
        </section>
      )}

      {/* Footer placeholder */}
      <footer className="mt-auto">{/* Your footer goes here */}</footer>
    </div>
  );
}

export default Cart;
