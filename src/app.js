import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Error from "./component/Error";
import Contact from "./component/contact";
import Profile from "./component/Profile";
import ProfileClass from "./component/ProfileClass";
import RestaurantMenu from "./component/RestaurantMenu";
import Shimmer from "./component/shimmer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import userContext from "./utils.js/userContext";
// import Instamart from "./component/Instamart";

const Instamart = lazy(() => import("./component/Instamart"));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "hritu raj",
    email: "hritu@gmail.com",
  });

  return (
    <React.Fragment>
      <userContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />

        <Outlet />
      </userContext.Provider>
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "profileclass",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
