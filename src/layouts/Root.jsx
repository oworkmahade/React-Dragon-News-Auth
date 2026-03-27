import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-6xl p-2 mx-auto border-2 border-slate-400 font-poppins">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
