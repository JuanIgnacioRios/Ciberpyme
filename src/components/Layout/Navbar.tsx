import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="col-span-full bg-secondary flex items-center h-16 p-3 justify-between">
      <div className="flex items-center h-full">
        <img src={"/logo.png"} alt="logo" className="h-full" />
        <div className="text-primary font-bold text-4xl">
          <Link to="/">CIBERPYME</Link>
        </div>
      </div>
      <div className="h-full flex gap-2 items-center">
        <p className="font-bold">Juan Pérez</p>
        <img src="/avatar.png" alt="Avatar" className="h-full" />
      </div>
    </nav>
  );
}

export default Navbar;
