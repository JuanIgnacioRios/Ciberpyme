import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="w-full min-h-screen bg-white grid grid-rows-[auto_1fr] lg:grid-cols-[280px_1fr]">
      <Navbar />
      <Sidebar />
      <main className="col-start-2">
        <Outlet />
      </main>
    </div>
  );
}
