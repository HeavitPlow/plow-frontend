import React, { useState } from "react";

export default function LoginScreen() {
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    // TODO: Handle email signup logic
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#11244D] tracking-wide">PLOW</h1>
          <p className="text-sm text-gray-500 mt-2">Adding flow to the world</p>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Create an account</h2>
          <p className="text-sm text-gray-500">Enter your email to sign up for this app</p>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="email@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#11244D]"
          />

          <button
            onClick={handleContinue}
            className="w-full bg-[#11244D] text-white py-2 rounded-xl font-semibold hover:bg-[#0e1c3c] transition"
          >
            Continue
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-sm text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="w-full border border-gray-300 py-2 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-100">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            <span className="text-sm font-medium text-gray-700">Continue with Google</span>
          </button>

          <button className="w-full border border-gray-300 py-2 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-100">
            <img src="https://www.svgrepo.com/show/303128/apple-logo.svg" alt="Apple" className="w-5 h-5" />
            <span className="text-sm font-medium text-gray-700">Continue with Apple</span>
          </button>
        </div>

        <p className="text-xs text-gray-400 text-center mt-6">
          By clicking continue, you agree to our <br />
          <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
