import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Highlights", path: "/program" },
    { name: "Locations", path: "/map" },
    { name: "Speakers", path: "/speakers" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 lg:py-5 flex items-center justify-between">

        {/* 🔥 LOGO + BRAND */}
        <div className="flex items-center gap-3">
          <img
            src="/logos/adutha-ilakku.png"
            alt="Adutha Ilakku"
            className="h-11 lg:h-12 object-contain"
          />
          <span className="font-semibold text-slate-900 text-lg hidden sm:block">
            Adutha Ilakku
          </span>
        </div>

        {/* 🔗 NAV LINKS */}
        <div className="flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative transition ${
                  isActive
                    ? "text-cyan-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}

                {/* ACTIVE UNDERLINE */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* 🚀 CTA BUTTON */}
        <div className="hidden md:block">
          <Link
            to="/program"
            className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-lg text-sm shadow transition"
          >
            Get Started
          </Link>
        </div>

      </div>
    </nav>
  );
}