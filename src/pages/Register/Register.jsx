import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
// import firebase from "firebase/compat/app";
const Register = () => {
  const authInfo = useContext(AuthContext);
  const { createUser } = authInfo;

  // state or showing password
  const [showPassword, setShowPassword] = useState(null);
  // form handle register
  const handleRegister = (e) => {
    e.preventDefault();

    // different method rather then e.target.email.value etc

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const termsChecked = form.get("terms");
    if (!termsChecked) {
      alert("Please accept the terms and conditions");
      return;
    }

    // create user with email and password using createUser function from auth context.
    createUser(email, password)
      .then((result) => {
        e.target.reset(" ");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="w-3/5 p-16 m-auto mx-auto mt-6 mb-16 bg-gray-100 mx8-auto login-form">
        <h2 className="text-2xl font-bold text-center">
          Register your account
        </h2>
        <hr className="w-2/5 mx-auto mt-2"></hr>
        <form
          onSubmit={handleRegister}
          className="w-4/6 p-8 mx-auto mt-6 space-y-4 border-2 rounded-lg border-slate-400"
        >
          {/* Name */}
          <div className="text-sm font-medium">
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="text-sm font-medium">
            <label htmlFor="photo" className="block mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Enter your photo URL"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email */}
          <div className="text-sm font-medium">
            <label htmlFor="email" className="block mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute p-2 text-xl text-gray-600 border-none cursor-pointer right-3 top-1 bg-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms" className="text-sm">
              Accept{" "}
              <a
                className="font-semibold link link-hover"
                href="/terms-and-conditions"
              >
                terms and conditions
              </a>
            </label>
          </div>
          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-sm text-center">
          Already have an account.{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            <Link to="/login">
              <button type="button" className="text-red-600">
                {" "}
                Login
              </button>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
