import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <h3>{error?.error}</h3>
    </div>
  );
};

export default Error;
