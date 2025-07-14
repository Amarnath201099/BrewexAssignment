import { IoIosArrowDown } from "react-icons/io";
import "./index.css";

const NavBar = () => {
  return (
    <header className="header-container d-flex align-items-center justify-content-center gap-3 py-5">
      <button className="nav-btn" type="button">
        About
      </button>
      <button className="nav-btn" type="button">
        Services
        <IoIosArrowDown />
      </button>
    </header>
  );
};

export default NavBar;
