import React, { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(!open);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar open={open} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
