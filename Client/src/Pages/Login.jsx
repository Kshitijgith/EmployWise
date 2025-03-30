import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post("/api/login", form);
      localStorage.setItem("token", data.token);
      navigate("/users");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-white to-purple-600">
      <form
        className="sm:h-70p sm:w-80p bg-white rounded-2xl h-50p w-20p flex flex-col items-center "
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl flex justify-center items-center font-extrabold text-gray-700  text-center h-20p w-100p">Welcome Back!</h2>
        {error && <p className="text-red-500  text-sm text-center">{error}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-90p h-10p sm:h-5p  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <div className="h-8"></div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-90p h-10p sm:h-5p border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <div className="h-8"></div>
        <button
          type="submit"
          className="w-90p h-10p sm:h-5p bg-blue-600 hover:bg-blue-700 text-white font-semibold  rounded-lg transition-all duration-200"
        >
          Login
        </button>
        <div className=" text-sm text-center">
          <a href="#" className="text-blue-500 hover:underline text-xl">
            Forgot Password?
          </a>
        </div>
        <p className="  text-gray-600 text-center text-xl">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
