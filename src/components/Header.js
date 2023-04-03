import { BiMessageDetail } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { GiCharacter } from "react-icons/gi";

const Header = () => (
  <div className="w-screen  fixed top-0 z-10 bg-white">
    <div className="navbar bg-white  w-[1300px] mx-auto">
      <div className="flex-1">
        <img
          className="h-14 btn btn-ghost"
          src="https://pbs.twimg.com/profile_images/499042563429384193/u64MbUzq_400x400.jpeg"
          alt="mammam Logo"
        ></img>
        <div>
          <select className="select w-full max-w-xs text-gray-400 focus:border-none">
            <option selected>Kozhikode,Kerala,India</option>
            <option>Malappuram,Kerala</option>
            <option>Bengalur,Karnataka</option>
            <option>Delhi,India</option>
          </select>
        </div>
      </div>
      <div className="flex-none space-x-6">
        <div className="flex items-center hover:text-orange-500 hover:cursor-pointer font-semibold">
          <GiCharacter className="mr-2" />
          About Us
        </div>
        <div className="flex items-center hover:text-orange-500 hover:cursor-pointer font-semibold">
          <IoIosHelpBuoy className="mr-2" />
          Help
        </div>
        <div className="flex items-center hover:text-orange-500 hover:cursor-pointer font-semibold">
          <BiMessageDetail className="mr-2" />
          Contact Us
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
