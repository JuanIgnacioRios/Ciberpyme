import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function LayoutNoSidebar() {
  return (
    <div className="w-full min-h-screen bg-white grid grid-rows-[auto,_1fr]">
      <Navbar />
      <Outlet />
    </div>
  );
}
