import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

/**
 *   Header
 *    -logo(title)
 *    -nav items(right side)
 *    -cart
 *   Body
 *    -search bar
 *    -RestaurantList
 *    -RestaurantCard (many card)
 *       -image
 *       -name
 *       -rating
 *       -cusines
 *    Footer
 *     -links
 *     -copyright
 */

// Config Driven UI

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
