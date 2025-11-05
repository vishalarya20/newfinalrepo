import { useState } from "react";
import { Phone, Plus, Upload, Download, Edit, X } from "lucide-react";
import Input from "../Components/Input";
import Select from "../Components/Select";
import Modal from "../Components/Modal";

function Numbers() {
    const [numbers, setNumbers] = useState([
        {
            number: "+1 234 567 8903",
            type: "Local",
            assignment: "Extension 102",
            cnam: "Customer Service",
            status: "Active",
            cost: "$2.50",
        },
        {
            number: "+17744484249",
            type: "Local",
            assignment: "Acno sol",
            cnam: "-",
            status: "Active",
            cost: "$2.50",
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [showImportModal, setShowImportModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAssignModal, setShowAssignModal] = useState(false);


    const [form, setForm] = useState({
        number: "",
        type: "Local",
        cnam: "",
        assignment: "",
    });

    const [editForm, setEditForm] = useState({
        number: "",
        type: "",
        cnam: "",
        status: "",
        cost: "",
    });
    const [assignForm, setAssignForm] = useState({
        number: "",
        tenant: "",
        cnam: "",
    });
    const [importText, setImportText] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleEditChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };
    const handleAssignChange = (e) => setAssignForm({ ...assignForm, [e.target.name]: e.target.value });

    const handleAddNumber = (e) => {
        e.preventDefault();
        if (!form.number) return alert("Enter a DID Number!");
        setNumbers([
            ...numbers,
            {
                number: form.number,
                type: form.type,
                cnam: form.cnam || "-",
                assignment: form.assignment || "-",
                status: "Active",
                cost: "$2.50",
            },
        ]);
        setShowModal(false);
        setForm({ number: "", type: "Local", cnam: "", assignment: "" });
    };

    const handleImportNumbers = (e) => {
        e.preventDefault();
        if (!importText.trim()) return alert("Enter at least one number!");
        const newNumbers = importText
            .split("\n")
            .map((line) => line.split(",").map((x) => x.trim()))
            .filter((arr) => arr.length >= 3)
            .map(([number, type, cnam]) => ({
                number,
                type,
                cnam,
                assignment: "-",
                status: "Active",
                cost: "$2.50",
            }));
        setNumbers([...numbers, ...newNumbers]);
        setImportText("");
        setShowImportModal(false);
    };

    // Open Edit Modal
    const handleEditClick = (num) => {
        setEditForm({ ...num });
        setShowEditModal(true);
    };

    // Update number
    const handleUpdateNumber = (e) => {
        e.preventDefault();
        setNumbers((prev) =>
            prev.map((n) => (n.number === editForm.number ? editForm : n))
        );
        setShowEditModal(false);
    };
    // Open Assign Modal
    const handleAssignClick = (num) => {
        setAssignForm({
            number: num.number,
            tenant: "",
            cnam: num.cnam,
        });
        setShowAssignModal(true);
    };

    // Assign Number
    const handleAssignNumber = (e) => {
        e.preventDefault();
        if (!assignForm.tenant) return alert("Select a tenant before assigning!");
        setNumbers((prev) =>
            prev.map((n) =>
                n.number === assignForm.number
                    ? { ...n, assignment: assignForm.tenant, cnam: assignForm.cnam }
                    : n
            )
        );
        setShowAssignModal(false);
    };
    return (
        <>
            <div className="p-2 bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            Live Calls
                        </h2>
                        <p className="text-sm text-gray-600">
                            Real-time monitoring of active calls
                        </p>
                    </div>

                    <div className="flex gap-3 mt-4 md:mt-0">
                        <button
                            onClick={() => setShowModal(true)}
                            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow transition"
                        >
                            <Plus className="w-4 h-4" /> Add Number
                        </button>
                        <button
                            onClick={() => setShowImportModal(true)}
                            className="flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                        >
                            <Upload className="w-4 h-4" /> Import Numbers
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-sm border border-gray-100 p-4 mb-6 flex flex-col md:flex-row justify-between items-center gap-3">
                    <div className="flex items-center w-full md:w-2/3">
                        <input
                            type="text"
                            placeholder="Search by number or assignment..."
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                    </div>

                    <button className="flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                        <Download className="w-4 h-4" /> Export
                    </button>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-sm border border-gray-100 overflow-x-auto">
                    <table className="w-full text-sm text-gray-700 border-separate border-spacing-y-1">
                        <thead>
                            <tr className="text-left bg-gray-50 text-gray-700">
                                <th className="py-3 px-4">DID Number</th>
                                <th className="py-3 px-4">Type</th>
                                <th className="py-3 px-4">Assignment</th>
                                <th className="py-3 px-4">CNAM</th>
                                <th className="py-3 px-4">Status</th>
                                <th className="py-3 px-4">On/Off</th>
                                <th className="py-3 px-4">Monthly Cost</th>
                                <th className="py-3 px-4 text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {numbers.map((num, idx) => (
                                <tr
                                    key={idx}
                                    className="bg-white border border-gray-200 hover:bg-gray-50 transition"
                                >
                                    <td className="py-2 px-4 flex items-center gap-2">
                                        <Phone className="text-purple-600 w-4 h-4" />
                                        <span>{num.number}</span>
                                    </td>
                                    <td className="py-2 px-4">
                                        <span className="text-xs bg-gray-100 border border-gray-300 text-gray-600 px-2 py-1 rounded-md">
                                            {num.type}
                                        </span>
                                    </td>
                                    <td className="py-2 px-4">{num.assignment}</td>
                                    <td className="py-2 px-4">{num.cnam}</td>
                                    <td className="py-2 px-4">
                                        <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                            {num.status}
                                        </span>
                                    </td>
                                    <td className="py-2 px-4">
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" defaultChecked className="sr-only peer" />
                                            <div className="relative w-10 h-5 bg-gray-300 peer-checked:bg-sky-500 rounded-full transition-all duration-300">
                                                <div className="absolute top-[2px] left-[2px] bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-5" />
                                            </div>
                                        </label>
                                    </td>
                                    <td className="py-2 px-4 font-medium">{num.cost}</td>
                                    <td className="py-2 px-4 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                onClick={() => handleEditClick(num)}
                                                className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md transition"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => handleAssignClick(num)} className="px-3 py-1 bg-sky-100 text-sky-700 hover:bg-sky-200 text-xs font-medium rounded-md transition">
                                                Assign
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

                {/* ADD Modal */}
                {showModal && (
                    <Modal title="Add New Number" onClose={() => setShowModal(false)}>
                        <p className="text-sm text-gray-500 mb-4">
                            Add a new DID number to your system
                        </p>
                        <form onSubmit={handleAddNumber} className="space-y-4">
                            <Input label="DID Number" name="number" value={form.number} onChange={handleChange} placeholder="+1 234 567 8901" />
                            <Select label="Number Type" name="type" value={form.type} onChange={handleChange} options={["Local", "Toll-Free", "International"]} />
                            <Input label="CNAM (Caller ID Name)" name="cnam" value={form.cnam} onChange={handleChange} placeholder="Main Support" />
                            <Input label="Assignment" name="assignment" value={form.assignment} onChange={handleChange} placeholder="IVR Menu" />
                            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium mt-2 transition">
                                Add Number
                            </button>
                        </form>
                    </Modal>
                )}

                {/* IMPORT Modal */}
                {showImportModal && (
                    <Modal title="Import Numbers" onClose={() => setShowImportModal(false)}>
                        <p className="text-sm text-gray-500 mb-4">
                            Import multiple numbers using CSV format
                        </p>
                        <form onSubmit={handleImportNumbers} className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Enter numbers (one per line)
                            </label>
                            <p className="text-xs text-gray-500 mb-1">
                                Format: <span className="text-blue-600">DID, Type, CNAM</span>{" "}
                                (comma-separated)
                            </p>
                            <textarea
                                value={importText}
                                onChange={(e) => setImportText(e.target.value)}
                                rows="6"
                                placeholder="+1 234 567 8900, Local, Sales"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                            />
                            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition">
                                Import Numbers
                            </button>
                        </form>
                    </Modal>
                )}

                {/* EDIT Modal */}
                {showEditModal && (
                    <Modal
                        title={`Edit Number ${editForm.number}`}
                        onClose={() => setShowEditModal(false)}
                    >
                        <p className="text-sm text-gray-500 mb-4">
                            Edit number details and configuration
                        </p>
                        <form onSubmit={handleUpdateNumber} className="space-y-4">
                            <Select name="type" value={editForm.type} onChange={handleEditChange} options={["Local", "Toll-Free", "International"]} />
                            <Input name="cnam" value={editForm.cnam} onChange={handleEditChange} />
                            <Select name="status" value={editForm.status} onChange={handleEditChange} options={["Active", "Inactive"]} />
                            <Input name="cost" value={editForm.cost} onChange={handleEditChange} />
                            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium mt-2 transition">
                                Update Number
                            </button>
                        </form>
                    </Modal>
                )}
                {/* ASSIGN Modal */}
                {showAssignModal && (
                    <Modal
                        title={`Assign Number ${assignForm.number}`}
                        onClose={() => setShowAssignModal(false)}
                    >
                        <p className="text-sm text-gray-500 mb-4">
                            Assign this number to a tenant
                        </p>
                        <form onSubmit={handleAssignNumber} className="space-y-4">
                            <Select
                                label="Assign to Tenant"
                                name="tenant"
                                value={assignForm.tenant}
                                onChange={handleAssignChange}
                                options={[
                                    "Select tenant",
                                    "Tenant A",
                                    "Tenant B",
                                    "Tenant C",
                                ]}
                            />
                            <Input
                                label="CNAM (Caller ID Name)"
                                name="cnam"
                                value={assignForm.cnam}
                                onChange={handleAssignChange}
                            />
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition"
                            >
                                Assign Number
                            </button>
                        </form>
                    </Modal>
                )}
            </div>
        </>
    );
}

export default Numbers;
