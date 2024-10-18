import React from "react";

function Navbar() {
  return (
    <nav className="col-span-full bg-secondary flex items-center h-full p-3 justify-between">
      <div className="flex items-center h-full">
        <img src={"/logo.png"} alt="logo" className="h-full" />
        <div className="text-primary font-bold text-4xl">
          <a href="/">CIBERPYME</a>
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
