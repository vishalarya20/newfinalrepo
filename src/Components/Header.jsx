import React from "react";

const Header = ({ toggleSidebar }) => {
    return (
        <header className="flex items-center justify-between bg-white shadow px-6 py-4">
            <button
                onClick={toggleSidebar}
                className="text-gray-600 md:hidden focus:outline-none"
            >
                ☰
            </button>
            <h1 className="text-xl font-bold text-gray-800">My Dashboard</h1>
            <div className="flex items-center gap-3">
                <span className="text-gray-600 text-sm">Hello, Rohan 👋</span>
                <img
                    src="https://i.pravatar.cc/40"
                    alt="User"
                    className="w-10 h-10 rounded-full border"
                />
            </div>
        </header>
    );
};

export default Header;
