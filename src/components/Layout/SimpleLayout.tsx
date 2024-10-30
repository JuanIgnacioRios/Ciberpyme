import React from "react";
import { Outlet } from "react-router-dom";

export default function SimpleLayout() {
  return (
    <div className="w-full min-h-screen grid grid-rows-[auto,_1fr]">
      <nav className="col-span-full bg-secondary flex items-center h-16 p-3 sticky top-0 z-30">
        <div className="flex items-center h-full">
          <img src={"/logo.png"} alt="logo" className="h-full" />
          <div className="text-primary font-bold text-4xl">CIBERPYME</div>
        </div>
      </nav>
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
}
