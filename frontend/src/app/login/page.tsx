"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) return alert("Login gagal");

    localStorage.setItem("user", JSON.stringify(data));
    window.location.href = "/dashboard";
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
         style={{ backgroundImage: "url('/bg-cafe.jpg')" }}>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* card */}
      <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-80">

        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-700">
          The Essence
        </h1>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded text-gray-700 placeholder-gray-400"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <div className="relative mb-4">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 border rounded text-gray-700 placeholder-gray-400"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-2 top-2 text-gray-500"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-green-800 text-white py-2 rounded-lg hover:bg-green-900"
        >
          Login
        </button>
      </div>
    </div>
  );
}