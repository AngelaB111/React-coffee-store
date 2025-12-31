import { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await axios.post("https://coffee-store-backend-wmt5.onrender.com/contact", form);

      setSuccess("Message sent ☕ We’ll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow"
    >
      <h2 className="text-2xl font-semibold text-[#6f4e37] mb-4">Contact Us</h2>

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      {success && <p className="text-green-600 text-sm mb-3">{success}</p>}

      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-3 mb-4 border rounded"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={form.email}
        onChange={handleChange}
        className="w-full p-3 mb-4 border rounded"
        required
      />

      <textarea
        name="message"
        placeholder="Your message"
        value={form.message}
        onChange={handleChange}
        className="w-full p-3 mb-4 border rounded"
        rows="4"
        required
      />

      <button
        type="submit"
        className="w-full bg-[#6f4e37] text-white py-3 rounded hover:bg-[#5b3f2c]"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
