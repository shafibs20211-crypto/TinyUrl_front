
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="relative z-50 w-full"
      style={{
        background: "linear-gradient(90deg, #26A9CE, #0A3D62)",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center px-6 py-5">

        {/* Logo */}
        <a
          href="/"
          className="mr-12 text-3xl font-bold tracking-tight text-white"
        >
          TinyURL
        </a>

        {/* Left Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#plans"
            className="font-medium text-white transition hover:text-gray-200"
          >
            Plans
          </a>

          <a
            href="#features"
            className="font-medium text-white transition hover:text-gray-200"
          >
            Features
          </a>

          <a
            href="#domain"
            className="font-medium text-white transition hover:text-gray-200"
          >
            Domain
          </a>

          <a
            href="#resources"
            className="font-medium text-white transition hover:text-gray-200"
          >
            Resources
          </a>

        </nav>

        {/* Right Side */}
        <nav className="ml-auto hidden items-center gap-7 md:flex">

          <a
            href="/login"
            className="font-medium text-white transition hover:text-gray-200"
          >
            Login
          </a>

          <a
            href="/signup"
            className="rounded-full bg-white px-6 py-2.5 font-semibold text-[#0A3D62] transition hover:bg-gray-100"
          >
            Sign Up
          </a>

        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto rounded-lg bg-white/15 px-4 py-2 text-xl text-white hover:bg-white/25 md:hidden"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/20 bg-[#0A3D62] px-6 py-6 md:hidden">

          <nav className="flex flex-col gap-5">

            <a
              href="#plans"
              className="text-white"
              onClick={() => setMenuOpen(false)}
            >
              Plans
            </a>

            <a
              href="#features"
              className="text-white"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>

            <a
              href="#domain"
              className="text-white"
              onClick={() => setMenuOpen(false)}
            >
              Domain
            </a>

            <a
              href="#resources"
              className="text-white"
              onClick={() => setMenuOpen(false)}
            >
              Resources
            </a>

            <a
              href="/login"
              className="text-white"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </a>

            <a
              href="/signup"
              className="w-fit rounded-full bg-white px-6 py-2.5 font-semibold text-[#0A3D62]"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </a>

          </nav>

        </div>
      )}
    </header>
  );
};

export default Header;

