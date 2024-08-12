"use client";
import {
  loginWithEmail,
  signInWithGoogle,
  signUpWithEmail,
} from "@/firebase/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


const AuthForm = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      if(await loginWithEmail(email, password))
      router.push('/metaverse')
      else alert('Some error occurred!')
      
    } else {
      if(await signUpWithEmail(email, password))
      router.push('/metaverse')
      else alert('Some error occurred!')
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="group relative mx-auto w-full max-w-md overflow-hidden rounded-[16px] bg-gray-800 p-1 transition-all duration-300 ease-in-out   bg-gradient-to-r  from-indigo-500  via-purple-500   to-pink-500">
        {/* Rotating gradient border */}
        <div className="absolute inset-0 border-4 border-transparent bg-gradientBorder w-10"></div>
        <div className="relative rounded-[16px] bg-gray-900 p-10 shadow-lg border border-gray-700">
          <h2 className="text-4xl font-extrabold mb-6 text-purple-400 text-center relative z-10">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <form onSubmit={handleSubmit} className="relative z-10">
            <div className="mb-5">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-white bg-gray-800 border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-white bg-gray-800 border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex flex-col gap-4 mb-6">
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 relative z-10"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
              <button
                type="button"
                onClick={async () => {
                  if(await signInWithGoogle())
                  router.push('/metaverse')
                  else alert('Some error occurred!')
                }
                }
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 relative z-10"
              >
                Sign In with Google
              </button>
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={ () => setIsLogin(!isLogin)}
                className="text-purple-400 hover:text-purple-300 font-semibold transition duration-300 relative z-10"
              >
                {isLogin
                  ? "Don't have an account? Sign Up"
                  : "Already have an account? Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
