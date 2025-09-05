export default function About() {
  return (
    <section className="h-screen flex items-center justify-center bg-black">
      <div className="relative p-8 rounded-2xl bg-gray-900/90 shadow-lg w-[600px] max-w-[90%] text-center 
                      border border-gray-700 animate-pulse-glow">
        {/* Glow Effect */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
                        blur-xl opacity-30 animate-pulse" />

        <h2 className="relative text-3xl font-bold text-purple-300 mb-4 z-10">About Us</h2>
        <p className="relative text-gray-300 z-10">

           A modern, tech-driven platform. Build your projects with seamless
          interaction and futuristic design.
          join us Roki.dev
          I was too lazy to send messages and wait for guys to reply before I got stuff,
          so I did what any good person would do.

        </p>
      </div>
    </section>
  );
}
