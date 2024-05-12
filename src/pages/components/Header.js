import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";

const Header = () => {
  const location = useLocation();

  const [active, setActive] = useState("");

  const sideBtn = () => {
    active === "active" ? setActive((active) => (active = "")) : setActive((active) => (active = "active"));
  };

  return (
    <header className="flex justify-between items-center bg-white h-12">
      {location.pathname === "/" ? <Sidebar active={active} /> : ""}
      {location.pathname === "/" ? (
        <button id="sideBtn" onClick={sideBtn} className="w-12 h-12 flex justify-center items-center z-50">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      ) : (
        <Link className="w-12 h-12 flex justify-center items-center" to="/">
          <span className="material-symbols-outlined text-3xl">arrow_back</span>
        </Link>
      )}
      <h1 className="text-xl font-extrabold tracking-widest">KYOCHON 1991</h1>
      <button className="w-12 h-12 flex justify-center items-center">
        <span className="material-symbols-outlined text-3xl">shopping_cart</span>
      </button>
    </header>
  );
};

export default Header;
