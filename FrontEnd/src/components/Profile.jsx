import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
      setForm({ name: savedUser.name, email: savedUser.email });
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await axios.put(
        `https://coffee-store-backend-wmt5.onrender.com/auth/update/${user.id}`,
        form
      );

      const updatedUser = { ...user, name: form.name, email: form.email };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);

      setMessage("Profile updated successfully! ☕");
    } catch (err) {
      setError(err.response?.data?.message || "Update failed");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (confirmDelete) {
      try {
        await axios.delete(
          `https://coffee-store-backend-wmt5.onrender.com/auth/delete/${user.id}`
        );
        alert("Account deleted. We're sorry to see you go!");
        localStorage.removeItem("user");
        navigate("/");
      } catch (err) {
        setError("Could not delete account. Please try again.");
      }
    }
  };

  if (!user) return null;

  return (
    <div className="bg-[#f7f3ef]">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#f7f3ef] p-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md text-center">
          <h2 className="text-2xl font-semibold text-[#6f4e37] mb-6">
            Profile Settings
          </h2>

          {message && <p className="text-green-600 mb-4">{message}</p>}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleUpdate} className="text-left">
            <label className="block text-gray-600 text-sm mb-1">
              Full Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-[#6f4e37]"
              required
            />

            <label className="block text-gray-600 text-sm mb-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 mb-6 border rounded-lg focus:ring-2 focus:ring-[#6f4e37]"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#6f4e37] text-white py-3 rounded-lg hover:bg-[#5b3f2c] transition mb-4"
            >
              Update Profile
            </button>
          </form>

          <hr className="my-6 border-gray-200" />

          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate("/home")}
              className="text-gray-500 hover:underline"
            >
              Back to Store
            </button>

            <button
              onClick={handleDelete}
              className="w-full bg-red-100 text-red-600 py-3 rounded-lg hover:bg-red-200 transition font-medium"
            >
              Delete My Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
