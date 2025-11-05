import { useState } from "react";
import {
  Search,
  Plus,
  DollarSign,
  LogIn,
  Edit,
  Trash2,
  Building2,
} from "lucide-react";

import Modal from "../Components/Modal"
import Input from "../Components/Input"
import Select from "../Components/Select"

const TenantManagement = () => {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null); // 'create' | 'edit' | 'topup'
  const [selectedTenant, setSelectedTenant] = useState(null);

  const tenants = [
    {
      company: "Acnosol",
      contact: "Paul",
      email: "mskjf@gmail.com",
      plan: "Basic",
      extensions: 2,
      balance: 1000,
      expiry: "N/A",
      status: "Active",
    },
    {
      company: "Alpha",
      contact: "demo",
      email: "demo@demo.com",
      plan: "Basic",
      extensions: 50,
      balance: 1000,
      expiry: "N/A",
      status: "Active",
    },
    {
      company: "Demo",
      contact: "Gamez Tube",
      email: "gameztube7010@gmail.com",
      plan: "Basic",
      extensions: 50,
      balance: 1000,
      expiry: "Nov 30, 2025",
      status: "Active",
    },
  ];

  const openModal = (type, tenant = null) => {
    setSelectedTenant(tenant);
    setModal(type);
  };

  return (
    <div className="p-2 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Tenant Management
          </h2>
          <p className="text-sm text-gray-600">
            Create and manage tenant accounts
          </p>
        </div>
        <button
          onClick={() => openModal("create")}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-lg"
        >
          <Plus className="w-4 h-4" />
          Create Tenant
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search tenants by company, name, or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-200 rounded-lg py-2 pl-10 pr-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-sm rounded-xl">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Plan</th>
              <th className="px-4 py-3">Extensions</th>
              <th className="px-4 py-3">Balance</th>
              <th className="px-4 py-3">Expiry Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tenants
              .filter(
                (t) =>
                  t.company.toLowerCase().includes(search.toLowerCase()) ||
                  t.email.toLowerCase().includes(search.toLowerCase())
              )
              .map((t, i) => (
                <tr
                  key={i}
                  className="border-b last:border-0 hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-500" />
                    {t.company}
                  </td>
                  <td className="px-4 py-3">{t.contact}</td>
                  <td className="px-4 py-3">{t.email}</td>
                  <td className="px-4 py-3">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                      {t.plan}
                    </span>
                  </td>
                  <td className="px-4 py-3">{t.extensions}</td>
                  <td className="px-4 py-3">${t.balance.toFixed(2)}</td>
                  <td className="px-4 py-3">{t.expiry}</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                      {t.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    <button
                      onClick={() => openModal("topup", t)}
                      className="bg-emerald-100 text-emerald-600 p-2 rounded hover:bg-emerald-200"
                    >
                      <DollarSign className="w-4 h-4" />
                    </button>
                    <button
                      className="bg-indigo-100 text-indigo-600 p-2 rounded hover:bg-indigo-200"
                    >
                      <LogIn className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => openModal("edit", t)}
                      className="bg-gray-100 text-gray-600 p-2 rounded hover:bg-gray-200"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="bg-red-100 text-red-600 p-2 rounded hover:bg-red-200">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {modal === "create" && <CreateTenantModal onClose={() => setModal(null)} />}
      {modal === "topup" && (
        <TopupModal tenant={selectedTenant} onClose={() => setModal(null)} />
      )}
      {modal === "edit" && (
        <EditTenantModal tenant={selectedTenant} onClose={() => setModal(null)} />
      )}
    </div>
  );
};

/* ---------------- Create Tenant Modal ---------------- */
const CreateTenantModal = ({ onClose }) => (
  <Modal title="Create New Tenant" onClose={onClose}>
    <form className="space-y-3">
      <Input label="Contact Name *" placeholder="John Doe" />
      <Input label="Email Address *" placeholder="user@demo.com" />
      <Input label="Password *" type="password" />
      <Input label="Company Name *" placeholder="Acme Corporation" />
      <Select label="Plan" options={["Basic", "Pro", "Enterprise"]} />
      <Input label="Max Extensions" placeholder="50" />
      <Input label="Initial Balance ($)" placeholder="1000.00" />
      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 rounded-lg">
        Create Tenant
      </button>
    </form>
  </Modal>
);

/* ---------------- Topup Modal ---------------- */
const TopupModal = ({ tenant, onClose }) => (
  <Modal title={`Topup Balance - ${tenant?.company}`} onClose={onClose}>
    <form className="space-y-3">
      <div>
        <label className="block text-sm text-gray-700 mb-1">Transaction Type</label>
        <div className="flex gap-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" name="type" defaultChecked /> Add Money
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="type" /> Deduct Money
          </label>
        </div>
      </div>
      <Input label="Amount ($)" placeholder="100.00" />
      <Input label="Description *" placeholder="Reason for transaction..." />
      <p className="text-sm text-gray-500">
        Current Balance: ${tenant?.balance.toFixed(2)}
      </p>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm border border-gray-200 rounded-lg"
        >
          Cancel
        </button>
        <button className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700">
          Add Money
        </button>
      </div>
    </form>
  </Modal>
);

/* ---------------- Edit Tenant Modal ---------------- */
const EditTenantModal = ({ tenant, onClose }) => (
  <Modal title="Edit Tenant" onClose={onClose}>
    <form className="space-y-3">
      <Input label="Contact Name" value={tenant?.contact} />
      <Input label="Company Name" value={tenant?.company} />
      <Select label="Status" options={["Active", "Suspended"]} />
      <Select label="Plan" options={["Basic", "Pro", "Enterprise"]} />
      <Input label="Max Extensions" value={tenant?.extensions} />
      <Input label="Balance ($)" value={tenant?.balance} />
      <Input label="Expiry Date" placeholder="dd-mm-yyyy" />
      <p className="text-xs text-indigo-600 cursor-pointer hover:underline">
        Extend expiry date to renew subscription
      </p>
      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 rounded-lg">
        Save Changes
      </button>
    </form>
  </Modal>
);



export default TenantManagement;
