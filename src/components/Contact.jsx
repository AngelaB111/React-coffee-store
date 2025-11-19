import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import InfoBox from "./InfoBox";

function Contact() {
  return (
    <div className="bg-[#faf7f2] min-h-screen text-[#513525]">
      <Navbar />

      <div className="px-10 md:px-36 py-20">
        <h2 className="text-4xl font-semibold text-center mb-12">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <ContactForm />

          <InfoBox />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
