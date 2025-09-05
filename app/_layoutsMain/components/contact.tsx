import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-4xl font-bold mb-10 text-purple-400">Contact Us</h1>

      {/* Contact Box */}
      <div className="relative w-full max-w-lg p-8 rounded-2xl bg-gray-900/90 shadow-lg border border-gray-700">
        {/* Glow effect */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 blur-xl opacity-30 animate-pulse" />

        <div className="relative z-10 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-black/60 border border-gray-600 text-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-black/60 border border-gray-600 text-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              placeholder="Write your message..."
              rows={4}
              className="w-full p-3 rounded-lg bg-black/60 border border-gray-600 text-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>

          <button
            type="button"
            className="w-full py-3 rounded-lg font-semibold transition duration-200 
                       bg-purple-500 hover:bg-purple-600 text-black shadow-md"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
