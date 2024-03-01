import { IMG_CDN_URL } from "../constant";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  imageId,
  // text,
  // lastMileTravelString,
  // costForTwoString,
  // avgRating,
  action,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + imageId} />
      <h2>{action.text}</h2>
      {/* <h2>{text}</h2>

      <span>
        <h4
          style={
            avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span> */}
    </div>
  );
};

export default RestaurantCard;
