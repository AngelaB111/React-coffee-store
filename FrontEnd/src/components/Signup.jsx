import { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("http://localhost:5000/auth/signup", form);
      alert("Account created ☕ You can now log in");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f3ef]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center text-[#6f4e37] mb-6">
          Create Account
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#6f4e37] text-white py-3 rounded-lg hover:bg-[#5b3f2c] transition"
        >
          Sign Up
        </button>
        <p className="text-gray-500 ">
          Already Have An Account?{" "}
          <Link to="/" className="text-red-600">
            {" "}
            Login{" "}
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
