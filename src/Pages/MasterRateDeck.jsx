import { useState } from "react";
import { Search, Upload, Plus, Edit, Trash2, Globe } from "lucide-react";
import Modal from "../Components/Modal"
import Input from "../Components/Input"

const MasterRateDeck = () => {
    const [search, setSearch] = useState("");
    const [modal, setModal] = useState(null); // "add" | "bulk"
    const [rates, setRates] = useState([
        { destination: "United States - Mobile", prefix: "+1", perMinute: 0.012, setupFee: 0.005 },
        { destination: "United States - Landline", prefix: "+1", perMinute: 0.008, setupFee: 0.003 },
        { destination: "Canada", prefix: "+1", perMinute: 0.015, setupFee: 0.005 },
        { destination: "United Kingdom - Mobile", prefix: "+44", perMinute: 0.025, setupFee: 0.008 },
        { destination: "United Kingdom - Landline", prefix: "+44", perMinute: 0.018, setupFee: 0.006 },
    ]);

    const openModal = (type) => setModal(type);
    const closeModal = () => setModal(null);

    return (
        <div className="p-2 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Master Rate Deck</h2>
                    <p className="text-sm text-gray-600">Configure global pricing for all call destinations</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => openModal("bulk")}
                        className="flex items-center gap-2 border border-amber-400 text-amber-600 px-3 py-2 text-sm rounded-lg hover:bg-amber-50"
                    >
                        <Upload className="w-4 h-4" /> Bulk Upload
                    </button>
                    <button
                        onClick={() => openModal("add")}
                        className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 text-sm rounded-lg"
                    >
                        <Plus className="w-4 h-4" /> Add Rate
                    </button>
                </div>
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                <input
                    type="text"
                    placeholder="Search by destination or prefix..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg py-2 pl-10 pr-3 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
            </div>

            {/* Rate Table */}
            <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
                <table className="w-full text-sm text-gray-700">
                    <thead className="bg-gray-100 text-gray-600 font-medium">
                        <tr>
                            <th className="px-4 py-3">Destination</th>
                            <th className="px-4 py-3">Prefix</th>
                            <th className="px-4 py-3">Per Minute</th>
                            <th className="px-4 py-3">Setup Fee</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rates
                            .filter(
                                (r) =>
                                    r.destination.toLowerCase().includes(search.toLowerCase()) ||
                                    r.prefix.includes(search)
                            )
                            .map((r, i) => (
                                <tr key={i} className="border-b last:border-0 hover:bg-gray-50 transition">
                                    <td className="px-4 py-3 flex items-center gap-2">
                                        <Globe className="w-4 h-4 text-amber-500" />
                                        {r.destination}
                                    </td>
                                    <td className="px-4 py-3">{r.prefix}</td>
                                    <td className="px-4 py-3">${r.perMinute.toFixed(3)}</td>
                                    <td className="px-4 py-3">${r.setupFee.toFixed(3)}</td>
                                    <td className="px-4 py-3 flex gap-2">
                                        <button className="flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded hover:bg-gray-200">
                                            <Edit className="w-4 h-4" /> Edit
                                        </button>
                                        <button className="flex items-center gap-1 bg-red-100 text-red-600 px-2 py-1 rounded hover:bg-red-200">
                                            <Trash2 className="w-4 h-4" /> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            {/* Modals */}
            {modal === "add" && <AddRateModal onClose={closeModal} />}
            {modal === "bulk" && <BulkUploadModal onClose={closeModal} />}
        </div>
    );
};

/* -------------------- Add Rate Modal -------------------- */
const AddRateModal = ({ onClose }) => (
    <Modal title="Add New Rate" onClose={onClose}>
        <form className="space-y-3">
            <Input label="Destination *" placeholder="e.g., United States - Mobile" />
            <Input label="Prefix *" placeholder="e.g., +1" />
            <Input label="Per Minute Rate ($) *" placeholder="0.012" />
            <Input label="Setup Fee ($)" placeholder="0.005" />
            <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white text-sm py-2 rounded-lg"
            >
                Add Rate
            </button>
        </form>
    </Modal>
);

/* -------------------- Bulk Upload Modal -------------------- */
const BulkUploadModal = ({ onClose }) => (
    <Modal title="Bulk Upload Rates" onClose={onClose}>
        <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <p className="text-gray-700 mb-1 font-medium">Upload a CSV file with the following columns:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Destination (e.g., "United States - Mobile")</li>
                    <li>Prefix (e.g., "+1")</li>
                    <li>Per Minute Rate (e.g., "0.012")</li>
                    <li>Setup Fee (e.g., "0.005")</li>
                </ul>
            </div>

            <button className="w-full border border-gray-300 hover:bg-gray-50 py-2 rounded-lg flex items-center justify-center gap-2 text-sm">
                ⬇️ Download CSV Template
            </button>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-sm text-gray-500 hover:bg-gray-50 cursor-pointer">
                Click to upload CSV file <br />
                <span className="text-xs text-gray-400">CSV files only</span>
            </div>
        </div>
    </Modal>
);


export default MasterRateDeck;
