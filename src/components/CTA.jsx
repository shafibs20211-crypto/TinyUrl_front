
const CTA = () => {
  return (
    <section className="px-6 py-20">
      <div
        className="relative mx-auto max-w-[1400px] overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16"
        style={{
          background: "linear-gradient(90deg, #26A9CE, #0A3D62)",
        }}
      >

        {/* Decorative Circle */}
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10"></div>

        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-white/10"></div>

        {/* Content */}
        <div className="relative">

          <p className="mb-3 font-semibold uppercase tracking-wider text-white/80">
            Get Started Today
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ready to Make Your Links Shorter?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Create short, powerful, and shareable links in seconds.
            Start shortening your URLs today.
          </p>

          {/* Button */}
          <a
            href="#shorten"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-[#0A3D62] shadow-lg transition hover:bg-gray-100 hover:shadow-xl"
          >
            Shorten Your URL
          </a>

        </div>

      </div>
    </section>
  );
};

export default CTA;

