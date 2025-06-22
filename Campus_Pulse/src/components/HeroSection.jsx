import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Empowering Campus Events with{" "}
            <span className="text-blue-600">CampusPulse</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            One place for event creation, updates & registrations across all clubs.
            Say goodbye to messy WhatsApp forwards.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
            <a
              href="/register"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-100 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="md:w-1/2 relative">
          <img
            src="/hero-1.png"
            alt="Coding Illustration"
            className="w-full max-w-md mx-auto animate-fade-in-up"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
