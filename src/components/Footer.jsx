import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer text-[#774b31] ">
      <div className="socialMedia p-2 h-6  mb-3">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p className="mt-8"> &copy; 2025 Lebanese International University </p>
    </div>
  );
}

export default Footer;
