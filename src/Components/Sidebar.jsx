import { useState } from "react";
import {
	LayoutDashboard,
	PhoneCall,
	BarChart3,
	Hash,
	Users,
	ShieldBan,
	Activity,
	UserCircle,
	Building2,
	Database,
	FileText,
	Layers,
	CreditCard,
	UserCog,
	Server,
	Bell,
} from "lucide-react";
import { Link } from "react-router-dom";

const coreFunctions = [
	{ name: "Dashboard", icon: LayoutDashboard, url: "/" },
	{ name: "Live Calls", icon: PhoneCall, url: "/calls/live" },
	{ name: "Reports", icon: BarChart3, url: "/reports" },
	{ name: "Numbers", icon: Hash, url: "/numbers" },
	{ name: "Extensions", icon: Users, url: "/extensions" },
	{ name: "Block Number", icon: ShieldBan, url: "/numbers/block" },
	{ name: "Activity Logs", icon: Activity, url: "/logs/activity" },
	{ name: "User Profile", icon: UserCircle, url: "/user/profile/1" },
	{ name: "Ring Groups", icon: Layers, url: "/groups/ring" },
	{ name: "Notifications", icon: Bell, url: "/notifications" },
];

const adminFunctions = [
	{ name: "Tenant Management", icon: Building2, url: "/manage/tenant" },
	{ name: "Master Rate Deck", icon: FileText, url: "/rate-deck/master" },
	{ name: "Trunk Management", icon: Database, url: "/manage/trunk" },
	{ name: "Topup History", icon: CreditCard, url: "/history/top-up" },
	{ name: "User & Roles", icon: UserCog, url: "/manage/user/role" },
	{ name: "Infrastructure", icon: Server, url: "/infrastructure" },
];

const Sidebar = ({ open }) => {
	const [active, setActive] = useState("Dashboard");

	const renderSection = (title, items) => (
		<div className="mb-8">
			{open && (
				<h3 className="text-xs font-semibold text-blue-100 uppercase mb-3 tracking-wider px-3">
					{title}
				</h3>
			)}
			<div className="space-y-1">
				{items.map((item) => (
					<Link
						to={item.url}
						key={item.name}
						onClick={() => setActive(item.name)}
						className={`flex items-center ${open ? "" : "justify-center"
							} gap-3 w-full px-3 py-2 rounded-lg transition text-sm ${active === item.name
								? "bg-white/20 text-white"
								: "text-blue-100 hover:bg-white/10"
							}`}
					>
						<item.icon className="w-5 h-5 shrink-0" />
						{open && <span>{item.name}</span>}
					</Link>
				))}
			</div>
		</div>
	);

	return (
		<aside
			className={`fixed top-0 left-0 h-screen overflow-y-auto bg-gradient-to-b from-sky-500 to-blue-700 text-white ${open ? "w-64" : "w-24"
				} p-5 transition-all duration-300 z-30 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-700/30 hover:scrollbar-thumb-blue-200`}
		>
			{/* Header / Logo */}
			<div
				className={`flex items-center ${open ? "justify-between" : "justify-center"
					} mb-10`}
			>
				<div className="flex items-center gap-2">
					<span className="text-3xl">⚡</span>
					{open && (
						<span className="text-2xl font-semibold whitespace-nowrap">
							Free Switch
						</span>
					)}
				</div>
			</div>

			{/* Scrollable Nav */}
			<nav className="pb-16">
				{renderSection("Core Functions", coreFunctions)}
				{renderSection("Admin Functions", adminFunctions)}
			</nav>
		</aside>
	);
};

export default Sidebar;
