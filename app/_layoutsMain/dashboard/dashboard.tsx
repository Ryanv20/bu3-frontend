"use client";

import { useState } from "react";
import Sidebar from "./comonents/sidebar";

// dashboard pages
import Browse from "./pages/Browse";
import Cart from "./pages/cart";
import Chatbot from "./pages/chatbot";
import Profile from "./pages/profile";
import Stock from "./pages/stock";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("browse");

  const renderContent = () => {
    switch (activePage) {
      case "browse":
        return <Browse />;
      case "cart":
        return <Cart />;
      case "chatbot":
        return <Chatbot />;
      case "profile":
        return <Profile />;
      case "stock":
        return <Stock />;
      default:
        return <Browse />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar onSelect={setActivePage} />
      <main className="flex-1 ml-16 md:ml-64 p-6 bg-gray-100 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}
