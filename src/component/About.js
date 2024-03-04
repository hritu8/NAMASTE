import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
const About = () => (
  <div className="about-container">
    <h1>About Us</h1>

    <p>
      Namaste is a food ordering app that allows you to order food from a
      variety of restaurants around the world.
    </p>
    <Profile name="hritu" age="19" />
    <ProfileClass name="hritu" age="19" />
  </div>
);

export default About;
