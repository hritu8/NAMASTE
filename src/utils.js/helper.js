export const filterData = (searchText, filteredRestaurants) => {
  const filterdata = filteredRestaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterdata;
};

