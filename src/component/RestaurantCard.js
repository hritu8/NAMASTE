import { useContext } from "react";
import { IMG_CDN_URL } from "../constant";
import userContext from "../utils.js/userContext";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({ cloudinaryImageId, name, sla, costForTwoString }) => {
  const { user } = useContext(userContext);
  return (
    <div className="card m-3  p-3 w-56 shadow-lg ">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-base">{name}</h2>
      <span>
        <h4 className="font-bold text-base">{sla.lastMileTravelString}</h4>
        <h4 className="font-bold text-base">{costForTwoString}</h4>
        <h4 className="font-bold text-base">{user.name}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
