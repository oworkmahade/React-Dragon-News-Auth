import { FaGoogle, FaGithub } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import qZone1 from "../../../assets/swimming.png";
import qZone2 from "../../../assets/class.png";
import qZone3 from "../../../assets/playground.png";
import bg from "../../../assets/bg.png";

const RightSideNav = () => {
  return (
    <div className="">
      {/* login with  */}
      <div className=" login-with">
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
      {/* find us on  */}
      <div className="mt-4 find-us-on">
        <h2 className="mb-4 text-xl font-semibold">Find Us On</h2>
        <div className="w-64 overflow-hidden border rounded-lg shadow-sm">
          {/* Facebook */}
          <Link to="https://www.facebook.com">
            <div className="flex items-center gap-3 py-3 border-b cursor-pointer hover:bg-gray-100">
              <div className="p-2 ml-4 text-blue-600 bg-gray-200 rounded-full">
                <FaFacebookF />
              </div>
              <span className="font-medium text-gray-700">Facebook</span>
            </div>
          </Link>

          {/* Twitter */}
          <Link to="https://www.twitter.com">
            <div className="flex items-center gap-3 py-3 border-b cursor-pointer hover:bg-gray-100">
              <div className="p-2 ml-4 text-blue-400 bg-gray-200 rounded-full">
                <FaTwitter />
              </div>
              <span className="font-medium text-gray-700">Twitter</span>
            </div>
          </Link>

          {/* Instagram */}
          <Link to="https://www.instagram.com">
            <div className="flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-100">
              <div className="p-2 ml-4 text-pink-500 bg-gray-200 rounded-full">
                <FaInstagram />
              </div>
              <span className="font-medium text-gray-700">Instagram</span>
            </div>
          </Link>
        </div>
      </div>
      {/* Q-Zone  */}
      <div className="mt-4 Q-Zone">
        <h2 className="mb-4 text-xl font-semibold">Q-Zone</h2>
        <div className="flex flex-col items-start justify-center gap-8 p-4 rounded-lg bg-slate-200">
          <img src={qZone1} alt="Q-Zone 1" />
          <img src={qZone2} alt="Q-Zone 2" />
          <img src={qZone3} alt="Q-Zone 3" />
        </div>
      </div>
      {/* bg  */}
      <div className="mt-4 bg">
        <img src={bg} alt="Background" />
      </div>
    </div>
  );
};

export default RightSideNav;
