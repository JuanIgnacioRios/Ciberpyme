import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function SimpleLayout() {
  return (
    <div className="w-full min-h-screen">
      <nav className="bg-secondary h-16 flex items-center">
        <img src="/logo.png" alt="Logo" className="h-full" />
        <span className="text-2xl text-primary font-bold">CIBERPYME</span>
      </nav>
      <Outlet />
    </div>
  );
}
