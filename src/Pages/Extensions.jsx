import { useState } from "react";
import {
	User,
	Plus,
	Upload,
	Download,
	Edit,
	Trash2,
	RefreshCcw,
} from "lucide-react";
import Modal from "../Components/Modal";
import Input from "../Components/Input";
import Select from "../Components/Select";

function Extensions() {
	const [extensions, setExtensions] = useState([
		{
			number: "1006",
			name: "Extension 1006",
			email: "-",
			tenant: "Alpha",
			device: "Softphone",
			password: "JGtnbJTdjm5L",
			status: "Offline",
			voicemail: true,
		},
		{
			number: "1007",
			name: "Extension 1007",
			email: "-",
			tenant: "Alpha",
			device: "Softphone",
			password: "mKPptqHGsPfF",
			status: "Offline",
			voicemail: true,
		},
	]);

	const [showAddModal, setShowAddModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [showBulkModal, setShowBulkModal] = useState(false);

	const [newExtension, setNewExtension] = useState({
		number: "",
		name: "",
		email: "",
		password: "",
		device: "Softphone",
		tenant: "",
		voicemail: true,
	});

	const [editExtension, setEditExtension] = useState({
		number: "",
		name: "",
		email: "",
		device: "Softphone",
		status: "Offline",
		voicemail: true,
	});

	const [bulkForm, setBulkForm] = useState({
		count: 10,
		starting: 1000,
		tenant: "",
	});

	// Input Change Handlers
	const handleNewChange = (e) =>
		setNewExtension({ ...newExtension, [e.target.name]: e.target.value });
	const handleEditChange = (e) =>
		setEditExtension({ ...editExtension, [e.target.name]: e.target.value });
	const handleBulkChange = (e) =>
		setBulkForm({ ...bulkForm, [e.target.name]: e.target.value });

	// Add New Extension
	const handleAddExtension = (e) => {
		e.preventDefault();
		setExtensions([
			...extensions,
			{
				...newExtension,
				status: "Offline",
				email: newExtension.email || "-",
			},
		]);
		setShowAddModal(false);
		setNewExtension({
			number: "",
			name: "",
			email: "",
			password: "",
			device: "Softphone",
			tenant: "",
			voicemail: true,
		});
	};

	// Bulk Create Extensions
	const handleBulkCreate = (e) => {
		e.preventDefault();
		const { count, starting, tenant } = bulkForm;
		const created = Array.from({ length: Number(count) }, (_, i) => ({
			number: `${Number(starting) + i}`,
			name: `Extension ${Number(starting) + i}`,
			email: "-",
			tenant: tenant || "Alpha",
			device: "Softphone",
			password: Math.random().toString(36).slice(-10),
			status: "Offline",
			voicemail: true,
		}));
		setExtensions([...extensions, ...created]);
		setShowBulkModal(false);
	};

	// Edit Extension
	const handleEditClick = (ext) => {
		setEditExtension(ext);
		setShowEditModal(true);
	};

	const handleUpdateExtension = (e) => {
		e.preventDefault();
		setExtensions((prev) =>
			prev.map((ex) =>
				ex.number === editExtension.number ? editExtension : ex
			)
		);
		setShowEditModal(false);
	};

	return (
		<div className="p-2 bg-gray-50 min-h-screen">
			{/* Header */}
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
				<div>
					<h2 className="text-2xl font-semibold text-gray-800 mb-2">
						Extension Management
					</h2>
					<p className="text-sm text-gray-600">
						Manage internal extensions and user settings
					</p>
				</div>
				<div className="flex gap-3 mt-4 md:mt-0">
					<button
						onClick={() => setShowBulkModal(true)}
						className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition"
					>
						<Upload className="w-4 h-4" /> Bulk Create
					</button>
					<button
						onClick={() => setShowAddModal(true)}
						className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow transition"
					>
						<Plus className="w-4 h-4" /> Add Extension
					</button>
				</div>
			</div>

			{/* Search Bar */}
			<div className="bg-white rounded-xl shadow-lg hover:shadow-sm border border-gray-100 p-4 mb-6">
				<input
					type="text"
					placeholder="Search extensions by number, name, or email..."
					className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
				/>
			</div>

			{/* Table */}
			<div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-x-auto">
				<table className="w-full text-sm text-gray-700">
					<thead>
						<tr className="text-left bg-gray-50 text-gray-700">
							<th className="py-3 px-4">Extension</th>
							<th className="py-3 px-4">Name</th>
							<th className="py-3 px-4">Email</th>
							<th className="py-3 px-4">Tenant</th>
							<th className="py-3 px-4">Device</th>
							<th className="py-3 px-4">SIP Password</th>
							<th className="py-3 px-4">Status</th>
							<th className="py-3 px-4">On/Off</th>
							<th className="py-3 px-4">Voicemail</th>
							<th className="py-3 px-4 text-center">Actions</th>
						</tr>
					</thead>
					<tbody>
						{extensions.map((ext, idx) => (
							<tr
								key={idx}
								className="border-b border-gray-100 hover:bg-gray-50 transition"
							>
								<td className="py-2 px-4 flex items-center gap-2">
									<User className="text-purple-600 w-4 h-4" />
									{ext.number}
								</td>
								<td className="py-2 px-4">{ext.name}</td>
								<td className="py-2 px-4">{ext.email}</td>
								<td className="py-2 px-4">{ext.tenant}</td>
								<td className="py-2 px-4">{ext.device}</td>
								<td className="py-2 px-4">
									<div className="flex items-center gap-2">
										<span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-mono">
											{ext.password}
										</span>
										<RefreshCcw className="w-4 h-4 text-gray-500 cursor-pointer" />
									</div>
								</td>
								<td className="py-2 px-4">{ext.status}</td>
								<td className="py-2 px-4">
									<label className="inline-flex items-center cursor-pointer">
										<input
											type="checkbox"
											className="sr-only peer"
										/>
										<div className="relative w-10 h-5 bg-gray-300 peer-checked:bg-sky-500 rounded-full transition-all duration-300">
											<div className="absolute top-[2px] left-[2px] bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-5" />
										</div>
									</label>
								</td>
								<td className="py-2 px-4">
									{ext.voicemail ? "Enabled" : "Disabled"}
								</td>
								<td className="py-2 px-4 text-center">
									<div className="flex justify-center gap-2">
										<button
											onClick={() =>
												handleEditClick(ext)
											}
											className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md"
										>
											<Edit className="w-4 h-4" />
										</button>
										<button className="px-3 py-1 bg-red-100 text-red-600 hover:bg-red-200 text-xs font-medium rounded-md transition">
											Delete
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* === ADD EXTENSION MODAL === */}
			{showAddModal && (
				<Modal
					title="Create New Extension"
					onClose={() => setShowAddModal(false)}
				>
					<p className="text-sm text-gray-500 mb-4">
						Add a new extension for voice communication
					</p>
					<form onSubmit={handleAddExtension} className="space-y-4">
						<Input label="Extension Number" name="number" value={newExtension.number} onChange={handleNewChange} />
						<Input label="Name (Optional)" name="name" value={newExtension.name} onChange={handleNewChange} />
						<Input label="Email (Optional)" name="email" value={newExtension.email} onChange={handleNewChange} placeholder="user@company.com" />
						<Input label="SIP Password" name="password" value={newExtension.password} onChange={handleNewChange} />
						<Input label="Device Type" name="device" value={newExtension.device} onChange={handleNewChange} />
						<Select label="Assign to Tenant (Optional)" name="tenant" value={newExtension.tenant} onChange={handleNewChange} options={["Alpha", "Beta", "Gamma"]} />
						<div className="flex items-center gap-2">
							<label className="text-sm text-gray-700">Enable Voicemail</label>
							<input type="checkbox" checked={newExtension.voicemail} onChange={(e) => setNewExtension({ ...newExtension, voicemail: e.target.checked })} />
						</div>
						<button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition">
							Create Extension
						</button>
					</form>
				</Modal>
			)}

			{/* === EDIT EXTENSION MODAL === */}
			{showEditModal && (
				<Modal title={`Edit Extension ${editExtension.number}`} onClose={() => setShowEditModal(false)}>
					<p className="text-sm text-gray-500 mb-4">
						Update extension settings and configuration
					</p>
					<form onSubmit={handleUpdateExtension} className="space-y-4">
						<Input label="Name (Optional)" name="name" value={editExtension.name} onChange={handleEditChange} />
						<Input label="Email (Optional)" name="email" value={editExtension.email} onChange={handleEditChange} />
						<Input label="Device Type" name="device" value={editExtension.device} onChange={handleEditChange} />
						<Select label="Status" name="status" value={editExtension.status} onChange={handleEditChange} options={["Offline", "Online"]} />
						<div className="flex items-center gap-2">
							<label className="text-sm text-gray-700">
								Enable Voicemail
							</label>
							<input
								type="checkbox"
								checked={editExtension.voicemail}
								onChange={(e) =>
									setEditExtension({
										...editExtension,
										voicemail: e.target.checked,
									})
								}
							/>
						</div>
						<button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition">
							Update Extension
						</button>
					</form>
				</Modal>
			)}

			{/* === BULK CREATE MODAL === */}
			{showBulkModal && (
				<Modal title="Bulk Create Extensions" onClose={() => setShowBulkModal(false)}>
					<p className="text-sm text-gray-500 mb-4">
						Create multiple extensions for a tenant at once
					</p>
					<form onSubmit={handleBulkCreate} className="space-y-4">
						<Input label="Number of Extensions" name="count" value={bulkForm.count} onChange={handleBulkChange} />
						<Input label="Starting Number" name="starting" value={bulkForm.starting} onChange={handleBulkChange} />
						<Select label="Assign to Tenant" name="tenant" value={bulkForm.tenant} onChange={handleBulkChange} options={["Alpha", "Beta", "Gamma"]} />
						<div className="bg-blue-50 text-blue-700 text-sm p-3 rounded-md border border-blue-200">
							This will create {bulkForm.count} extensions starting from {bulkForm.starting}.
						</div>
						<button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition">
							Create {bulkForm.count} Extensions
						</button>
					</form>
				</Modal>
			)}
		</div>
	);
}

export default Extensions;
