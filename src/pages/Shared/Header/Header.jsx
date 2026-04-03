import logo from "../../../assets/logo.png";
import moment from "moment-timezone";

const Header = () => {
  const currentDate = moment().format("dddd, MMMM D YYYY");

  return (
    <div className="border-2 border-gray-600 ">
      <div className="flex items-center justify-center p-4">
        {" "}
        <img src={logo} alt=""></img>
      </div>
      <p className="text-center">Journalism Without Fear and Favour</p>
      <p className="text-center">{currentDate}</p>
    </div>
  );
};

export default Header;
