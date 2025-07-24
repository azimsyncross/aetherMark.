import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-200 pt-20 pb-10 overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Section with Logo and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 pb-8 border-b border-gray-800">
          <Link
            to="/"
            className="flex items-center space-x-3 group mb-6 lg:mb-0"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-3xl font-bold text-white group-hover:text-teal-400 transition-colors">
              AetherMark<span className="text-teal-400">.</span>
            </span>
          </Link>

          <div className="w-full lg:w-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-2 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">About Us</h4>
            <p className="text-gray-400 mb-6 leading-relaxed">
              AetherMark Apps is dedicated to empowering your application with
              innovative strategies in social media advertising, SEO, and ASO.
              We enhance visibility, drive growth, and ensure your success in
              the competitive digital landscape.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { text: "Home", path: "/" },
                { text: "About Us", path: "/about" },
                { text: "Services", path: "/services" },
                { text: "Terms of Service", path: "/terms" },
                { text: "Privacy Policy", path: "/privacy" },
                { text: "Refund Policy", path: "/refund" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowUpRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Search Engine Optimization", hash: "#seo" },
                { label: "Advertising Campaigns", hash: "#ads" },
                { label: "Social Media Excellence", hash: "#social" },
                {
                  label: "Analytics & Business Intelligence",
                  hash: "#analytics",
                },
                { label: "Email Marketing Automation", hash: "#email" },
                { label: "Web Development & Design", hash: "#webdev" },
              ].map(({ label, hash }, index) => (
                <li key={index}>
                  <HashLink
                    smooth
                    to={`/services${hash}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowUpRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-1" />
                <span className="text-gray-400">
                  Pine Place 32,
                  <br />
                  Farmington, Minnesota 55024,
                  <br />
                  United States of America
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <a
                  href="tel:+16402720406"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +1 640-272-0406
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <a
                  href="mailto:campbellcamilanqb413@hotmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  campbellcamilanqb413@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
