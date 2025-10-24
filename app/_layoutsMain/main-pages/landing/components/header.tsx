type HeaderProps = {
  onNavigate: (section: "about" | "faq" | "access" | "contact") => void;
};

function LoginButton() {
  return (
    <button className="px-6 py-2 rounded-lg font-semibold bg-purple-500 hover:bg-purple-600 text-black shadow-lg shadow-purple-500/50 transition">
      Login
    </button>
  );
}

function SignUpButton() {
  return (
    <button className="px-6 py-2 rounded-lg font-semibold bg-teal-500 hover:bg-teal-600 text-black shadow-lg shadow-teal-500/50 transition">
      Sign Up
    </button>
  );
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <section className="grid grid-cols-3 h-screen text-white gap-4 p-6 bg-black">
      {/* Left: Welcome + Context + Auth Buttons */}
      <div className="relative flex flex-col justify-center items-start p-10 rounded-2xl border-2 border-purple-500 shadow-md shadow-purple-500/50 bg-black">
        <h1 className="text-6xl font-extrabold text-purple-400 drop-shadow-md">
          Welcome
        </h1>
        <p className="mt-4 text-gray-300 max-w-md text-lg drop-shadow-md">
         Buy, sell and window shop
         all with Roki.dev
        </p>

        {/* Auth Buttons */}
        <div className="mt-6 flex gap-4">
          <LoginButton />
          <SignUpButton />
        </div>
      </div>

      {/* Center: 3D Model Placeholder */}
      <div className="flex flex-col items-center justify-center bg-gray-900/80 gap-6 rounded-2xl p-6">
        <span className="text-gray-500 text-xl">[3D Model Here]</span>
      </div>

      {/* Right: Navigation */}
      <div className="relative flex flex-col justify-center items-center gap-6 p-6 rounded-2xl border-2 border-purple-500 shadow-md shadow-purple-500/50 bg-black">
        <button
          className="px-6 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 shadow-lg shadow-purple-500/50 transition"
          onClick={() => onNavigate("about")}
        >
          About
        </button>
        <button
          className="px-6 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 shadow-lg shadow-purple-500/50 transition"
          onClick={() => onNavigate("faq")}
        >
          FAQ
        </button>
        <button
          className="px-6 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 shadow-lg shadow-purple-500/50 transition"
          onClick={() => onNavigate("access")}
        >
          Access AI Model
        </button>
        <button
          className="px-6 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 shadow-lg shadow-purple-500/50 transition"
          onClick={() => onNavigate("contact")}
        >
          Contact
        </button>
      </div>
    </section>
  );
}
