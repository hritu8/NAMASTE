import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div>
      <h2>Profile component</h2>
      <h2>Name:{props.name}</h2>
      <h3>Age:{props.age}</h3>
      <h3>count:{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2(count2 + 1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Profile;
