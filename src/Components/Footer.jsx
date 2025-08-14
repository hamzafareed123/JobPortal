import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Cookies</a></li>
            <li><a href="#" className="hover:text-white">Help</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>123 Street, New York, USA</li>
            <li>+012 345 67890</li>
            <li>info@example.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">
            Dolor amet sit justo amet elitr clita ipsum elitr est.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 flex-1 rounded-l bg-gray-800 text-white outline-none"
            />
            <button className="bg-[#00b074] px-4 rounded-r hover:bg-[#00945f]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © JobPortal, All Right Reserved. Designed By HamzaFareed
      </div>
    </footer>
  );
}

export default Footer;
