import { Bell, PhoneCall, Menu, X } from "lucide-react";

const Header = ({ toggleSidebar, open }) => {
	return (
		<header className="flex items-center justify-between bg-white shadow px-6 py-4 sticky top-0 z-20">
			{/* Left - Sidebar toggle */}
			<button
				onClick={toggleSidebar}
				className="text-gray-700 hover:text-sky-600 transition"
			>
				{
					open ?
						<Menu className="w-6 h-6 rotate-90" />
						:
						<Menu className="w-6 h-6" />

				}
			</button>


			{/* Right side */}
			<div className="flex items-center gap-6">
				<div className="flex items-center gap-2 text-gray-600">
					<PhoneCall className="w-4 h-4 text-sky-500" />
					<span className="text-sm">Live Calls: 0 Active</span>
				</div>

				<div className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-lg font-medium">
					$2845.50
				</div>

				<div className="relative">
					<Bell className="w-5 h-5 text-gray-600" />
					<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
						3
					</span>
				</div>

				<div className="flex items-center gap-2">
					<img
						src="https://i.pravatar.cc/40"
						alt="User"
						className="w-9 h-9 rounded-full border"
					/>
					<span className="text-sm font-medium text-gray-700">John Doe</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
