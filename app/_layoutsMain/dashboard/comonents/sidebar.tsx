// bu3-frontend/app/_layoutsMain/dashboard/components/Sidebar.tsx
"use client";

import { useState } from "react";

interface SidebarProps {
  onNavigate: (page: string) => void;
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const items = ["Browse", "Cart", "Chatpage", "Profile", "Stock"];

  return (
    <aside
      className={`${
        collapsed ? "w-16" : "w-64"
      } bg-black text-white flex flex-col h-screen transition-all duration-300`}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && <h2 className="text-lg font-bold">Sidebar</h2>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-300 hover:text-white"
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 p-2">
          {items.map((item) => (
            <li
              key={item}
              onClick={() => onNavigate(item)}
              className="cursor-pointer hover:bg-gray-800 rounded p-2"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
