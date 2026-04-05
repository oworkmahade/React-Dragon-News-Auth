import { NavLink } from 'react-router-dom';
import userLogo from '../../../assets/user.png'

const Navbar = () => {

  const navLink=(
    <> 
  <li>  <NavLink to='/'>Home</NavLink> </li>
  <li>  <NavLink to='/about'>About</NavLink> </li>
  <li>  <NavLink to='/career'>Career</NavLink> </li>
    </>
  )




  
  return (
    <div className="my-4 border-2 border-gray-600">
<div className="navbar bg-base-100">
  <div className="navbar-start">
    {/* dropdown  */}
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    |{navLink}
       
      </ul>
    </div>
   
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal">
    {navLink}
    </ul>
  </div>
  <div className="flex flex-row gap-4 navbar-end">

      <div>
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={userLogo} />
        </div>
      </label>
      </div>
      <div>
            <a className="px-12 text-white bg-gray-800 rounded btn">Login</a>
      </div>

  </div>
</div>
    </div>
  );
};

export default Navbar;
