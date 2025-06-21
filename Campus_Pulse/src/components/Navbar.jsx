import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold text-blue-600 tracking-tight">
          CampusPulse
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-gray-800 font-medium hover:text-blue-600 transition">
            Home
          </a>
          <a href="#" className="text-gray-800 font-medium hover:text-blue-600 transition">
            Events
          </a>
          <a href="#" className="text-gray-800 font-medium hover:text-blue-600 transition">
            Clubs
          </a>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:scale-105 transition">
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg
              className="w-7 h-7 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-white/90 shadow-sm backdrop-blur-sm">
          <a href="#" className="block text-gray-800 font-medium hover:text-blue-600 transition">Home</a>
          <a href="#" className="block text-gray-800 font-medium hover:text-blue-600 transition">Events</a>
          <a href="#" className="block text-gray-800 font-medium hover:text-blue-600 transition">Clubs</a>
          <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-full font-semibold shadow hover:scale-105 transition">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
