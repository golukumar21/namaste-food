import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log("Header Rendered");

  const { loggedInUser } = useContext(UserContext);

  // if No Dependency array => useEffect is called on every component render
  // if Dependency array is empty => [] => useEffect is called only on initial render(just once)
  // if dependency array is [btnNameReact] => called everytime btnNameReact is updated
  useEffect(() => {
    // console.log("useEffect called");
  }, [btnNameReact]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-32 logo" alt="res-logo" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-8">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
