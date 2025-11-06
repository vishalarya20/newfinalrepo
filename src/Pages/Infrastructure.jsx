import React from "react";
import {
    Activity,
    Server,
    Cpu,
    HardDrive,
    CheckCircle,
    AlertTriangle,
    TrendingUp,
} from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function Infrastructure() {
    const metrics = [
        {
            title: "System Uptime",
            value: "99.98%",
            status: "Excellent",
            icon: <Activity className="w-5 h-5 text-white" />,
            color: "bg-gradient-to-br from-emerald-500 to-green-400",
        },
        {
            title: "Active Servers",
            value: "8/8",
            status: "All Online",
            icon: <Server className="w-5 h-5 text-white" />,
            color: "bg-gradient-to-br from-blue-500 to-sky-400",
        },
        {
            title: "CPU Usage",
            value: "42%",
            status: "Normal",
            icon: <Cpu className="w-5 h-5 text-white" />,
            color: "bg-gradient-to-br from-violet-500 to-purple-400",
        },
        {
            title: "Storage Used",
            value: "68%",
            status: "Normal",
            icon: <HardDrive className="w-5 h-5 text-white" />,
            color: "bg-gradient-to-br from-amber-500 to-yellow-400",
        },
    ];

    const systemData = [
        { time: "00:00", cpu: 120, storage: 40 },
        { time: "04:00", cpu: 70, storage: 30 },
        { time: "08:00", cpu: 280, storage: 60 },
        { time: "12:00", cpu: 410, storage: 80 },
        { time: "16:00", cpu: 360, storage: 75 },
        { time: "20:00", cpu: 160, storage: 50 },
    ];

    const servers = [
        {
            name: "PBX Server 1",
            region: "US East",
            cpu: 45,
            memory: 62,
            disk: 58,
            uptime: "45 days",
            status: "Healthy",
        },
        {
            name: "PBX Server 2",
            region: "US West",
            cpu: 38,
            memory: 55,
            disk: 62,
            uptime: "45 days",
            status: "Healthy",
        },
        {
            name: "Database Server",
            region: "US East",
            cpu: 52,
            memory: 78,
            disk: 71,
            uptime: "90 days",
            status: "Healthy",
        },
        {
            name: "Media Server 1",
            region: "US Central",
            cpu: 68,
            memory: 72,
            disk: 45,
            uptime: "30 days",
            status: "Warning",
        },
    ];

    const alerts = [
        {
            title: "Media Server 1 CPU usage above 65%",
            server: "Media Server 1",
            time: "5 min ago",
            icon: <AlertTriangle className="w-4 h-4 text-amber-500" />,
        },
        {
            title: "Scheduled maintenance completed successfully",
            server: "All Servers",
            time: "2 hours ago",
            icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
        },
        {
            title: "Database backup completed",
            server: "Database Server",
            time: "3 hours ago",
            icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
        },
    ];

    return (
        <div className="p-2 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Infrastructure Monitoring
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                    Real-time health and performance overview of your infrastructure
                </p>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {metrics.map((item) => (
                    <div
                        key={item.title}
                        className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 flex items-center gap-4"
                    >
                        <div
                            className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center shadow-inner`}
                        >
                            {item.icon}
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">{item.title}</p>
                            <h3 className="text-2xl font-semibold text-gray-800">
                                {item.value}
                            </h3>
                            <p className="text-xs text-gray-400 mt-1">{item.status}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* System Performance Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
                <h3 className="text-gray-800 font-semibold mb-4 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-blue-500" />
                    System Performance (Last 24 Hours)
                </h3>

                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={systemData}>
                        {/* Subtle grid for modern feel */}
                        <CartesianGrid strokeDasharray="4 4" stroke="#f0f0f0" />

                        {/* Axis styling */}
                        <XAxis
                            dataKey="time"
                            stroke="#9ca3af"
                            tickLine={false}
                            axisLine={{ stroke: "#e5e7eb" }}
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis
                            stroke="#9ca3af"
                            tickLine={false}
                            axisLine={{ stroke: "#e5e7eb" }}
                            tick={{ fontSize: 12 }}
                        />

                        {/* Soft tooltip */}
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#ffffffee",
                                borderRadius: "10px",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                            }}
                            labelStyle={{ fontWeight: 600, color: "#111" }}
                        />

                        {/* Gradient Fills for soft area effect */}
                        <defs>
                            <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.25} />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
                            </linearGradient>
                            <linearGradient id="storageGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.25} />
                                <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.05} />
                            </linearGradient>
                        </defs>

                        {/* CPU Usage Line */}
                        <Line
                            type="monotone"
                            dataKey="cpu"
                            stroke="#3b82f6"
                            strokeWidth={2.5}
                            fill="url(#cpuGradient)"
                            fillOpacity={1}
                            dot={{
                                r: 4,
                                fill: "#3b82f6",
                                strokeWidth: 2,
                                stroke: "#fff",
                            }}
                            activeDot={{
                                r: 6,
                                stroke: "#3b82f6",
                                fill: "#fff",
                                strokeWidth: 2,
                            }}
                        />

                        {/* Storage Usage Line */}
                        <Line
                            type="monotone"
                            dataKey="storage"
                            stroke="#f59e0b"
                            strokeWidth={2.5}
                            fill="url(#storageGradient)"
                            fillOpacity={1}
                            dot={{
                                r: 4,
                                fill: "#f59e0b",
                                strokeWidth: 2,
                                stroke: "#fff",
                            }}
                            activeDot={{
                                r: 6,
                                stroke: "#f59e0b",
                                fill: "#fff",
                                strokeWidth: 2,
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>

                {/* Legend */}
                <div className="flex items-center gap-6 mt-5 text-sm text-gray-600 justify-center">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-500 shadow-sm"></span> CPU Usage
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-amber-500 shadow-sm"></span> Storage Used
                    </div>
                </div>
            </div>


            {/* Server Status & Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Server Status */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
                    <h3 className="text-gray-800 font-semibold mb-4">Server Status</h3>

                    <div className="space-y-4">
                        {servers.map((server) => (
                            <div
                                key={server.name}
                                className="bg-gradient-to-br from-sky-50 to-blue-50 p-5 rounded-lg border border-blue-100 hover:shadow-md transition-all"
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <div>
                                        <h4 className="text-gray-800 font-semibold flex items-center gap-2">
                                            <Server className="w-4 h-4 text-violet-600" />
                                            {server.name}
                                        </h4>
                                        <p className="text-xs text-gray-500">{server.region}</p>
                                    </div>
                                    <span
                                        className={`text-xs px-3 py-1 rounded-full font-medium ${server.status === "Healthy"
                                            ? "bg-emerald-100 text-emerald-700"
                                            : "bg-amber-100 text-amber-700"
                                            }`}
                                    >
                                        {server.status}
                                    </span>
                                </div>

                                {/* Resource Bars */}
                                {["cpu", "memory", "disk"].map((key) => (
                                    <div key={key} className="mb-3">
                                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                                            <span className="capitalize">{key}</span>
                                            <span>{server[key]}%</span>
                                        </div>
                                        <div className="w-full bg-blue-100 h-2 rounded-full overflow-hidden">
                                            <div
                                                className={`h-2 ${server.status === "Warning"
                                                    ? "bg-amber-400"
                                                    : "bg-sky-500"
                                                    } rounded-full transition-all`}
                                                style={{ width: `${server[key]}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                                <p className="text-xs text-gray-500 mt-1">
                                    Uptime: {server.uptime}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* System Alerts */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-800 font-semibold mb-4">System Alerts</h3>
                    <div className="space-y-3">
                        {alerts.map((alert, i) => (
                            <div
                                key={i}
                                className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100 flex items-start gap-3 transition-all"
                            >
                                <div className="mt-1">{alert.icon}</div>
                                <div>
                                    <p className="text-sm font-medium text-gray-800">
                                        {alert.title}
                                    </p>
                                    <p className="text-xs text-gray-500">{alert.server}</p>
                                    <p className="text-xs text-gray-400 mt-0.5">{alert.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Infrastructure;
