import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <footer className="bg-[#774b31] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
        <div className="mb-4 md:mb-0 text-lg font-semibold">Coffee O'clock</div>

        <div className="flex gap-4 mb-4 md:mb-0">
          <a
            href="#f"
            className="hover:text-[#f3c585] transition-colors duration-300"
          >
            <InstagramIcon />
          </a>
          <a
            href="#f"
            className="hover:text-[#f3c585] transition-colors duration-300"
          >
            <TwitterIcon />
          </a>
          <a
            href="#f"
            className="hover:text-[#f3c585] transition-colors duration-300"
          >
            <FacebookIcon />
          </a>
          <a
            href="#f"
            className="hover:text-[#f3c585] transition-colors duration-300"
          >
            <LinkedInIcon />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-200">
          &copy; 2025 Lebanese International University. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
