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

const coreFunctions = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Live Calls", icon: PhoneCall },
    { name: "Reports", icon: BarChart3 },
    { name: "Numbers", icon: Hash },
    { name: "Extensions", icon: Users },
    { name: "Block Number", icon: ShieldBan },
    { name: "Activity Logs", icon: Activity },
    { name: "User Profile", icon: UserCircle },
    { name: "Ring Groups", icon: Layers },
    { name: "Notifications", icon: Bell },
];

const adminFunctions = [
    { name: "Tenant Management", icon: Building2 },
    { name: "Master Rate Deck", icon: FileText },
    { name: "Trunk Management", icon: Database },
    { name: "Topup History", icon: CreditCard },
    { name: "User & Roles", icon: UserCog },
    { name: "Infrastructure", icon: Server },
];

const Sidebar = ({ open }) => {
    const [active, setActive] = useState("Dashboard");

    const renderSection = (title, items) => (
        <div className="mb-8">
            <h3 className="text-xs font-semibold text-blue-100 uppercase mb-3 tracking-wider px-3">
                {title}
            </h3>
            <div className="space-y-1">
                {items.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => setActive(item.name)}
                        className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg transition text-sm ${active === item.name
                                ? "bg-white/20 text-white"
                                : "text-blue-100 hover:bg-white/10"
                            }`}
                    >
                        <item.icon className="w-5 h-5 shrink-0" />
                        <span>{item.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <aside
            className={`fixed md:static top-0 left-0  bg-gradient-to-b from-sky-500 to-blue-700 text-white w-64 p-5 transition-transform duration-300 z-20 ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                }`}
        >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-10 px-2">
                <span className="text-3xl">⚡</span>
                <span className="text-xl font-semibold">Free Switch</span>
            </div>

            {/* Sections */}
            <nav>
                {renderSection("Core Functions", coreFunctions)}
                {renderSection("Admin Functions", adminFunctions)}
            </nav>
        </aside>
    );
};

export default Sidebar;
