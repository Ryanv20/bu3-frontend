"use client";
import { useState } from "react";
import { Bell, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white shadow-md px-6 py-3 flex items-center justify-between">
  

      {/* Middle: Search / Input */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:border-purple-500 text-sm shadow-sm transition-all duration-300"
        />
      </div>

      {/* Right side: Notification + Profile */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <button className="relative p-2 rounded-full bg-gray-900 hover:bg-gray-800 transition-all duration-300">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
        </button>

        {/* Profile w/ dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 p-2 rounded-xl bg-gray-900 hover:bg-gray-800 transition-all duration-300"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="h-8 w-8 rounded-full border border-purple-500"
            />
            <ChevronDown className="h-4 w-4" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-xl shadow-lg py-2 animate-fade-in">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-800 transition-all"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-800 transition-all"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-red-400 hover:bg-gray-800 transition-all"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
