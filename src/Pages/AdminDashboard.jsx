import {
	Phone,
	PhoneIncoming,
	PhoneMissed,
	Clock,
	PhoneCall,
	Users,
	Download,
	Info,
	AlertCircle
} from "lucide-react";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid,
	PieChart,
	Pie,
	Cell,
	Legend
} from "recharts";

const AdminDashboard = () => {
	const weeklyData = [
		{ day: "Mon", received: 95, missed: 10 },
		{ day: "Tue", received: 98, missed: 8 },
		{ day: "Wed", received: 92, missed: 7 },
		{ day: "Thu", received: 120, missed: 14 },
		{ day: "Fri", received: 100, missed: 8 },
		{ day: "Sat", received: 80, missed: 6 },
		{ day: "Sun", received: 65, missed: 5 },
	];

	const pieData = [
		{ name: "United States", value: 53 },
		{ name: "Canada", value: 19 },
		{ name: "United Kingdom", value: 12 },
		{ name: "Other", value: 16 },
	];


	const COLORS = ["#3b82f6", "#06b6d4", "#8b5cf6", "#f59e0b"];


	// Explicit color map for Tailwind (avoids dynamic class issues)
	const colorMap = {
		blue: "bg-blue-500 text-white",
		green: "bg-green-500 text-white",
		red: "bg-red-500 text-white",
		yellow: "bg-yellow-500 text-white",
	};

	const cards = [
		{
			title: "Total Calls",
			value: "1,284",
			icon: <Phone className="w-6 h-6" />,
			change: "+8%",
			bg: "blue",
		},
		{
			title: "Received Calls",
			value: "678",
			icon: <PhoneIncoming className="w-6 h-6" />,
			change: "+10%",
			bg: "green",
		},
		{
			title: "Missed Calls",
			value: "78",
			icon: <PhoneMissed className="w-6 h-6" />,
			change: "-3%",
			bg: "red",
		},
		{
			title: "Total Duration",
			value: "248h 35m",
			icon: <Clock className="w-6 h-6" />,
			change: "+15%",
			bg: "yellow",
		},
	];

	const loggedInExtensions = [
		{
			extension: "101",
			agent: "John Smith",
			location: "New York Office",
			status: "Available",
			loginTime: "08:15 AM",
			duration: "3h 45m",
			color: "bg-green-100 text-green-700",
		},
		{
			extension: "102",
			agent: "Sarah Wilson",
			location: "Remote",
			status: "On Call",
			loginTime: "08:30 AM",
			duration: "3h 30m",
			color: "bg-blue-100 text-blue-700",
		},
		{
			extension: "103",
			agent: "Mike Johnson",
			location: "Boston Office",
			status: "Available",
			loginTime: "09:00 AM",
			duration: "3h 00m",
			color: "bg-green-100 text-green-700",
		},
		{
			extension: "105",
			agent: "Emily Davis",
			location: "Remote",
			status: "Busy",
			loginTime: "08:45 AM",
			duration: "3h 15m",
			color: "bg-orange-100 text-orange-700",
		},
		{
			extension: "107",
			agent: "Tom Brown",
			location: "Chicago Office",
			status: "Available",
			loginTime: "08:20 AM",
			duration: "3h 40m",
			color: "bg-green-100 text-green-700",
		},
	];

	const activeCalls = [
		{
			extension: "102",
			agent: "Sarah Wilson",
			customer: "+1 234 567 8900",
			company: "ABC Corp",
			direction: "Inbound",
			duration: "5:42",
			tagColor: "bg-blue-100 text-blue-700",
		},
		{
			extension: "105",
			agent: "Emily Davis",
			customer: "+1 234 567 8901",
			company: "XYZ Industries",
			direction: "Outbound",
			duration: "2:15",
			tagColor: "bg-pink-100 text-pink-700",
		},
		{
			extension: "109",
			agent: "David Lee",
			customer: "+1 234 567 8902",
			company: "Tech Solutions",
			direction: "Inbound",
			duration: "8:30",
			tagColor: "bg-blue-100 text-blue-700",
		},
	];

	const cdrData = [
		{
			id: "CDR-2024-001",
			date: "2024-11-01 11:45:23",
			from: "+1 234 567 8900",
			to: "101 (John Smith)",
			direction: "Inbound",
			duration: "5:42",
			cost: "$0.45",
			status: "Completed",
			reason: "Normal Clearing",
			hangupBy: "Customer",
		},
		{
			id: "CDR-2024-002",
			date: "2024-11-01 11:42:10",
			from: "102 (Sarah Wilson)",
			to: "+1 234 567 8901",
			direction: "Outbound",
			duration: "3:15",
			cost: "$0.28",
			status: "Completed",
			reason: "Normal Clearing",
			hangupBy: "Agent",
		},
		{
			id: "CDR-2024-003",
			date: "2024-11-01 11:38:45",
			from: "+1 234 567 8902",
			to: "IVR Menu",
			direction: "Inbound",
			duration: "0:45",
			cost: "$0.05",
			status: "Abandoned",
			reason: "No Answer",
			hangupBy: "System",
		},
		{
			id: "CDR-2024-004",
			date: "2024-11-01 11:35:12",
			from: "+1 234 567 8903",
			to: "103 (Mike Johnson)",
			direction: "Inbound",
			duration: "0:00",
			cost: "$0.00",
			status: "Failed",
			reason: "User Busy",
			hangupBy: "System",
		},
		{
			id: "CDR-2024-005",
			date: "2024-11-01 11:30:55",
			from: "105 (Emily Davis)",
			to: "+1 234 567 8904",
			direction: "Outbound",
			duration: "12:30",
			cost: "$1.05",
			status: "Completed",
			reason: "Normal Clearing",
			hangupBy: "Customer",
		},
	];

	const getDirectionColor = (dir) =>
		dir === "Inbound"
			? "bg-blue-100 text-blue-700"
			: "bg-purple-100 text-purple-700";

	const getStatusColor = (status) => {
		switch (status) {
			case "Completed":
				return "bg-green-100 text-green-700";
			case "Abandoned":
				return "bg-yellow-100 text-yellow-700";
			case "Failed":
				return "bg-red-100 text-red-700";
			default:
				return "bg-gray-100 text-gray-700";
		}
	};

	const reasons = [
		{
			title: "Normal Clearing",
			desc: "Call ended successfully by either party",
			calls: "1,156 calls",
			color: "text-green-700 bg-green-50 border-green-200",
			iconColor: "bg-green-500",
		},
		{
			title: "No Answer",
			desc: "Call was not answered within timeout period",
			calls: "78 calls",
			color: "text-orange-700 bg-orange-50 border-orange-200",
			iconColor: "bg-orange-500",
		},
		{
			title: "User Busy",
			desc: "Called party was busy on another call",
			calls: "32 calls",
			color: "text-red-700 bg-red-50 border-red-200",
			iconColor: "bg-red-500",
		},
		{
			title: "Call Rejected",
			desc: "Call was explicitly rejected by user",
			calls: "18 calls",
			color: "text-red-700 bg-red-50 border-red-200",
			iconColor: "bg-red-600",
		},
		{
			title: "Network Error",
			desc: "Call failed due to network issues",
			calls: "8 calls",
			color: "text-rose-700 bg-rose-50 border-rose-200",
			iconColor: "bg-rose-600",
		},
		{
			title: "Other Reasons",
			desc: "Various other termination causes",
			calls: "12 calls",
			color: "text-gray-700 bg-gray-50 border-gray-200",
			iconColor: "bg-gray-600",
		},
	];

	return (
		<div className="p-2 bg-gray-50 min-h-screen">

			<h2 className="text-2xl font-semibold text-gray-800 mb-6">
				Admin Dashboard
			</h2>

			{/* Top Stats */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
				{cards.map((card) => (
					<div
						key={card.title}
						className="bg-white rounded-xl shadow-lg p-5 flex items-center justify-between hover:shadow-sm transition-shadow duration-300"
					>
						<div className="flex items-center gap-4">
							<div className={`p-3 rounded-xl ${colorMap[card.bg]}`}>
								{card.icon}
							</div>
							<div>
								<p className="text-sm text-gray-500">{card.title}</p>
								<h3 className="text-md font-semibold text-gray-800">
									{card.value}
								</h3>
							</div>
						</div>
						<div>
							<span
								className={`text-xs font-medium ${card.change.startsWith("-")
									? "text-red-500"
									: "text-green-500"
									}`}
							>
								{card.change}
							</span>
						</div>
					</div>
				))}
			</div>

			{/* Charts Section */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Line Chart */}
				<div className="bg-white rounded-xl shadow p-6 border border-gray-100 lg:col-span-2">
					<h3 className="text-gray-800 font-semibold mb-1">
						Weekly Call Analytics
					</h3>
					<p className="text-gray-500 text-sm mb-6">
						Last 7 days performance overview
					</p>

					<ResponsiveContainer width="100%" height={280}>
						<LineChart data={weeklyData}>
							<CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
							<XAxis dataKey="day" stroke="#9ca3af" />
							<YAxis stroke="#9ca3af" />
							<Tooltip
								contentStyle={{
									backgroundColor: "#fff",
									borderRadius: "8px",
									border: "1px solid #e5e7eb",
									boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
								}}
							/>
							<Line
								type="monotone"
								dataKey="received"
								stroke="#22c55e"
								fill="url(#colorReceived)"
								strokeWidth={2.5}
								dot={{ r: 4 }}
								activeDot={{ r: 6 }}
							/>
							<Line
								type="monotone"
								dataKey="missed"
								stroke="#ef4444"
								fill="url(#colorMissed)"
								strokeWidth={2.5}
								dot={{ r: 4 }}
								activeDot={{ r: 6 }}
							/>
							<defs>
								<linearGradient id="colorReceived" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor="#22c55e" stopOpacity={0.2} />
									<stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
								</linearGradient>
								<linearGradient id="colorMissed" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor="#ef4444" stopOpacity={0.2} />
									<stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
								</linearGradient>
							</defs>
						</LineChart>
					</ResponsiveContainer>

					<div className="flex justify-between items-center mt-6 text-gray-700 text-sm">
						<div className="flex items-center gap-2">
							<span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
							<span>Total Calls</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
							<span>Success Rate</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></span>
							<span>Avg per Day</span>
						</div>
					</div>

					<div className="flex justify-between mt-2 text-gray-800 font-semibold text-sm">
						<span>678</span>
						<span className="text-green-600">89.7%</span>
						<span>97</span>
					</div>
				</div>

				{/* Pie Chart - Calls by Destination */}
				<div className="bg-white rounded-2xl shadow p-6 border border-gray-100 flex flex-col items-center">
					<h3 className="text-gray-800 font-semibold mb-4 self-start">
						Calls by Destination
					</h3>

					{/* Chart */}
					<ResponsiveContainer width="100%" height={260}>
						<PieChart>
							<Pie
								data={pieData}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								outerRadius={80}
								label={({ name, percent }) =>
									`${name}: ${(percent * 100).toFixed(0)}%`
								}
							>
								{pieData.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
									/>
								))}
							</Pie>
							<Tooltip
								contentStyle={{
									backgroundColor: "#fff",
									borderRadius: "8px",
									border: "1px solid #e5e7eb",
									boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
								}}
							/>
						</PieChart>
					</ResponsiveContainer>

					{/* Custom Legend */}
					<div className="mt-4 w-full">
						<div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
							<div className="flex items-center gap-2">
								<span className="w-3 h-3 bg-blue-600 rounded-full"></span>
								<span>United States</span>
							</div>
							<div className="text-right text-gray-600">680 calls</div>

							<div className="flex items-center gap-2">
								<span className="w-3 h-3 bg-cyan-400 rounded-full"></span>
								<span>Canada</span>
							</div>
							<div className="text-right text-gray-600">245 calls</div>

							<div className="flex items-center gap-2">
								<span className="w-3 h-3 bg-violet-500 rounded-full"></span>
								<span>United Kingdom</span>
							</div>
							<div className="text-right text-gray-600">158 calls</div>

							<div className="flex items-center gap-2">
								<span className="w-3 h-3 bg-amber-400 rounded-full"></span>
								<span>Other</span>
							</div>
							<div className="text-right text-gray-600">201 calls</div>
						</div>
					</div>
				</div>
			</div>


			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 mt-6">
				<div className="bg-white rounded-xl shadow-lg hover:shadow-sm transition-shadow duration-300 p-6 border border-gray-100">
					<div className="flex justify-between items-center mb-8">
						<div className="flex items-center gap-2">
							<Users className="text-purple-600 w-6 h-6" />
							<h2 className="text-gray-800 text-xl">
								Logged-in Extensions
							</h2>
						</div>
						<span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-lg">
							5 Active
						</span>
					</div>

					<table className="w-full text-sm text-gray-600">
						<thead>
							<tr className="text-left border-b border-gray-300">
								<th className="pb-2">Extension</th>
								<th className="pb-2">Agent</th>
								<th className="pb-2">Status</th>
								<th className="pb-2">Login Time</th>
								<th className="pb-2">Duration</th>
							</tr>
						</thead>
						<tbody>
							{loggedInExtensions.map((ext) => (
								<tr
									key={ext.extension}
									className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
								>
									<td className="py-2 font-medium text-gray-800">
										{ext.extension}
									</td>
									<td className="py-2">
										<div className="flex flex-col">
											<span className="font-medium text-gray-700">
												{ext.agent}
											</span>
											<span className="text-xs text-gray-400">
												{ext.location}
											</span>
										</div>
									</td>
									<td className="py-2">
										<span
											className={`text-xs px-2 py-1 rounded-full font-medium ${ext.color}`}
										>
											{ext.status}
										</span>
									</td>
									<td className="py-2">{ext.loginTime}</td>
									<td className="py-2">{ext.duration}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div className="bg-white rounded-xl shadow-lg hover:shadow-sm transition-shadow duration-300 p-6 border border-gray-100">
					<div className="flex justify-between items-center mb-8">
						<div className="flex items-center gap-2">
							<PhoneCall className="text-green-600 w-6 h-6" />
							<h2 className="text-gray-800 text-xl">Active Calls</h2>
						</div>
						<span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-lg">
							3 Live
						</span>
					</div>

					<table className="w-full text-sm text-gray-600">
						<thead>
							<tr className="text-left border-b border-gray-300">
								<th className="pb-2">Extension</th>
								<th className="pb-2">Agent</th>
								<th className="pb-2">Customer</th>
								<th className="pb-2">Direction</th>
								<th className="pb-2">Duration</th>
							</tr>
						</thead>
						<tbody>
							{activeCalls.map((call) => (
								<tr
									key={call.extension}
									className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
								>
									<td className="py-2 font-medium text-gray-800">
										{call.extension}
									</td>
									<td className="py-2">{call.agent}</td>
									<td className="py-2">
										<div className="flex flex-col">
											<span className="font-medium text-gray-700">
												{call.customer}
											</span>
											<span className="text-xs text-gray-400">
												{call.company}
											</span>
										</div>
									</td>
									<td className="py-2">
										<span
											className={`text-xs px-2 py-1 rounded-full font-medium ${call.tagColor}`}
										>
											{call.direction}
										</span>
									</td>
									<td className="py-2">{call.duration}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className="bg-white rounded-xl shadow-lg hover:shadow-sm transition-shadow duration-300 p-6 border border-gray-100 mt-6">
				{/* Header Section */}
				<div className="flex justify-between items-center mb-6">
					<div className="flex items-center gap-2">
						<PhoneCall className="text-indigo-600 w-6 h-6" />
						<h2 className="text-gray-800 text-xl">
							Recent Call Detail Records
						</h2>
					</div>
					<button className="flex items-center gap-2 bg-sky-50 text-sky-700 text-sm px-3 py-2 rounded-lg hover:bg-sky-100 transition">
						<Download className="w-4 h-4" />
						Export CDR
					</button>
				</div>

				{/* Table */}
				<div className="overflow-x-auto">
					<table className="w-full text-sm text-gray-700">
						<thead>
							<tr className="text-left border-b border-gray-200">
								<th className="text-sm ">Call ID</th>
								<th className="text-sm ">Date & Time</th>
								<th className="text-sm ">From</th>
								<th className="text-sm ">To</th>
								<th className="text-sm ">Direction</th>
								<th className="text-sm ">Duration</th>
								<th className="text-sm ">Cost</th>
								<th className="text-sm ">Status</th>
								<th className="text-sm ">Hangup Reason</th>
								<th className="text-sm ">Hangup By</th>
								<th className="text-sm text-center">Actions</th>
							</tr>
						</thead>

						<tbody>
							{cdrData.map((cdr) => (
								<tr key={cdr.id}
									className="border-b border-gray-200 hover:bg-gray-50 transition-colors ">
									<td className="py-4 text-indigo-600 font-medium hover:underline cursor-pointer">
										{cdr.id}
									</td>
									<td>{cdr.date}</td>
									<td>{cdr.from}</td>
									<td>{cdr.to}</td>
									<td>
										<span
											className={`text-xs px-2 py-1 rounded-full font-medium ${getDirectionColor(
												cdr.direction
											)}`}
										>
											{cdr.direction}
										</span>
									</td>
									<td>{cdr.duration}</td>
									<td>{cdr.cost}</td>
									<td>
										<span
											className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(
												cdr.status
											)}`}
										>
											{cdr.status}
										</span>
									</td>
									<td className="text-gray-700">
										{cdr.reason}
									</td>
									<td className="text-gray-700">
										{cdr.hangupBy}
									</td>
									<td className="text-center">
										<button className="text-gray-500 hover:text-gray-700">
											<Info className="w-4 h-4" />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className="bg-white rounded-xl shadow-lg hover:shadow-sm transition-shadow duration-300 p-6 border border-gray-100 mt-6 w-full">
				{/* Header */}
				<div className="flex items-center gap-2 mb-6">
					<AlertCircle className="text-amber-500 w-5 h-5" />
					<h2 className="text-gray-800 text-lg font-semibold">
						Call Hangup Reason Details
					</h2>
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{reasons.map((r) => (
						<div
							key={r.title}
							className={`p-4 rounded-lg border ${r.color} transition hover:shadow-sm`}
						>
							<div className="flex items-start gap-2 mb-2">
								<span
									className={`w-2 h-2 mt-2 rounded-full ${r.iconColor}`}
								></span>
								<div>
									<h3 className="font-semibold">{r.title}</h3>
									<p className="text-sm text-gray-600">{r.desc}</p>
								</div>
							</div>
							<p className="font-semibold text-lg mt-2">{r.calls}</p>
						</div>
					))}
				</div>
			</div>

		</div>
	);
};

export default AdminDashboard;
