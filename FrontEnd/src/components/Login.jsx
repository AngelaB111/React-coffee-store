import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "https://coffee-store-backend-wmt5.onrender.com/auth/login",
        form
      );
      
      // http://localhost:5000
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f3ef]">
    
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center text-[#6f4e37] mb-6">
          Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

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
          Login
        </button>

        <p className="text-gray-500 mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/Signup" className="text-red-600">
            Signup
          </Link>
        </p>
      </form>
    </div>
  
  );
}

export default Login;
