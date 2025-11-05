import { useState } from "react";
import { Plus, Trash2, Search } from "lucide-react";
import Modal from "../Components/Modal";
import Input from "../Components/Input";
import Select from "../Components/Select";

function BlockNumbers() {
    const [blockedNumbers, setBlockedNumbers] = useState([
        {
            number: "+1 555 123 4567",
            reason: "Spam",
            addedBy: "Admin",
            dateAdded: "Nov 1, 2024",
            expiry: "Never",
        },
        {
            number: "+1 555 987 6543",
            reason: "Harassment",
            addedBy: "System",
            dateAdded: "Oct 28, 2024",
            expiry: "30 days",
        },
        {
            number: "+44 20 7946 0958",
            reason: "Scam",
            addedBy: "Moderator",
            dateAdded: "Oct 20, 2024",
            expiry: "15 days",
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({
        number: "",
        reason: "Spam",
        duration: "Permanent",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAddBlocked = (e) => {
        e.preventDefault();
        if (!form.number) return alert("Enter a phone number!");

        const newBlock = {
            number: form.number,
            reason: form.reason,
            addedBy: "Admin",
            dateAdded: new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
            }),
            expiry: form.duration === "Permanent" ? "Never" : "30 days",
        };

        setBlockedNumbers([...blockedNumbers, newBlock]);
        setShowModal(false);
        setForm({ number: "", reason: "Spam", duration: "Permanent" });
    };

    const handleDelete = (num) => {
        if (window.confirm("Unblock this number?")) {
            setBlockedNumbers((prev) =>
                prev.filter((item) => item.number !== num)
            );
        }
    };

    return (
        <div className="p-2 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        Block Number
                    </h2>
                    <p className="text-sm text-gray-600">
                        Manage blocked numbers and spam control
                    </p>
                </div>

                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow transition mt-4 md:mt-0"
                >
                    <Plus className="w-4 h-4" /> Block Number
                </button>
            </div>

            {/* Search */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-sm border border-gray-100 p-4 mb-6 flex items-center gap-2">
                <Search className="text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Search blocked numbers..."
                    className="w-full border-none outline-none text-sm text-gray-700"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-sm border border-gray-100 overflow-x-auto">
                <table className="w-full text-sm text-gray-700">
                    <thead>
                        <tr className="text-left bg-gray-50 text-gray-700">
                            <th className="py-3 px-4">Phone Number</th>
                            <th className="py-3 px-4">Reason</th>
                            <th className="py-3 px-4">Added By</th>
                            <th className="py-3 px-4">Date Added</th>
                            <th className="py-3 px-4">Expiry</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blockedNumbers.length > 0 ? (
                            blockedNumbers.map((item, idx) => (
                                <tr
                                    key={idx}
                                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                                >
                                    <td className="py-2 px-4">{item.number}</td>
                                    <td className="py-2 px-4">{item.reason}</td>
                                    <td className="py-2 px-4">{item.addedBy}</td>
                                    <td className="py-2 px-4">{item.dateAdded}</td>
                                    <td className="py-2 px-4">{item.expiry}</td>
                                    <td className="py-2 px-4 text-center">
                                        <button
                                            onClick={() =>
                                                handleDelete(item.number)
                                            }
                                            className="flex items-center gap-1 justify-center px-3 py-1 bg-red-100 text-red-600 hover:bg-red-200 text-xs font-medium rounded-md transition"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="text-center py-6 text-gray-500"
                                >
                                    No blocked numbers
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Add Block Modal */}
            {showModal && (
                <Modal
                    title="Block Phone Number"
                    onClose={() => setShowModal(false)}
                >
                    <p className="text-sm text-gray-500 mb-4">
                        Block a phone number from making calls to your system
                    </p>

                    <form onSubmit={handleAddBlocked} className="space-y-4">
                        <Input
                            label="Phone Number"
                            name="number"
                            value={form.number}
                            onChange={handleChange}
                            placeholder="+1 555 123 4567"
                        />
                        <Select
                            label="Reason"
                            name="reason"
                            value={form.reason}
                            onChange={handleChange}
                            options={["Spam", "Scam", "Harassment", "Abuse"]}
                        />
                        <Select
                            label="Block Duration"
                            name="duration"
                            value={form.duration}
                            onChange={handleChange}
                            options={["Permanent", "30 days", "15 days"]}
                        />
                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition"
                        >
                            Block Number
                        </button>
                    </form>
                </Modal>
            )}
        </div>
    );
}

export default BlockNumbers;
