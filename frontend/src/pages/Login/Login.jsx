import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { login as loginService } from "../../services/authService";
import useAuth from "../../hooks/useAuth";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await loginService(form);

      login(res.user, res.token);

      toast.success("Welcome back!");

      navigate("/");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-green-700">
          Agri Shop
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Sign in to continue
        </p>

        <form
          className="space-y-5"
          onSubmit={handleSubmit}
        >

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border rounded-xl p-3"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border rounded-xl p-3"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 font-semibold"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;