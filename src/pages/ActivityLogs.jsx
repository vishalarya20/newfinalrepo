import { useState } from "react";
import { Activity, Phone, User, Settings } from "lucide-react";

function ActivityLogs() {
    const [filter, setFilter] = useState("All Activities");

    const [logs] = useState([
        {
            id: 1,
            icon: <Settings className="text-purple-500 w-6 h-6" />,
            title: "Sample data initialized",
            description: "Demo numbers, extensions, and ring groups created",
            userType: "System",
            time: "2025-11-01T19:24:09.165Z",
        },
        {
            id: 2,
            icon: <Phone className="text-green-500 w-6 h-6" />,
            title: "Number +17744484249 added",
            description: "",
            userType: "Current User",
            time: "2025-11-01T19:25:38.257Z",
        },
        {
            id: 3,
            icon: <User className="text-blue-500 w-6 h-6" />,
            title: "Extension 7351 created for aaa",
            description: "",
            userType: "Current User",
            time: "2025-11-01T19:28:13.438Z",
        },
        {
            id: 4,
            icon: <User className="text-blue-500 w-6 h-6" />,
            title: "Extension 7351 created for aaa",
            description: "",
            userType: "Current User",
            time: "2025-11-01T19:28:13.624Z",
        },
        {
            id: 5,
            icon: <User className="text-blue-500 w-6 h-6" />,
            title: "Extension 7351 created for aaa",
            description: "",
            userType: "Current User",
            time: "2025-11-01T19:28:15.898Z",
        },
        {
            id: 6,
            icon: <Settings className="text-purple-500 w-6 h-6" />,
            title: "Sample data initialized",
            description: "Demo numbers, extensions, and ring groups created",
            userType: "System",
            time: "2025-11-01T19:53:12.858Z",
        },
    ]);

    // filter (currently only visual, but ready for extension)
    const filteredLogs =
        filter === "All Activities"
            ? logs
            : logs.filter((log) => log.userType === filter);

    return (
        <div className="p-2 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Activity Logs
                </h2>
                <p className="text-sm text-gray-600">
                    Recent actions and system events
                </p>
            </div>

            {/* Filter */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-sm border border-gray-100 p-3 mb-6 flex items-center justify-between">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="text-sm border-none outline-none focus:ring-0 text-gray-700"
                >
                    <option>All Activities</option>
                    <option>System</option>
                    <option>Current User</option>
                </select>
            </div>

            {/* Activity List */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-sm border border-gray-100 divide-y divide-gray-100">
                {filteredLogs.map((log) => (
                    <div
                        key={log.id}
                        className="flex justify-between items-start gap-3 p-4 hover:bg-gray-50 transition"
                    >
                        {/* Left - Icon */}
                        <div className="flex-shrink-0 mt-1">{log.icon}</div>

                        {/* Middle - Details */}
                        <div className="flex-1">
                            <h3 className="text-sm font-medium text-gray-800">
                                {log.title}
                            </h3>
                            {log.description && (
                                <p className="text-xs text-gray-500 mt-0.5">
                                    {log.description}
                                </p>
                            )}
                            <span
                                className={`inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded-full ${log.userType === "System"
                                        ? "bg-gray-100 text-gray-600"
                                        : "bg-green-100 text-green-700"
                                    }`}
                            >
                                {log.userType}
                            </span>
                        </div>

                        {/* Right - Timestamp */}
                        <div className="text-xs text-gray-500 whitespace-nowrap">
                            {log.time}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ActivityLogs;
