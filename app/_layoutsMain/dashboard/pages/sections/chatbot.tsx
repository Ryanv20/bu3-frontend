function Chatbot() {
  return (
    <section className="flex flex-col items-center justify-start py-8">
      {/* Header like Canva */}
      <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
        Welcome Vicky
      </h1>


     <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 justify-center mt-6">
           {["Pending Product", "Your Chart", "Your Catalogue"].map((item, i) => (
    <div key={i} className="relative group">
      {/* Glow layer */}
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 
                      opacity-0 blur-lg transition duration-300 group-hover:opacity-70" />

      {/* Main button */}
      {/* <div
        className="relative flex flex-col items-center justify-center w-32 h-10 rounded-full 
                   bg-gray-800 text-gray-300 hover:bg-gray-700 transition cursor-pointer"
      >
        <span className="text-sm">{item}</span>
      </div> */}
    </div>
       ))}
      </div>

      {/* Search bar */}
      <div className="flex items-center w-full max-w-2xl bg-gray-900/80 border border-gray-700 rounded-full shadow-md overflow-hidden mb-10">
        <input
          type="text"
          placeholder="Ask me anything..."
          className="flex-1 px-6 py-3 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none"
        />
        <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold hover:opacity-90 transition">
          →
        </button>
      </div>

      {/* Icon buttons (categories) */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 justify-center">
  {["Fanta", "Meshi", "Water", "Jollof", "Calc"].map((item, i) => (
    <div key={i} className="relative group">
      {/* Glow layer */}
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 
                      opacity-0 blur-lg transition duration-300 group-hover:opacity-70" />
      
      {/* Main button */}
      <div
        className="relative flex flex-col items-center justify-center w-20 h-10 rounded-full 
                   bg-gray-800 text-gray-300 hover:bg-gray-700 transition cursor-pointer"
      >
        <span className="text-sm">{item}</span>
      </div>
    </div>
    ))}
    </div>
    </section>
  );
}

export default Chatbot;


// function Chatbot(){
//   return (
//     <>
//     <div>
//     <div>Welcome, Vicky</div>
//     <div className="flex">
//     <div className="bg-white border ">Pending Product</div>
//     <div>Your Cart</div>
//     <div>catalogue</div>
//     </div>

//         <input type="text" placeholder="Ask me anything..."
//             className="w-600px h-40px sm:flex-1 px-4 py-3 rounded-lg bg-black/60 border border-gray-600 
//                        text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"/>    
    
//     </div>
//   </>
//   );
// }

// export default Chatbot;    