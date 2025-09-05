import React from "react";

const AccessAIModel: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-black">
      <div className="relative p-10 rounded-2xl bg-gray-900/90 shadow-lg w-[650px] max-w-[95%] text-center 
                      border border-gray-700 animate-pulse-glow min-h-[500px] flex flex-col justify-between">
        {/* Glow Effect */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 
                        blur-xl opacity-30 animate-pulse" />

        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-green-300">Ask Ryan our Roki built-chatbot</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-4">
            The <span className="font-semibold">Accessa iModel</span> is our flagship
            AI-driven framework designed to streamline intelligent decision-making.
            It integrates advanced machine learning pipelines with real-time adaptability,
            ensuring organizations stay ahead in dynamic environments.
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Built for scalability and efficiency, the iModel enables seamless integration
            into enterprise systems while maintaining top-tier performance.
          </p>
        </div>

        {/* Input + Button */}
        <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-black/60 border border-gray-600 
                       text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-black font-semibold 
                       transition duration-200 shadow-md"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccessAIModel;
