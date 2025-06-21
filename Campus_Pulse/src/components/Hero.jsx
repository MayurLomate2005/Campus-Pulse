function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-14 bg-gradient-to-br from-blue-50 to-indigo-100">
      
      {/* Left: Text Block */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
          Your Campus, Your Vibe
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
          Discover all club events, sessions, and opportunities — all in one place. Join the vibe today.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-md">
            🔥 Explore Events
          </button>
        </div>
      </div>

      {/* Right: Image Block */}
      <div className="max-w-sm sm:max-w-md mb-8 md:mb-0">
        <img
          src="https://cdn-icons-png.flaticon.com/512/12084/12084518.png"
          alt="Hero Illustration"
          className="w-full h-auto drop-shadow-xl"
        />
      </div>
    </section>
  );
}

export default Hero;
