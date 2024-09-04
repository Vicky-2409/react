import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Ooops!!!</h1>
      <h2>Something went Wrong!</h2>
      <p>Error: {err.status}</p>
      <p>{err.statusText}</p>
    </div>
  );
};

export default Error;
