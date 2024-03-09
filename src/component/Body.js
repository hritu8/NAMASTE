import { useState, useEffect, useContext } from "react";
import { swiggy_api_URL } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils.js/helper";
import useOnline from "../utils.js/useOnline";
import useResData from "../utils.js/useResData";
import userContext from "../utils.js/userContext";

const Body = ({}) => {
  //   const  searchTxt = "";
  // const [allRestaurants, setAllRestaurants] = useState(restaurantList);
  // const [allRestaurants, setAllRestaurants] = useState([]);
  // const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); //To create state Variable
  const [allRestaurants, filRes] = useResData(swiggy_api_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const { user, setUser } = useContext(userContext);
  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <div className="offline">
        <h1>🔴 offline , Please check your internet connection</h1>
        <h1>🔴 offline , Please check your internet connection</h1>
        <h1>🔴 offline , Please check your internet connection</h1>
      </div>
    );
  }
  if (allRestaurants === null) return null;

  // console.log("render");
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 my-5 bg-pink-100">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            // e.target.value is whatever we write in input
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn p-2 m-2 bg-purple-400 text-white rounded-sm"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state -retaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
              email: "new@gmail.com",
            })
          }
        ></input>
      </div>
      {allRestaurants.length === 0 && filteredRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list flex flex-wrap justify-between">
          {(filteredRestaurants === null ? filRes : filteredRestaurants).map(
            (restaurant) => {
              return (
                <Link
                  to={"restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  <RestaurantCard {...restaurant?.info} user={user} />
                </Link>
              );
            }
          )}
        </div>
      )}
    </>
  );
};

export default Body;
