import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black p-3 m-3 ">
      <h2 className="font-bold ">{title}</h2>
      {isVisible ? (
        <div>
          <button
            onClick={() => {
              setIsVisible(false);
              setVisibleSection("about");
            }}
          >
            hide
          </button>
          <p>{description}</p>
        </div>
      ) : (
        <button onClick={() => setIsVisible(true)}>show</button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div className="instamart-component bg-red-600">
      <h2 className="font-bold m-2 p-2 text-xl">Instamart</h2>
      <Section
        title={"About Instamart"}
        description={
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores  lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lorem ipsum dolor sit amet ipsum dolor sit amet, consectetur adipisicing elit. Asperiores lorem ipsum Lorem it amet, consectetur adipisicing  ipsum dolor sit amet, consectetur adipisicing elit. Asperiores lorem ipsum Lorem it amet, consectetur adipisicing ipsum dolor sit amet, consectetur adipisicing elit. Asperiores lorem ipsum Lorem it amet, consectetur adipisicing  "
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => {
          setVisibleSection("about");
        }}
      />
      <Section
        title={"Team Instamart"}
        description={
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores lorem ipsum Lorem it amet, consectetur adipisicing elit. Asperiores  lorem ipsum dolor sit amet, consectetur adip lorem it amet, consectetur adipisicing elit. Asperiores  lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores lorem ipsum Lorem it amet, consectetur adipisicing  ipsum dolor sit amet, consectetur adipisicing elit. Asperiores lorem ipsum Lorem it amet, consectetur adipisicing  "
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => {
          setVisibleSection("team");
        }}
      />
      <Section
        title={"Carrer Instamart"}
        description={
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores lorem ipsum Lorem it amet, consectetur adipisicing elit. Asperiores  lorem ipsum dolor sit amet, consectetur adip lorem it amet, consectetur adipisicing elit. Asperiores  lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores lorem ipsum Lorem it amet, consectetur adipisicing  ipsum dolor sit amet, consectetur adipisicing elit. Asperiores lorem ipsum Lorem it amet, consectetur adipisicing  "
        }
        isVisible={visibleSection === "carrer"}
        setIsVisible={() => {
          setVisibleSection("carrer");
        }}
      />
    </div>
  );
};
export default Instamart;
