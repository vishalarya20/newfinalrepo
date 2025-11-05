import { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	const [open, setOpen] = useState(true); // start open on desktop

	const toggleSidebar = () => setOpen((prev) => !prev);

	return (
		<div className="min-h-screen bg-gray-50 flex">
			{/* Sidebar */}
			<Sidebar open={open} toggleSidebar={toggleSidebar} />

			{/* Main Content */}
			<div
				className={`flex-1 flex flex-col transition-all duration-300 ${open ? "md:ml-64" : "md:ml-24"
					}`}
			>
				<Header toggleSidebar={toggleSidebar} open={open}/>
				<main className="flex-1 p-6 overflow-y-auto">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default Layout;
