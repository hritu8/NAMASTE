import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils.js/userContext";
// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="h-28 logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqmZzYzrK6ldrtDjBrpgYxWHEVMXPDTSmf-oINffZS2wPsvlB_ZfuE1v-cJXZiC6Kpm1o&usqp=CAU"
      alt="Food Fire Logo"
      title="Food Fire Logo"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { user } = useContext(userContext);
  return (
    <div className="header flex justify-between shadow-lg ">
      <Title />
      <div className="nav-items">
        <ul className="flex  py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <span className="text-red-400"> {user.name}</span>
          <li className="px-2">
            {isLoggedIn ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
