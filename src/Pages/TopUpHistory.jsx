import { useState } from "react";
import { Search, Plus, Download, Edit, Trash2, CreditCard, Bitcoin } from "lucide-react";
import Modal from "../Components/Modal"
import Input from "../Components/Input"
const TopUpHistory = () => {
    const [modal, setModal] = useState(null); // 'create' | 'edit'
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    const [search, setSearch] = useState("");

    const topups = [
        {
            id: "TOP-001",
            tenant: "Acme Corporation",
            date: "2024-11-01 14:30",
            method: "Credit Card",
            amount: 500,
            status: "Completed",
            hash: "ch_3NXYz123456789",
        },
        {
            id: "TOP-002",
            tenant: "Tech Solutions Inc",
            date: "2024-11-01 12:15",
            method: "Bitcoin",
            amount: 1000,
            status: "Completed",
            hash: "0x7aBb...9c2d",
        },
    ];

    const totalTopups = topups.reduce((sum, t) => sum + t.amount, 0);
    const cryptoPayments = topups.filter((t) => t.method === "Bitcoin");

    const openModal = (type, invoice = null) => {
        setSelectedInvoice(invoice);
        setModal(type);
    };

    return (
        <div className="p-2 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Topup History</h2>
                    <p className="text-sm text-gray-600">
                        View all tenant topup transactions and manage invoices
                    </p>
                </div>
                <button
                    onClick={() => openModal("create")}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg"
                >
                    <Plus className="w-4 h-4" />
                    Create Invoice
                </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <SummaryCard
                    icon={<CreditCard className="w-5 h-5 text-green-600" />}
                    title="Total Topups"
                    amount={`$${totalTopups.toFixed(2)}`}
                    subtitle={`${topups.length} transactions`}
                />
                <SummaryCard
                    icon={<span className="text-blue-600 text-xl">📅</span>}
                    title="This Month"
                    amount="$1500.00"
                    subtitle="2 transactions"
                />
                <SummaryCard
                    icon={<Bitcoin className="w-5 h-5 text-amber-500" />}
                    title="Crypto Payments"
                    amount={`${cryptoPayments.length}`}
                    subtitle={`$${cryptoPayments.reduce((s, c) => s + c.amount, 0).toFixed(2)} total`}
                />
            </div>

            {/* Search + Filter */}
            <div className="flex items-center justify-between mb-4">
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search by tenant or transaction ID..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full border border-gray-200 rounded-lg py-2 pl-10 pr-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <select className="border border-gray-200 rounded-lg text-sm py-2 px-3 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                        <option>All Methods</option>
                        <option>Credit Card</option>
                        <option>Bitcoin</option>
                    </select>
                    <button className="flex items-center gap-2 border border-gray-300 text-gray-600 px-3 py-2 text-sm rounded-lg hover:bg-gray-100">
                        <Download className="w-4 h-4" /> Export
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
                <table className="w-full text-sm text-gray-700">
                    <thead className="bg-gray-100 text-gray-600 font-medium">
                        <tr>
                            <th className="px-4 py-3">Transaction ID</th>
                            <th className="px-4 py-3">Tenant</th>
                            <th className="px-4 py-3">Date & Time</th>
                            <th className="px-4 py-3">Method</th>
                            <th className="px-4 py-3">Amount</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Transaction Hash</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topups
                            .filter(
                                (t) =>
                                    t.tenant.toLowerCase().includes(search.toLowerCase()) ||
                                    t.id.toLowerCase().includes(search.toLowerCase())
                            )
                            .map((t) => (
                                <tr key={t.id} className="border-b last:border-0 hover:bg-gray-50 transition">
                                    <td className="px-4 py-3 font-medium">{t.id}</td>
                                    <td className="px-4 py-3">{t.tenant}</td>
                                    <td className="px-4 py-3">{t.date}</td>
                                    <td className="px-4 py-3 flex items-center gap-2">
                                        {t.method === "Bitcoin" ? (
                                            <Bitcoin className="w-4 h-4 text-amber-500" />
                                        ) : (
                                            <CreditCard className="w-4 h-4 text-blue-500" />
                                        )}
                                        {t.method}
                                    </td>
                                    <td className="px-4 py-3">${t.amount.toFixed(2)}</td>
                                    <td className="px-4 py-3">
                                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                                            {t.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-gray-500 font-mono">{t.hash}</td>
                                    <td className="px-4 py-3 flex gap-2">
                                        <button
                                            onClick={() => openModal("edit", t)}
                                            className="flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded hover:bg-gray-200"
                                        >
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
            {modal === "create" && <CreateInvoiceModal onClose={() => setModal(null)} />}
            {modal === "edit" && (
                <EditInvoiceModal invoice={selectedInvoice} onClose={() => setModal(null)} />
            )}
        </div>
    );
};

/* ---------------- Summary Card ---------------- */
const SummaryCard = ({ icon, title, amount, subtitle }) => (
    <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3">
        <div className="bg-gray-100 p-3 rounded-lg">{icon}</div>
        <div>
            <h4 className="text-sm text-gray-500">{title}</h4>
            <p className="text-xl font-semibold text-gray-800">{amount}</p>
            <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
    </div>
);

/* ---------------- Create Invoice Modal ---------------- */
const CreateInvoiceModal = ({ onClose }) => (
    <Modal title="Create New Invoice" onClose={onClose}>
        <form className="space-y-3">
            <Input label="Tenant Name *" placeholder="Enter tenant name" />
            <Input label="Amount *" placeholder="0.00" />
            <Input label="Description" placeholder="Enter invoice description or notes" />
            <Input label="Due Date" placeholder="dd-mm-yyyy" />
            <div className="flex justify-end gap-2">
                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm border border-gray-200 rounded-lg"
                >
                    Cancel
                </button>
                <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Create Invoice
                </button>
            </div>
        </form>
    </Modal>
);

/* ---------------- Edit Invoice Modal ---------------- */
const EditInvoiceModal = ({ invoice, onClose }) => (
    <Modal title="Edit Invoice" onClose={onClose}>
        <form className="space-y-3">
            <Input label="Tenant Name *" value={invoice?.tenant} />
            <Input label="Amount *" value={invoice?.amount} />
            <Input label="Description" value={invoice?.hash} />
            <Input label="Due Date" placeholder="05-11-2025" />
            <div className="flex justify-end gap-2">
                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm border border-gray-200 rounded-lg"
                >
                    Cancel
                </button>
                <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Update Invoice
                </button>
            </div>
        </form>
    </Modal>
);


export default TopUpHistory;
