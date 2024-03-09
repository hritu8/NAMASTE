import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { useContext } from "react";
import userContext from "../utils.js/userContext";
const About = () => {
  const { user } = useContext(userContext);
  return (
    <div className="about-container text-red-900">
      <h1>About Us</h1>
      <h2>{user.name}</h2>
      <p className="text-yellow">
        Namaste is a food ordering app that allows you to order food from a
        variety of restaurants around the world.
      </p>
      {/* <Profile name="hritu" age="19" />
      <ProfileClass name="hritu" age="19" /> */}
    </div>
  );
};

export default About;
