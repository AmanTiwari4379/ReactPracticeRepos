import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User } from "lucide-react";
import { Link } from "react-router";

function SignUp() {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  useEffect(()=>{
    const savedName = localStorage.getItem('name',uname);
    const savedEmail = localStorage.getItem('email',email);
    const savedPassword = localStorage.getItem('password',password);

    if(savedName){
      setUname(savedName);
    }
    if(savedEmail){
      setEmail(savedEmail);
    }
    if(savedPassword){
      setPassword(savedPassword);
    }
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", uname);
    console.log("Email:", email);
    console.log("Password:", password);

    localStorage.setItem('name',uname);
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Sign up
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Name */}
          <div className="relative">
            <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="User Name"
              value={uname}
              onChange={(e) => setUname(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mt-1"
            />

            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the{" "}
              <span className="text-indigo-600 cursor-pointer">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-indigo-600 cursor-pointer">
                Privacy Policy
              </span>
            </label>
          </div>

          <button
            disabled={!agreed}
            className={`w-full h-11 rounded-lg text-white transition ${
              agreed
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Sign up
          </button>

            <p className="text-center text-sm text-gray-500 mt-6">
          You have account?
          <Link to="/" className="text-indigo-600 font-medium cursor-pointer">
            {" "}
            Login
          </Link>
        </p>
        </form>
      </motion.div>
    </div>
  );
}

export default SignUp;