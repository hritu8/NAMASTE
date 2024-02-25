import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>object=>HTML(DOM)

// JSX => React.createElement =>object =>HTML(DOM)
const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);
// console.log(heading);

// React component
//  -Functional component - NEW we'll use most of the time
//  -class Based Component -OLD

const HeaderComponent = () => {
  return (
    <div>
      {Title()}
      <h1 id="title">Namaste React functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
