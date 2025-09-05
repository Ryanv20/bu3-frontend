"use client";
import React from "react";

// Sidebar item type
type SidebarItem = {
  label: string;
  key: string;
};

const sidebarItems: SidebarItem[] = [
  { label: "Home", key: "home" },
  { label: "Projects", key: "projects" },
  { label: "Teams", key: "teams" },
  { label: "Settings", key: "settings" },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-black text-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-6 flex flex-col gap-4">
        {sidebarItems.map((item) => (
          <button
            key={item.key}
            className="w-full px-4 py-3 rounded-lg border-2 border-purple-500 bg-black hover:shadow-lg hover:shadow-purple-500/50 transition text-white text-left"
          >
            {item.label}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="p-8 border-2 border-purple-500 rounded-2xl w-full max-w-4xl bg-black shadow-md shadow-purple-500/50">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <p className="text-gray-300">
              Welcome to your dashboard. This is the starting point for all your
              projects and interactions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
