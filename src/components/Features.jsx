
const Features = () => {
  const features = [
    {
      number: "01",
      title: "Detailed Link Analytics",
      description:
        "Track clicks, locations, devices, browsers, and other important data to understand how your links are performing.",
    },
    {
      number: "02",
      title: "Fully Branded Domains",
      description:
        "Create professional short links using your own branded domain and give your business a stronger online identity.",
    },
    {
      number: "03",
      title: "Bulk Short URLs",
      description:
        "Shorten multiple URLs quickly and efficiently with our bulk URL shortening tools.",
    },
    {
      number: "04",
      title: "Link Management",
      description:
        "Manage, organize, edit, and monitor all your shortened links from one convenient place.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-white px-6 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 font-semibold uppercase tracking-wider text-[#26A9CE]">
            Powerful Features
          </p>

          <h2 className="text-3xl font-bold text-[#0A3D62] md:text-4xl lg:text-5xl">
            Everything You Need to Manage Your Links
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-500">
            Create, manage, track, and optimize your short URLs with powerful
            tools designed for individuals and businesses.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.number}
              className="group rounded-2xl border border-gray-100 bg-[#F8FCFD] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#26A9CE]/30 hover:shadow-xl"
            >

              {/* Number */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#26A9CE]/10 font-bold text-[#0A3D62] transition group-hover:bg-[#26A9CE] group-hover:text-white">
                {feature.number}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-[#0A3D62]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-gray-500">
                {feature.description}
              </p>

              {/* Learn More */}
              <a
                href="#"
                className="mt-6 inline-block font-semibold text-[#26A9CE] transition hover:text-[#0A3D62]"
              >
                Learn More →
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;

