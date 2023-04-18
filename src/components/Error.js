import { useRouteError } from "react-router";
import { Link } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log("🚀 ~ file: Error.js:5 ~ Error ~ error:", error);
  return (
    <div className="flex flex-col justify-center items-center h-screen align-middle">
      <div>
        <img
          className="h-80 w-80"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/connection_error_bsppck"
        ></img>
      </div>
      <p className="text-[30px] font-bold">Uh-oh!</p>
      <p className="text-gray-300">
        "Sorry! This should not have happened. Please retry."
      </p>
      <p className="text-gray-400">{error?.status}</p>
      <p className="text-gray-400">{error?.error?.message}</p>
      <Link to="/">Goto home</Link>
    </div>
  );
};
export default Error;
