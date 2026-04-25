import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  const currentDate = moment().format("dddd, MMMM D, YYYY");

  return (
    <div className="">
      <div className="flex items-center justify-center p-4">
        {" "}
        <img src={logo} alt=""></img>
      </div>
      <p className="text-center">Journalism Without Fear and Favour !</p>
      <p className="my-2 text-center">{currentDate}</p>
    </div>
  );
};

export default Header;
