import React from "react";

const Sidebar = ({ open }) => {
    return (
        <aside
            className={`min-h-screen fixed md:static top-0 left-0 h-full bg-gray-900 text-white w-64 p-5 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                }`}
        >
            <h2 className="text-2xl font-semibold mb-8">Telesync</h2>
            <nav className="space-y-3">
                <a
                    href="#"
                    className="flex items-center gap-3 text-gray-200 hover:text-white"
                >
                    Dashboard
                </a>
                <a
                    href="#"
                    className="flex items-center gap-3 text-gray-200 hover:text-white"
                >
                    Profile
                </a>
                <a
                    href="#"
                    className="flex items-center gap-3 text-gray-200 hover:text-white"
                >
                    Settings
                </a>
            </nav>
        </aside>
    );
};

export default Sidebar;
