import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useCheckStatus from "../utils/useCheckStatus";

const Header = () => {
  return (
    <header className="flex justify-between bg-green-50 mb-4">
      <img className="w-36" src={LOGO_URL} alt="logo" />
      <ul className="flex my-auto">
        <li className="mx-4">
          <Link to="/mart">Swiggy Mart</Link>
        </li>
        <li className="mx-4">Status Checker: {useCheckStatus() ? "✅" : "🔴"}</li>
        <li className="mx-4">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-4">
          <Link to="/about">About</Link>
        </li>
        <li className="mx-4">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
