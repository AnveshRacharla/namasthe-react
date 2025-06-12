import { useContext, useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const OnlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-blue-200 shadow-lg m-2 rounded-2xl border-2 border-blue-500">
      <div className="logo-container">
        <img className="w-20 rounded-full m-3" src={CDN_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 text-xl">
          <li className="px-1.5">{OnlineStatus ? "🟢" : "🔴"}</li>

          <li className="px-2 active:scale-98 hover:scale-[1.05] transition-transform duration-200 ease-in-out">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2 active:scale-98 hover:scale-[1.05] transition-transform duration-200 ease-in-out">
            <Link to="/about">About Us</Link>
          </li>

          <li className="px-2 active:scale-98 hover:scale-[1.05] transition-transform duration-200 ease-in-out">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="px-2 active:scale-98 hover:scale-[1.05] transition-transform duration-200 ease-in-out">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-2 active:scale-98 text-[22px] hover:scale-[1.05] transition-transform duration-200 ease-in-out">
            <Link to="./cart">🛒({cartItems.length})</Link>
          </li>

          {/* <li className="px-2 font-semibold">{loggedInUser}</li> */}
        </ul>
      </div>
      <div className="flex active:scale-99 items-center hover:scale-[1.03] transition-transform duration-200 ease-in-out">
        <button
          className="px-3 py-1 pb-2 mr-10 border-2 border-cyan-500 bg-cyan-200 rounded-md cursor-pointer"
          onClick={() => {
            btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};
export default Header;
