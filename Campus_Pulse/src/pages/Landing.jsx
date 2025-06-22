import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <div className="font-sans bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-indigo-600">CampusPulse</h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <button
              onClick={() => navigate("/login")}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
      >
        {/* Animated Background Blobs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-300 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply opacity-30 blur-2xl animate-pulse"></div>

        {/* Content */}
        <div className="z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-bold mb-4">Welcome to CampusPulse</h2>
            <p className="text-lg text-gray-700 mb-6">
              One-stop solution for your campus events. Hassle-free announcements,
              easy registration, and instant updates.
            </p>
            <button
              onClick={() => navigate("/register")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg"
            >
              Get Started
            </button>
          </div>

          {/* Illustration Image */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="/hero-illustration.png"
              alt="Students collaborating on laptops"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Club Announcements",
              "Smart Notifications",
              "Google Form Integration",
              "Role-based Login",
              "Event Filtering",
              "Modern UI"
            ].map((title, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                <p className="text-gray-600 text-sm">
                  Seamlessly manage and explore college events.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">About CampusPulse</h3>
          <p className="text-gray-700 text-lg">
            CampusPulse is designed to improve communication between student clubs and
            attendees. Reduce spam on WhatsApp groups and ensure event info reaches the
            right audience instantly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
          <p className="text-gray-700 text-lg">
            Have suggestions or feedback? Reach us at campuspulse@email.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} CampusPulse. All rights reserved.
      </footer>
    </div>
  );
}
