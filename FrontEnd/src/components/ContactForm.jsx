import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-xl">
      <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#774b31]"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#774b31]"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          name="message"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#774b31]"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#774b31] text-white py-3 rounded-md font-semibold hover:bg-[#633628] transition"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
