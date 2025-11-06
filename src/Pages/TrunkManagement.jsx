import React, { useState } from "react";
import {
	Network,
	User,
	KeyRound,
	Edit2,
	Trash2,
	PhoneIncoming,
	PhoneOutgoing,
	Plus,
	ArrowRightLeft,
} from "lucide-react";

function TrunkManagement() {
	// Modals & tab state
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [addActiveTab, setAddActiveTab] = useState("basic");

	const [isRoutesModalOpen, setIsRoutesModalOpen] = useState(false);
	const [routesActiveTab, setRoutesActiveTab] = useState("inbound");


	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [editActiveTab, setEditActiveTab] = useState("basic");

	// Stats and sample trunk data
	const stats = [
		{ title: "Total Trunks", value: "3" },
		{ title: "Active Trunks", value: "2" },
		{ title: "Total Channels", value: "105" },
		{ title: "Active Channels", value: "20" },
	];

	const trunks = [
		{
			name: "Primary SIP Trunk - US",
			carrier: "Carrier A",
			authType: "Username",
			host: "sip.carrier-a.com",
			protocol: "UDP:5060",
			channels: "12 / 50",
			routes: { inbound: 2, outbound: 2 },
			status: "Active",
		},
		{
			name: "Backup Trunk - US",
			carrier: "Carrier B",
			authType: "IP Auth",
			host: "backup.carrier-b.com",
			protocol: "UDP:5060",
			channels: "0 / 30",
			routes: { inbound: 0, outbound: 1 },
			status: "Standby",
		},
	];

	return (
		<div className="p-4 bg-gray-50 min-h-screen">
			{/* Header */}
			<div className="flex justify-between items-center mb-6">
				<div>
					<h2 className="text-2xl font-semibold text-gray-800 mb-1">
						Trunk Management
					</h2>
					<p className="text-sm text-gray-600">
						Configure SIP trunks and manage inbound/outbound routing
					</p>
				</div>

				<button
					onClick={() => setIsAddModalOpen(true)}
					className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-lg shadow transition"
				>
					<Plus className="w-4 h-4" />
					Add Trunk
				</button>
			</div>

			{/* Stats */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
				{stats.map((stat, idx) => (
					<div
						key={idx}
						className="bg-white p-5 rounded-xl shadow-sm border border-gray-100"
					>
						<p className="text-sm text-gray-500">{stat.title}</p>
						<h3 className="text-2xl font-semibold text-gray-800 mt-2">
							{stat.value}
						</h3>
					</div>
				))}
			</div>

			{/* Table */}
			<div className="bg-white rounded-xl shadow-md border border-gray-100">
				<table className="w-full text-sm text-gray-700">
					<thead>
						<tr className="bg-gray-50 text-left text-gray-700 border-b">
							<th className="py-3 px-4">Trunk Name</th>
							<th className="py-3 px-4">Carrier</th>
							<th className="py-3 px-4">Auth Type</th>
							<th className="py-3 px-4">Host</th>
							<th className="py-3 px-4 text-center">Channels</th>
							<th className="py-3 px-4 text-center">Routes</th>
							<th className="py-3 px-4 text-center">Status</th>
							<th className="py-3 px-4 text-center">Actions</th>
						</tr>
					</thead>
					<tbody>
						{trunks.map((trunk, idx) => (
							<tr
								key={idx}
								className="border-b hover:bg-gray-50 transition duration-200"
							>
								<td className="py-3 px-4 flex items-center gap-2">
									<Network className="text-blue-500 w-4 h-4" />
									<span className="font-medium text-gray-800">{trunk.name}</span>
								</td>
								<td className="py-3 px-4">{trunk.carrier}</td>
								<td className="py-3 px-4">
									<span
										className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${trunk.authType === "Username"
											? "bg-blue-100 text-blue-700"
											: "bg-green-100 text-green-700"
											}`}
									>
										{trunk.authType === "Username" ? (
											<User className="w-3 h-3" />
										) : (
											<KeyRound className="w-3 h-3" />
										)}
										{trunk.authType}
									</span>
								</td>
								<td className="py-3 px-4">
									<div>
										<p>{trunk.host}</p>
										<p className="text-xs text-gray-500">{trunk.protocol}</p>
									</div>
								</td>
								<td className="py-3 px-4 text-center">{trunk.channels}</td>
								<td className="py-3 px-4 text-center">
									<div className="flex items-center justify-center gap-3 text-gray-600">
										<div className="flex items-center gap-1">
											<PhoneIncoming className="w-4 h-4" />
											<span>{trunk.routes.inbound}</span>
										</div>
										<div className="flex items-center gap-1">
											<PhoneOutgoing className="w-4 h-4" />
											<span>{trunk.routes.outbound}</span>
										</div>
									</div>
								</td>
								<td className="py-3 px-4 text-center">
									<span
										className={`px-3 py-1 rounded-full text-xs font-semibold ${trunk.status === "Active"
											? "bg-blue-100 text-blue-700"
											: "bg-yellow-100 text-yellow-700"
											}`}
									>
										{trunk.status}
									</span>
								</td>
								<td className="py-3 px-4 text-center">
									<div className="flex justify-center items-center gap-2">
										<button
											onClick={() => setIsRoutesModalOpen(true)}
											className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md"
										>
											<ArrowRightLeft className="w-4 h-4" />
										</button>
										<button
											onClick={() => setIsEditModalOpen(true)}
											className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md"
										>
											<Edit2 className="w-4 h-4" />
										</button>
										<button className="p-2 bg-red-50 hover:bg-red-100 text-red-500 rounded-md">
											<Trash2 className="w-4 h-4" />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Add Trunk Modal */}
			{isAddModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
					<div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
						<div className="flex justify-between items-start">
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								Add New SIP Trunk
							</h3>
							<button
								onClick={() => setIsAddModalOpen(false)}
								className="text-gray-500 hover:text-gray-700"
							>
								✕
							</button>
						</div>

						{/* Tabs */}
						<div className="flex border-b mb-4">
							<button
								className={`flex-1 py-2 text-sm font-medium ${addActiveTab === "basic"
									? "text-orange-600 border-b-2 border-orange-500"
									: "text-gray-500"
									}`}
								onClick={() => setAddActiveTab("basic")}
							>
								Basic Settings
							</button>
							<button
								className={`flex-1 py-2 text-sm font-medium ${addActiveTab === "advanced"
									? "text-orange-600 border-b-2 border-orange-500"
									: "text-gray-500"
									}`}
								onClick={() => setAddActiveTab("advanced")}
							>
								Advanced Settings
							</button>
						</div>

						{/* Add Trunk Content */}
						{addActiveTab === "basic" ? (
							<div className="space-y-3">
								<div>
									<label className="block text-sm font-medium text-gray-700">
										Trunk Name
									</label>
									<input
										type="text"
										className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
										placeholder="Primary SIP Trunk - US"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700">
										Carrier Name
									</label>
									<input
										type="text"
										className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
										placeholder="Carrier A"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700">
										SIP Host/IP
									</label>
									<input
										type="text"
										className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
										placeholder="sip.carrier-a.com"
									/>
								</div>

								<div className="grid grid-cols-2 gap-3">
									<div>
										<label className="block text-sm font-medium text-gray-700">
											Port
										</label>
										<input
											type="text"
											className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
											defaultValue="5060"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700">
											Protocol
										</label>
										<select className="w-full mt-1 border rounded-md px-3 py-2 text-sm">
											<option>UDP</option>
											<option>TCP</option>
										</select>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700">
										Authentication Method
									</label>
									<div className="flex gap-6 mt-2">
										<label className="flex items-center gap-2 text-sm">
											<input type="radio" name="auth" defaultChecked />
											<span>Username & Password</span>
										</label>
										<label className="flex items-center gap-2 text-sm">
											<input type="radio" name="auth" />
											<span>IP Authentication</span>
										</label>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700">
										Username
									</label>
									<input
										type="text"
										className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
										placeholder="trunk_user_001"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700">
										Password
									</label>
									<input
										type="password"
										className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
										placeholder="••••••••"
									/>
								</div>
							</div>
						) : (
							<div className="space-y-3">
								<div>
									<label className="block text-sm font-medium text-gray-700">
										Maximum Channels
									</label>
									<input
										type="number"
										className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
										placeholder="50"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700">
										Codec
									</label>
									<select className="w-full mt-1 border rounded-md px-3 py-2 text-sm">
										<option>G.711 (ulaw/alaw)</option>
										<option>G.729</option>
									</select>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700">
										DTMF Mode
									</label>
									<select className="w-full mt-1 border rounded-md px-3 py-2 text-sm">
										<option>RFC2833</option>
										<option>In-band</option>
										<option>SIP INFO</option>
									</select>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700">
										Status
									</label>
									<select className="w-full mt-1 border rounded-md px-3 py-2 text-sm">
										<option>Active</option>
										<option>Inactive</option>
									</select>
								</div>
							</div>
						)}

						{/* Buttons */}
						<div className="mt-6 flex justify-end gap-3">
							<button
								onClick={() => setIsAddModalOpen(false)}
								className="px-4 py-2 border rounded-md text-gray-700"
							>
								Cancel
							</button>
							<button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
								Create Trunk
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Manage Routes Modal */}
			{isRoutesModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
					<div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative overflow-y-auto max-h-[90vh]">
						<div className="flex justify-between items-start">
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								Manage Routes - Primary SIP Trunk - US
							</h3>
							<button
								onClick={() => setIsRoutesModalOpen(false)}
								className="text-gray-500 hover:text-gray-700"
							>
								✕
							</button>
						</div>

						{/* Tabs */}
						<div className="flex border-b mb-4">
							<button
								className={`flex-1 py-2 text-sm font-medium ${routesActiveTab === "inbound"
									? "text-blue-600 border-b-2 border-blue-500"
									: "text-gray-500"
									}`}
								onClick={() => setRoutesActiveTab("inbound")}
							>
								<PhoneIncoming className="inline-block w-4 h-4 mr-1" />
								Inbound Routes (2)
							</button>
							<button
								className={`flex-1 py-2 text-sm font-medium ${routesActiveTab === "outbound"
									? "text-green-600 border-b-2 border-green-500"
									: "text-gray-500"
									}`}
								onClick={() => setRoutesActiveTab("outbound")}
							>
								<PhoneOutgoing className="inline-block w-4 h-4 mr-1" />
								Outbound Routes (2)
							</button>
						</div>

						{/* Inbound */}
						{routesActiveTab === "inbound" && (
							<div>
								<div className="border rounded-lg p-4 bg-blue-50 mb-4">
									<h4 className="font-medium text-sm mb-3">Add Inbound Route</h4>
									<div className="grid grid-cols-2 gap-3">
										<input
											type="text"
											placeholder="DID Number"
											className="border rounded-md px-3 py-2 text-sm"
										/>
										<select className="border rounded-md px-3 py-2 text-sm">
											<option>Extension</option>
											<option>Ring Group</option>
										</select>
										<input
											type="text"
											placeholder="Destination"
											className="border rounded-md px-3 py-2 text-sm col-span-2"
										/>
										<input
											type="text"
											placeholder="Description"
											className="border rounded-md px-3 py-2 text-sm col-span-2"
										/>
									</div>
									<button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700">
										+ Add Inbound Route
									</button>
								</div>

								<table className="w-full text-sm mb-3">
									<thead>
										<tr className="bg-gray-50 text-left text-gray-600">
											<th className="py-2 px-3">DID Number</th>
											<th>Type</th>
											<th>Destination</th>
											<th>Description</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr className="border-b">
											<td className="py-2 px-3">+12025551234</td>
											<td>
												<span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
													extension
												</span>
											</td>
											<td>1001</td>
											<td>Main Line</td>
											<td>
												<button className="text-red-500 hover:text-red-600">
													<Trash2 className="w-4 h-4" />
												</button>
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3">+12025555678</td>
											<td>
												<span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
													ring-group
												</span>
											</td>
											<td>sales-group</td>
											<td>Sales Team</td>
											<td>
												<button className="text-red-500 hover:text-red-600">
													<Trash2 className="w-4 h-4" />
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						)}

						{/* Outbound */}
						{routesActiveTab === "outbound" && (
							<div>
								<div className="border rounded-lg p-4 bg-green-50 mb-4">
									<h4 className="font-medium text-sm mb-3">Add Outbound Route</h4>
									<div className="grid grid-cols-2 gap-3">
										<input
											type="text"
											placeholder="Dial Pattern"
											className="border rounded-md px-3 py-2 text-sm"
										/>
										<input
											type="text"
											placeholder="Prefix (optional)"
											className="border rounded-md px-3 py-2 text-sm"
										/>
										<input
											type="number"
											placeholder="Priority"
											className="border rounded-md px-3 py-2 text-sm"
										/>
										<input
											type="text"
											placeholder="Description"
											className="border rounded-md px-3 py-2 text-sm"
										/>
									</div>
									<button className="mt-3 w-full bg-green-600 text-white py-2 rounded-md text-sm font-medium hover:bg-green-700">
										+ Add Outbound Route
									</button>
								</div>

								<table className="w-full text-sm mb-3">
									<thead>
										<tr className="bg-gray-50 text-left text-gray-600">
											<th className="py-2 px-3">Pattern</th>
											<th>Prefix</th>
											<th>Priority</th>
											<th>Description</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr className="border-b">
											<td className="py-2 px-3">1NXXNXXXXXX</td>
											<td>-</td>
											<td>1</td>
											<td>US Calls</td>
											<td>
												<button className="text-red-500 hover:text-red-600">
													<Trash2 className="w-4 h-4" />
												</button>
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3">011X.</td>
											<td>-</td>
											<td>2</td>
											<td>International</td>
											<td>
												<button className="text-red-500 hover:text-red-600">
													<Trash2 className="w-4 h-4" />
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						)}

						<div className="flex justify-end gap-3 mt-4">
							<button
								onClick={() => setIsRoutesModalOpen(false)}
								className="px-4 py-2 border rounded-md text-gray-700"
							>
								Cancel
							</button>
							<button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
								Save Routes
							</button>
						</div>
					</div>
				</div>
			)}
			{/*  Edit SIP Trunk Modal */}
			{isEditModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
					<div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
						<div className="flex justify-between items-start">
							<h3 className="text-lg font-semibold text-gray-800 mb-1">Edit SIP Trunk</h3>
							<button
								onClick={() => setIsEditModalOpen(false)}
								className="text-gray-500 hover:text-gray-700"
							>
								✕
							</button>
						</div>

						<p className="text-sm text-gray-500 mb-4">
							Update SIP trunk configuration and settings
						</p>

						{/* Tabs */}
						<div className="flex border-b mb-4">
							<button
								className={`flex-1 py-2 text-sm font-medium ${editActiveTab === "basic"
										? "text-orange-600 border-b-2 border-orange-500"
										: "text-gray-500"
									}`}
								onClick={() => setEditActiveTab("basic")}
							>
								Basic Settings
							</button>
							<button
								className={`flex-1 py-2 text-sm font-medium ${editActiveTab === "advanced"
										? "text-orange-600 border-b-2 border-orange-500"
										: "text-gray-500"
									}`}
								onClick={() => setEditActiveTab("advanced")}
							>
								Advanced Settings
							</button>
						</div>

						{/* Tab Content */}
						{editActiveTab === "basic" ? (
							<div className="space-y-3">
								<div>
									<label className="block text-sm font-medium text-gray-700">Trunk Name</label>
									<input
										type="text"
										className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
										defaultValue="Primary SIP Trunk - US"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700">Carrier Name</label>
									<input
										type="text"
										className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
										defaultValue="Carrier A"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700">SIP Host/IP</label>
									<input
										type="text"
										className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
										defaultValue="sip.carrier-a.com"
									/>
								</div>

								<div className="grid grid-cols-2 gap-3">
									<div>
										<label className="block text-sm font-medium text-gray-700">Port</label>
										<input
											type="text"
											className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
											defaultValue="5060"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700">Protocol</label>
										<select className="w-full mt-1 border rounded-md px-3 py-2 text-sm">
											<option>UDP</option>
											<option>TCP</option>
										</select>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700">Authentication Method</label>
									<div className="flex gap-6 mt-2">
										<label className="flex items-center gap-2 text-sm">
											<input type="radio" name="auth" defaultChecked />
											<span>Username & Password</span>
										</label>
										<label className="flex items-center gap-2 text-sm">
											<input type="radio" name="auth" />
											<span>IP Authentication</span>
										</label>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700">Username</label>
									<input
										type="text"
										className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
										defaultValue="trunk_user_001"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700">Password</label>
									<input
										type="password"
										className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
										defaultValue="********"
									/>
								</div>
							</div>
						) : (
							<div className="space-y-3">
								<div>
									<label className="block text-sm font-medium text-gray-700">Maximum Channels</label>
									<input
										type="number"
										className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
										defaultValue="50"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700">Codec</label>
									<select className="w-full mt-1 border rounded-md px-3 py-2 text-sm">
										<option>G.711 (ulaw/alaw)</option>
										<option>G.729</option>
									</select>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700">DTMF Mode</label>
									<select className="w-full mt-1 border rounded-md px-3 py-2 text-sm">
										<option>RFC2833</option>
										<option>In-band</option>
										<option>SIP INFO</option>
									</select>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700">Status</label>
									<select className="w-full mt-1 border rounded-md px-3 py-2 text-sm">
										<option>Active</option>
										<option>Inactive</option>
									</select>
								</div>
							</div>
						)}

						{/* Buttons */}
						<div className="mt-6 flex justify-end gap-3">
							<button
								onClick={() => setIsEditModalOpen(false)}
								className="px-4 py-2 border rounded-md text-gray-700"
							>
								Cancel
							</button>
							<button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
								Update Trunk
							</button>
						</div>
					</div>
				</div>
			)}

		</div>
	);
}

export default TrunkManagement;
