import { useState, useEffect } from "react";
import { swiggy_api_URL } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";

function filterData(searchText, filteredRestaurants) {
  const filterdata = filteredRestaurants.filter((restaurant) =>
    restaurant?.action?.text.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterdata;
}

const Body = () => {
  //   const  searchTxt = "";
  // const [allRestaurants, setAllRestaurants] = useState(restaurantList);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); //To create state Variable

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    // );
    // call the checkJsonData() function which return Swiggy Restaurant data

    // update the state variable restaurants with Swiggy API data

    setAllRestaurants(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setFilteredRestaurants(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  }
  if (allRestaurants === null) return null;

  // console.log("render");
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
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
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state -retaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {filteredRestaurants.length === 0 ? (
        <h1>No Restaurant match your filter criteria</h1>
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => {
            return <RestaurantCard {...restaurant} key={restaurant?.id} />;
          })}
        </div>
      )}
    </>
  );
};

export default Body;
