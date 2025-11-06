import { useState, useEffect, useRef } from "react";
import { Bell, PhoneCall, Menu, User, Settings, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar, open }) => {
	const [showNotifications, setShowNotifications] = useState(false);
	const [showProfile, setShowProfile] = useState(false);
	const notificationRef = useRef(null);
	const profileRef = useRef(null);
	const navigate = useNavigate();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				notificationRef.current &&
				!notificationRef.current.contains(event.target)
			) {
				setShowNotifications(false);
			}
			if (profileRef.current && !profileRef.current.contains(event.target)) {
				setShowProfile(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const notifications = [
		{
			type: "info",
			title: "New extension created",
			desc: "Extension 105 has been activated",
			time: "2m ago",
			color: "bg-blue-500",
		},
		{
			type: "success",
			title: "Number assigned",
			desc: "+1 555-0123 assigned to your account",
			time: "15m ago",
			color: "bg-green-500",
		},
		{
			type: "warning",
			title: "Low balance warning",
			desc: "Your wallet balance is below $500",
			time: "1h ago",
			color: "bg-orange-500",
		},
	];

	return (
		<header className="flex items-center justify-between bg-white shadow px-4 sm:px-6 py-3 sticky top-0 z-30">
			{/* LEFT SECTION */}
			<div className="flex items-center gap-3">
				{/* Sidebar Toggle — ALWAYS visible */}
				<button
					onClick={toggleSidebar}
					className="text-gray-700 hover:text-sky-600 transition"
				>
					{open ? (
						<Menu className="w-6 h-6 rotate-90 transition-transform" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>
			</div>

			{/* RIGHT SECTION */}
			<div className="flex items-center gap-5 sm:gap-6">
				{/* Live Calls */}
				<div className="flex items-center gap-2 text-gray-600 text-sm">
					<PhoneCall className="w-4 h-4 text-sky-500" />
					<span>Live Calls: 0 Active</span>
				</div>

				{/* Balance */}
				<div className="bg-orange-100 text-orange-700 text-xs sm:text-sm px-3 py-1 rounded-lg font-medium">
					$2845.50
				</div>

				{/* Notifications */}
				<div className="relative" ref={notificationRef}>
					<button
						onClick={() => {
							setShowNotifications(!showNotifications);
							setShowProfile(false);
						}}
						className="relative focus:outline-none"
					>
						<Bell className="w-5 h-5 text-gray-600" />
						<span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
							{notifications.length}
						</span>
					</button>

					{/* Notification Dropdown */}
					{showNotifications && (
						<div className="absolute right-0 mt-3 w-80 bg-white shadow-lg rounded-xl border border-gray-100 z-40">
							<div className="p-3 border-b border-gray-100 font-medium text-gray-700">
								Notifications
							</div>
							<ul className="max-h-64 overflow-y-auto">
								{notifications.map((n, i) => (
									<li
										key={i}
										className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition"
									>
										<span
											className={`w-2.5 h-2.5 mt-2 rounded-full ${n.color}`}
										></span>
										<div className="flex-1 text-sm">
											<p className="font-medium text-gray-800">{n.title}</p>
											<p className="text-gray-500 text-xs">{n.desc}</p>
										</div>
										<span className="text-xs text-gray-400 whitespace-nowrap">
											{n.time}
										</span>
									</li>
								))}
							</ul>
							<div className="p-2 border-t text-center">
								<button
									onClick={() => navigate("/notifications")}
									className="text-sky-600 text-sm font-medium hover:underline"
								>
									View all notifications
								</button>
							</div>
						</div>
					)}
				</div>

				{/* Profile Dropdown */}
				<div className="relative" ref={profileRef}>
					<button
						onClick={() => {
							setShowProfile(!showProfile);
							setShowNotifications(false);
						}}
						className="flex items-center gap-2 focus:outline-none"
					>
						<img
							src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
							alt="User"
							className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border"
						/>
						<span className="text-xs sm:text-sm font-medium text-gray-700 hidden sm:block">
							Super Admin
						</span>
					</button>

					{/* Dropdown */}
					{showProfile && (
						<div className="absolute right-0 mt-3 w-52 bg-white shadow-lg rounded-xl border border-gray-100 z-40">
							<div className="p-3 border-b text-gray-700 text-sm font-semibold">
								My Account
							</div>
							<ul className="text-sm">
								<Link
									to={"/user/profile/1"}
									className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer"
								>
									<User className="w-4 h-4 text-gray-500" />
									Profile
								</Link>
								<li
									onClick={() => navigate("/settings")}
									className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer"
								>
									<Settings className="w-4 h-4 text-gray-500" />
									Settings
								</li>
								<li
									onClick={() => navigate("/login")}
									className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-red-500 cursor-pointer border-t"
								>
									<LogOut className="w-4 h-4" />
									Logout
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
