// bu3-frontend/app/_layoutsMain/dashboard/Dashboard.tsx
"use client";
import { useState } from "react";
import Sidebar from "./components/sidebar";
import Browse from "./pages/Browse";
import Cart from "./pages/cart";
import Chatpage from "./pages/chatpage";
import Profile from "./pages/profile";
import Stock from "./pages/stock";
import Deafult from "./pages/Default";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("Default");

  const renderPage = () => {
    switch (activePage) {
      case "Browse":
        return <Browse />;
      case "Cart":
        return <Cart />;
      case "AI analytics":
        return <Chatpage />;
      case "Profile":
        return <Profile />;
      case "Stock":
        return <Stock />;
      default:
        return <Deafult />;
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar onNavigate={setActivePage} />
      <main className="flex-1 overflow-y-auto text-white">
        {renderPage()}
      </main>
    </div>
  );
}