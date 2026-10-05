
const Hero = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E8F9FD 0%, #D9F3FA 100%)",
      }}
    >
      {/* Decorative Background Circles */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#26A9CE]/20 blur-3xl"></div>

      <div className="absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-[#0A3D62]/10 blur-3xl"></div>

      <div className="absolute bottom-[-200px] left-1/3 h-[400px] w-[400px] rounded-full bg-[#26A9CE]/10 blur-3xl"></div>

      {/* Main Content */}
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 md:grid-cols-2 lg:py-28">

        {/* Left Side */}
        <div>

          <p className="mb-4 font-semibold uppercase tracking-wider text-[#26A9CE]">
            TinyURL
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#0A3D62] md:text-5xl lg:text-6xl">
            URL Shortener, Branded Short Links & Analytics
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Welcome to the original link shortener — simplifying the Internet
            through the power of the URL since 2002.
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-gray-500">
            You can use branded domains for fully custom links, track link
            analytics, and enjoy other powerful features with our paid plans.
          </p>

          {/* Hero Button */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#shorten"
              className="rounded-full bg-[#0A3D62] px-7 py-3.5 font-semibold text-white transition hover:bg-[#072D48]"
            >
              Shorten Your URL
            </a>

            <a
              href="#features"
              className="rounded-full border-2 border-[#0A3D62] px-7 py-3.5 font-semibold text-[#0A3D62] transition hover:bg-[#0A3D62] hover:text-white"
            >
              Explore Features
            </a>

          </div>

        </div>

        {/* Right Side - URL Shortener Card */}
        <div
          id="shorten"
          className="relative mx-auto w-full max-w-xl"
        >

          <div className="rounded-3xl bg-white p-6 shadow-2xl md:p-8">

            <div className="mb-6">

              <h2 className="text-2xl font-bold text-[#0A3D62]">
                Shorten your URL
              </h2>

              <p className="mt-2 text-gray-500">
                Enter your long URL below and make it short.
              </p>

            </div>

            {/* URL Input */}
            <label className="mb-2 block font-medium text-gray-700">
              Enter your long URL
            </label>

            <input
              type="url"
              placeholder="https://example.com/your-long-url"
              className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none transition focus:border-[#26A9CE] focus:ring-2 focus:ring-[#26A9CE]/20"
            />

            {/* Button */}
            <button
              type="button"
              className="mt-4 w-full rounded-xl bg-[#26A9CE] px-6 py-4 font-semibold text-white transition hover:bg-[#0A3D62]"
            >
              Shorten URL
            </button>

            <p className="mt-4 text-center text-sm text-gray-400">
              Free URL shortening. No credit card required.
            </p>

          </div>

          {/* Small Decorative Card */}
          <div className="absolute -bottom-5 -left-5 -z-0 hidden h-24 w-24 rounded-2xl bg-[#26A9CE]/30 md:block"></div>

          <div className="absolute -right-5 -top-5 -z-0 hidden h-20 w-20 rounded-full bg-[#0A3D62]/15 md:block"></div>

        </div>

      </div>
    </section>
  );
};

export default Hero;

