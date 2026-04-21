import Navbar from "../Shared/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import { AuthContext } from "../../providers/AuthProvider";

function Login() {
  // state for holding email from input field using useRef
  const emailRef = useRef(null);

  // receiving signInUser
  const authInfo = useContext(AuthContext);
  const { signInUser } = authInfo;

  const navigate = useNavigate();

  // form handle login
  const handleLogin = (e) => {
    e.preventDefault();
    // different method rather then e.target.email.value etc
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((result) => {
        e.target.reset(" ");
        const loggedUser = result.user;
        console.log(loggedUser.email, "login successful");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // handle password reset
  const handlePasswordReset = () => {
    console.log("password reset link clicked");
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="w-3/5 p-16 m-auto mb-16 bg-gray-100 mx-automt-6 mx8-auto login-form">
        <h2 className="text-2xl font-bold text-center">Login your account</h2>
        <hr className="w-2/5 mx-auto mt-2"></hr>
        <form
          onSubmit={handleLogin}
          className="w-4/6 p-8 mx-auto mt-6 space-y-4 border-2 rounded-lg border-slate-400"
        >
          {/* Email */}
          <div className="text-sm font-medium">
            <label htmlFor="email" className="block mb-1">
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
          <div className="text-sm font-medium">
            <label htmlFor="password" className="block mb-1">
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
          <div className="my-4 text-sm font-medium">
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
