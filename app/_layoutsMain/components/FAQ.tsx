import React from "react";
import { User, Bot } from "lucide-react"; // simple icons for user + AI

const FAQ: React.FC = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h2 className="text-4xl font-bold mb-8 text-purple-400">FAQ</h2>

      {/* FAQ Boxes */}
      <div className="grid gap-6 max-w-3xl w-full">
        {/* Q1 */}
        <div className="relative p-6 rounded-2xl bg-gray-900/90 shadow-lg border border-gray-700 animate-pulse-glow">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 blur-xl opacity-30 animate-pulse" />
          <div className="relative z-10 flex items-start gap-4">
            <User className="w-8 h-8 text-purple-400" />
            <p className="text-gray-300">"How does the AI model learn new things?"</p>
          </div>
          <div className="mt-4 relative z-10 flex items-start gap-4">
            <Bot className="w-8 h-8 text-blue-400" />
            <p className="text-gray-200">
              "The iModel continuously learns by integrating real-time data streams 
              with its core training pipelines."
            </p>
          </div>
        </div>

        {/* Q2 */}
        <div className="relative p-6 rounded-2xl bg-gray-900/90 shadow-lg border border-gray-700 animate-pulse-glow">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-500 via-teal-400 to-blue-500 blur-xl opacity-30 animate-pulse" />
          <div className="relative z-10 flex items-start gap-4">
            <User className="w-8 h-8 text-green-400" />
            <p className="text-gray-300">"Is the AI scalable for enterprise usage?"</p>
          </div>
          <div className="mt-4 relative z-10 flex items-start gap-4">
            <Bot className="w-8 h-8 text-teal-300" />
            <p className="text-gray-200">
              "Yes, the framework was built for high scalability, 
              ensuring performance across distributed systems."
            </p>
          </div>
        </div>

        {/* Q3 */}
        <div className="relative p-6 rounded-2xl bg-gray-900/90 shadow-lg border border-gray-700 animate-pulse-glow">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-500 via-red-400 to-yellow-500 blur-xl opacity-30 animate-pulse" />
          <div className="relative z-10 flex items-start gap-4">
            <User className="w-8 h-8 text-pink-400" />
            <p className="text-gray-300">"Can I customize the AI outputs?"</p>
          </div>
          <div className="mt-4 relative z-10 flex items-start gap-4">
            <Bot className="w-8 h-8 text-yellow-300" />
            <p className="text-gray-200">
              "Absolutely, the system provides APIs and tools for fine-tuning 
              model responses to specific domains."
            </p>
          </div>
        </div>
      </div>

      {/* Input Box */}
      <div className="relative mt-10 p-6 rounded-2xl bg-gray-900/90 shadow-lg w-full max-w-3xl border border-gray-700 animate-pulse-glow">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 blur-xl opacity-30 animate-pulse" />
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Ask a new question..."
            className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-black/60 border border-gray-600 
                       text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            className="px-6 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-black font-semibold 
                       transition duration-200 shadow-md"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
