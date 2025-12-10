import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email, password
      });

      if (res.data.token) {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg w-96 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>

        {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

        <input className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          type="email" placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)} />

        <input className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          type="password" placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)} />

        <button className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
