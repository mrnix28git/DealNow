import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer Top Section */}
      <footer className="bg-[#282C35] text-[#CDCDCD] text-sm px-24  py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Who We Are */}
          <div>
            <h3 className="text-2xl text-[#ADB0B6] mb-4">Who We Are</h3>
            <p>
              GetListedUAE.com is a free online business listing site in the UAE.
              You can list your business or service for free on GetListedUAE. The
              website helps to find companies, service providers, products, and
              all types of business in the UAE.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-2xl text-[#ADB0B6] mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#blog" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#tags" className="hover:text-white">
                  Tags
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white">
                  Locations
                </a>
              </li>
              <li>
                <a href="#listings" className="hover:text-white">
                  Latest Listings
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-2xl text-[#ADB0B6] mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#advertise" className="hover:text-white">
                  Advertise With Us
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-2xl text-[#ADB0B6] mb-4">Contact Us</h3>
            <div className="flex items-center space-x-3">
              <span className="bg-teal-500 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 12.75v6a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 18.75v-6M6.75 12L12 16.5m0 0L17.25 12M12 16.5V3"
                  />
                </svg>
              </span>
              <a href="mailto:info@getlisteduae.com" className="hover:text-white">
                info@getlisteduae.com
              </a>
            </div>
          </div>
        </div>
        </footer>

      {/* Footer Bottom Section */}
      <div className=" py-6 border-t-[#3C3F46] border-t-2 bg-[#282C35] text-[#979797] text-xs ">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <p className="">
            Abu Dhabi | Ajman | Al Ain | Dubai | Fujairah | Ras Al Khaimah | Sharjah | Umm Al Quwain
          </p>
          <p className="">
            © 2024 GetListedUAE.com. All Rights Reserved.
          </p>
        </div>
      </div>
     
    </>
  );
};

export default Footer;
