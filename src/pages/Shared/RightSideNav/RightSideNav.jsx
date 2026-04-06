import { FaGoogle, FaGithub } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div className="">
      <div className="border border-green-600 p- border-1 login-with">
        <h2 className="mb-4 text-xl font-semibold">Login With</h2>
        <div className="flex flex-col items-start justify-center gap-4">
          <button className="w-full text-blue-600 border-2 border-blue-600 btn">
            <FaGoogle />
            Login with Google
          </button>
          <button className="w-full border-2 border-black btn">
            <FaGithub />
            Login with Github
          </button>
        </div>
      </div>
      <div className="mt-4 border border-red-600 ">
        <h2 className="mb-4 text-xl font-semibold">Find Us On</h2>
        <div className="w-64 overflow-hidden border rounded-lg shadow-sm">
          {/* Facebook */}
          <div className="flex items-center gap-3 py-3 border-b cursor-pointer hover:bg-gray-100">
            <div className="p-2 text-blue-600 bg-gray-200 rounded-full">
              <FaFacebookF />
            </div>
            <span className="font-medium text-gray-700">Facebook</span>
          </div>

          {/* Twitter */}
          <div className="flex items-center gap-3 py-3 border-b cursor-pointer hover:bg-gray-100">
            <div className="p-2 text-blue-400 bg-gray-200 rounded-full">
              <FaTwitter />
            </div>
            <span className="font-medium text-gray-700">Twitter</span>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-100">
            <div className="p-2 text-pink-500 bg-gray-200 rounded-full">
              <FaInstagram />
            </div>
            <span className="font-medium text-gray-700">Instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
