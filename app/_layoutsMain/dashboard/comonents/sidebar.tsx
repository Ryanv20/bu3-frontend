"use client";

import { useState } from "react";

type SidebarProps = {
  onSelect: (key: string) => void;
};

const navItems = [
  { name: "Browse", key: "browse" },
  { name: "Cart", key: "cart" },
  { name: "Chatbot", key: "chatbot" },
  { name: "Profile", key: "profile" },
  { name: "Stock", key: "stock" },
];

export default function Sidebar({ onSelect }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-gray-800 text-white transition-all duration-300 
      ${collapsed ? "w-16" : "w-64"} flex flex-col h-screen fixed`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        {!collapsed && <h2 className="text-lg font-bold">Dashboard</h2>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-300 hover:text-white"
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      {/* Navigation items */}
      <ul className="space-y-2 flex-1 overflow-y-auto">
        {navItems.map((item) => (
          <li key={item.key}>
            <button
              onClick={() => onSelect(item.key)}
              className="w-full text-left px-3 py-2 rounded hover:bg-gray-700"
            >
              {!collapsed ? item.name : item.name.charAt(0)}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
