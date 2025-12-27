// bu3-frontend/app/_layoutsMain/dashboard/components/Sidebar.tsx
"use client";
import { useState } from "react";
import { FaCrown, FaShoppingCart, FaUser, FaChartLine, FaHome, FaBoxOpen } from "react-icons/fa"; // Icons example
import { IconType } from "react-icons";

interface SidebarProps {
  onNavigate: (page: string) => void;
  activePage?: string;
}

interface SidebarItem {
  name: string;
  icon: IconType;
  description: string;
}

export default function Sidebar({ onNavigate, activePage }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [messages, setMessages] = useState([
    "Welcome back!",
    "New update available",
    "Check your analytics",
  ]);

  const items: SidebarItem[] = [
    { name: "Browse", icon: FaHome, description: "Explore products" },
    { name: "Cart", icon: FaShoppingCart, description: "Your orders" },
    { name: "AI analytics", icon: FaChartLine, description: "Insights" },
    { name: "Profile", icon: FaUser, description: "Your account" },
    { name: "Stock", icon: FaBoxOpen, description: "Inventory overview" },
    { name: "Merchant", icon: FaCrown, description: "Premium access" },
  ];

  const isActive = (name: string) => name === activePage;

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-[#171717] text-white flex flex-col h-screen transition-all duration-300 font-inter`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <FaCrown className="text-white" />
            {!collapsed && <h2 className="text-lg font-bold">buTrade</h2>}
          </div>
          {!collapsed && <span className="text-sm text-white/80">Dashboard</span>}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-300 hover:text-white"
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 p-2">
          {items.map((item) => (
            <li
              key={item.name}
              onClick={() => onNavigate(item.name)}
              className={`flex items-center p-2 rounded-[15px] cursor-pointer transition-colors duration-200
                ${isActive(item.name) ? "bg-[#3D38F5]" : "hover:bg-[#3D38F5]"}`}
            >
              <item.icon className="mr-3" />
              {!collapsed && (
                <div className="flex flex-col">
                  <span className="font-bold text-white">{item.name}</span>
                  <span className="text-sm text-white/80">{item.description}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Messages */}
      <div className="p-4 mt-auto">
        <div className="bg-gray-900 rounded-lg p-3 text-white text-sm h-24 overflow-y-auto">
          {messages.map((msg, idx) => (
            <div key={idx} className="mb-1">
              {msg}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
