const Footer = () => {
  return (
    <footer
      id="resources"
      className="bg-[#071F33] px-6 py-16 text-white"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Footer Top */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">TinyURL</h2>

            <p className="mt-5 max-w-sm leading-7 text-gray-300">
              Create short, powerful, and easy-to-share links.
              Manage your URLs and grow your online presence.
            </p>

            <p className="mt-6 text-sm text-gray-400">
              © 2026 TinyURL. All rights reserved.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-bold">Features</h3>

            <ul className="mt-5 space-y-3 text-gray-300">
              <li>
                <a href="#" className="transition hover:text-white">
                  Link Editor
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Link Management
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Branded Links
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Short URL Tracking
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  QR Code Generator
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Short URL API
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold">Resources</h3>

            <ul className="mt-5 space-y-3 text-gray-300">
              <li>
                <a href="#" className="transition hover:text-white">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  For Developers
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Our Proven Process
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>

            <ul className="mt-5 space-y-3 text-gray-300">
              <li>
                <a href="#" className="transition hover:text-white">
                  Help Desk
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Contact Sales
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Contact Support
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Report Abuse
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-8">

          <div className="flex flex-col justify-between gap-5 text-sm text-gray-400 md:flex-row">

            <p>
              Shorten your links. Share them anywhere.
            </p>

            <div className="flex flex-wrap gap-5">
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>

              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-white">
                Cookie Policy
              </a>

              <a href="#" className="hover:text-white">
                Accessibility
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;