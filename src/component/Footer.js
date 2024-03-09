import { useContext } from "react";
import userContext from "../utils.js/userContext";

const Footer = () => {
  const year = new Date().getFullYear();
  const { user } = useContext(userContext);
  return (
    <div className="footer">
      <b>Footer</b>
      <div className="footer-copyright">{user.name}</div>
    </div>
  );
};

export default Footer;
