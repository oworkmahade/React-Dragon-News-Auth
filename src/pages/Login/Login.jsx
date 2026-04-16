import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Login() {
  // state for holding email from input field using useRef
  const emailRef = useRef(null);

  // form handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  // handle password reset
  const handlePasswordReset = () => {
    console.log("password reset link clicked");
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="w-3/5 p-4 mx-auto bg-gray-300 login-form">
        <h2 className="text-2xl font-bold text-center">Login your account</h2>
        <hr className="w-2/5 mx-auto mt-2"></hr>
        <form
          onSubmit={handleLogin}
          className="w-1/3 p-4 mx-auto mt-6 space-y-4 border-2 rounded-lg border-slate-400"
        >
          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email address
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              id="email"
              placeholder="Enter your email address"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* password reset */}
          <div className="my-4">
            <button
              type="button"
              onClick={handlePasswordReset}
              className="p-0 m-0 bg-transparent border-none cursor-pointer link link-hover"
              style={{ background: "none", border: "none" }}
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-white transition bg-black rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-sm text-center">
          Register if you don't have an account.{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            <Link to="/register">
              <button type="button" className="text-red-600">
                {" "}
                Register
              </button>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
