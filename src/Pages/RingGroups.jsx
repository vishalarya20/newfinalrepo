import { useState } from "react";
import { Users, Plus, Edit2, Trash2, Search } from "lucide-react";
import Modal from "../Components/Modal";
import Input from "../Components/Input";
import Select from "../Components/Select";

function RingGroups() {
    const [groups, setGroups] = useState([
        {
            name: "Sales Team",
            extensions: "101, 102, 103",
            strategy: "Simultaneous",
            timeout: "30s",
            failover: "Voicemail",
            status: "Active",
        },
        {
            name: "Support Team",
            extensions: "104, 105, 106",
            strategy: "Sequential",
            timeout: "20s",
            failover: "Extension 200",
            status: "Active",
        },
    ]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const [form, setForm] = useState({
        name: "",
        extensions: "",
        strategy: "Simultaneous",
        timeout: "30",
        failover: "Voicemail",
    });

    const [editForm, setEditForm] = useState({
        name: "",
        extensions: "",
        strategy: "",
        timeout: "",
        failover: "",
        status: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleEditChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };

    const handleAddGroup = (e) => {
        e.preventDefault();
        if (!form.name || !form.extensions) return alert("All fields required");
        setGroups([
            ...groups,
            {
                ...form,
                timeout: `${form.timeout}s`,
                status: "Active",
            },
        ]);
        setShowAddModal(false);
        setForm({
            name: "",
            extensions: "",
            strategy: "Simultaneous",
            timeout: "30",
            failover: "Voicemail",
        });
    };

    const handleEditClick = (group) => {
        setEditForm({ ...group });
        setShowEditModal(true);
    };

    const handleUpdateGroup = (e) => {
        e.preventDefault();
        setGroups((prev) =>
            prev.map((g) => (g.name === editForm.name ? editForm : g))
        );
        setShowEditModal(false);
    };

    const handleDelete = (name) => {
        if (window.confirm("Delete this group?")) {
            setGroups(groups.filter((g) => g.name !== name));
        }
    };

    return (
        <div className="p-2 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        Ring Groups
                    </h2>
                    <p className="text-sm text-gray-600">
                        Manage call routing and group configurations
                    </p>
                </div>

                <button
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow transition mt-4 md:mt-0"
                >
                    <Plus className="w-4 h-4" /> Create Ring Group
                </button>
            </div>

            {/* Search */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-sm border border-gray-100 p-4 mb-6 flex items-center gap-2">
                <Search className="text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Search ring groups..."
                    className="w-full border-none outline-none text-sm text-gray-700"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-x-auto">
                <table className="w-full text-sm text-gray-700">
                    <thead>
                        <tr className="text-left bg-gray-50 text-gray-700">
                            <th className="py-3 px-4">Group Name</th>
                            <th className="py-3 px-4">Extensions</th>
                            <th className="py-3 px-4">Ring Strategy</th>
                            <th className="py-3 px-4">Timeout</th>
                            <th className="py-3 px-4">Failover</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groups.map((group, idx) => (
                            <tr
                                key={idx}
                                className="border-b border-gray-100 hover:bg-gray-50 transition"
                            >
                                <td className="py-2 px-4 flex items-center gap-2">
                                    <Users className="text-purple-500 w-4 h-4" />
                                    <span className="text-blue-600 font-medium">
                                        {group.name}
                                    </span>
                                </td>
                                <td className="py-2 px-4">{group.extensions}</td>
                                <td className="py-2 px-4">{group.strategy}</td>
                                <td className="py-2 px-4">{group.timeout}</td>
                                <td className="py-2 px-4">{group.failover}</td>
                                <td className="py-2 px-4">
                                    <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                        {group.status}
                                    </span>
                                </td>
                                <td className="py-2 px-4 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            onClick={() =>
                                                handleEditClick(group)
                                            }
                                            className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md transition"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDelete(group.name)
                                            }
                                            className="px-3 py-1 bg-red-100 text-red-600 hover:bg-red-200 text-xs font-medium rounded-md transition"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Modal */}
            {showAddModal && (
                <Modal
                    title="Create New Ring Group"
                    onClose={() => setShowAddModal(false)}
                >
                    <p className="text-sm text-gray-500 mb-4">
                        Create a new ring group to manage multiple extensions
                    </p>
                    <form onSubmit={handleAddGroup} className="space-y-4">
                        <Input
                            label="Group Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Sales Team"
                        />
                        <Input
                            label="Extensions"
                            name="extensions"
                            value={form.extensions}
                            onChange={handleChange}
                            placeholder="101, 102, 103"
                        />
                        <Select
                            label="Ring Strategy"
                            name="strategy"
                            value={form.strategy}
                            onChange={handleChange}
                            options={[
                                "Simultaneous",
                                "Sequential",
                                "Random",
                            ]}
                        />
                        <Input
                            label="Ring Timeout (seconds)"
                            name="timeout"
                            value={form.timeout}
                            onChange={handleChange}
                            placeholder="30"
                        />
                        <Select
                            label="Failover Destination"
                            name="failover"
                            value={form.failover}
                            onChange={handleChange}
                            options={["Voicemail", "Extension 200"]}
                        />
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium mt-2 transition">
                            Create Ring Group
                        </button>
                    </form>
                </Modal>
            )}

            {/* Edit Modal */}
            {showEditModal && (
                <Modal
                    title="Edit Ring Group"
                    onClose={() => setShowEditModal(false)}
                >
                    <p className="text-sm text-gray-500 mb-4">
                        Update ring group settings and configuration
                    </p>
                    <form onSubmit={handleUpdateGroup} className="space-y-4">
                        <Input
                            label="Group Name"
                            name="name"
                            value={editForm.name}
                            onChange={handleEditChange}
                        />
                        <Input
                            label="Extensions"
                            name="extensions"
                            value={editForm.extensions}
                            onChange={handleEditChange}
                        />
                        <Select
                            label="Ring Strategy"
                            name="strategy"
                            value={editForm.strategy}
                            onChange={handleEditChange}
                            options={[
                                "Simultaneous",
                                "Sequential",
                                "Random",
                            ]}
                        />
                        <Input
                            label="Ring Timeout (seconds)"
                            name="timeout"
                            value={editForm.timeout.replace("s", "")}
                            onChange={handleEditChange}
                        />
                        <Select
                            label="Failover Destination"
                            name="failover"
                            value={editForm.failover}
                            onChange={handleEditChange}
                            options={["Voicemail", "Extension 200"]}
                        />
                        <Select
                            label="Status"
                            name="status"
                            value={editForm.status}
                            onChange={handleEditChange}
                            options={["Active", "Inactive"]}
                        />
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium mt-2 transition">
                            Update Ring Group
                        </button>
                    </form>
                </Modal>
            )}
        </div>
    );
}

export default RingGroups;
