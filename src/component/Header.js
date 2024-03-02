import { useState } from "react";
import { Link } from "react-router-dom";
// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqmZzYzrK6ldrtDjBrpgYxWHEVMXPDTSmf-oINffZS2wPsvlB_ZfuE1v-cJXZiC6Kpm1o&usqp=CAU"
      alt="Food Fire Logo"
      title="Food Fire Logo"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
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
