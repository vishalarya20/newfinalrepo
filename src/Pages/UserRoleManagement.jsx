import { useState } from "react";
import {
    Search,
    Plus,
    Edit,
    Trash2,
    Shield,
    Mail,
    ToggleLeft,
    ToggleRight,
} from "lucide-react";

import Modal from "../Components/Modal"
import Input from "../Components/Input"

const UserRoleManagement = () => {
    const [modal, setModal] = useState(false);
    const [sendInvite, setSendInvite] = useState(true);

    const users = [
        {
            name: "Super Admin",
            email: "admin@pbx.com",
            role: "Super Admin",
            lastLogin: "2024-11-01 15:30",
            status: "Active",
        },
        {
            name: "John Manager",
            email: "john.m@pbx.com",
            role: "Billing Manager",
            lastLogin: "2024-11-01 14:20",
            status: "Active",
        },
        {
            name: "Sarah Support",
            email: "sarah.s@pbx.com",
            role: "Support Staff",
            lastLogin: "2024-11-01 13:45",
            status: "Active",
        },
        {
            name: "Mike Tech",
            email: "mike.t@pbx.com",
            role: "System Admin",
            lastLogin: "2024-10-31 18:00",
            status: "Active",
        },
    ];

    const roles = [
        {
            name: "Super Admin",
            desc: "Complete system access and control",
            count: 1,
            tags: ["All"],
        },
        {
            name: "Billing Manager",
            desc: "Manage billing, invoicing, and payments",
            count: 2,
            tags: ["Billing", "Reports", "Invoicing"],
        },
        {
            name: "Support Staff",
            desc: "Basic support and monitoring",
            count: 5,
            tags: ["View CDR", "View Tenants", "Basic Support"],
        },
    ];

    return (
        <div className="p-2 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        User & Role Management
                    </h2>
                    <p className="text-sm text-gray-600">
                        Manage platform users and permission roles
                    </p>
                </div>
                <button
                    onClick={() => setModal(true)}
                    className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-sm px-4 py-2 rounded-lg"
                >
                    <Plus className="w-4 h-4" /> Add User
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Users Table */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-4">
                    {/* Search */}
                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="w-full border border-gray-200 rounded-lg py-2 pl-10 pr-3 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                        />
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-gray-700">
                            <thead className="bg-gray-100 text-gray-600 font-medium">
                                <tr>
                                    <th className="px-4 py-3 text-left">User</th>
                                    <th className="px-4 py-3 text-left">Role</th>
                                    <th className="px-4 py-3 text-left">Last Login</th>
                                    <th className="px-4 py-3 text-left">Status</th>
                                    <th className="px-4 py-3 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, i) => (
                                    <tr
                                        key={i}
                                        className="border-b last:border-0 hover:bg-gray-50 transition"
                                    >
                                        <td className="px-4 py-3 flex items-center gap-3">
                                            <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full">
                                                <Shield className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="font-medium">{user.name}</p>
                                                <p className="text-xs text-gray-500">{user.email}</p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-gray-600">
                                            {user.lastLogin}
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                                                {user.status}
                                            </span>
                                        </td>
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
                </div>

                {/* Roles Sidebar */}
                <div className="bg-white rounded-xl shadow-sm p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-800">Available Roles</h3>
                        <button className="flex items-center gap-1 border border-gray-200 text-gray-600 px-2 py-1 text-sm rounded-lg hover:bg-gray-50">
                            <Plus className="w-4 h-4" /> New Role
                        </button>
                    </div>
                    <div className="space-y-3">
                        {roles.map((role, i) => (
                            <div
                                key={i}
                                className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50"
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-amber-500" />
                                        <span className="font-medium text-gray-800">
                                            {role.name}
                                        </span>
                                    </div>
                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                        {role.count}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 mb-2">{role.desc}</p>
                                <div className="flex flex-wrap gap-1">
                                    {role.tags.map((tag, j) => (
                                        <span
                                            key={j}
                                            className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Create User Modal */}
            {modal && (
                <Modal title="Create New User" onClose={() => setModal(false)}>
                    <form className="space-y-3">
                        <Input label="Full Name" placeholder="Enter full name" />
                        <Input label="Email Address" placeholder="user@pbx.com" />
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Role</label>
                            <select className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none">
                                <option>Select role</option>
                                <option>Super Admin</option>
                                <option>Billing Manager</option>
                                <option>Support Staff</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-sm text-gray-700 flex items-center gap-2">
                                <Mail className="w-4 h-4 text-gray-500" />
                                Send Invitation Email
                            </label>
                            <button
                                type="button"
                                onClick={() => setSendInvite(!sendInvite)}
                                className="focus:outline-none"
                            >
                                {sendInvite ? (
                                    <ToggleRight className="w-6 h-6 text-blue-600" />
                                ) : (
                                    <ToggleLeft className="w-6 h-6 text-gray-400" />
                                )}
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg text-sm"
                        >
                            Create User
                        </button>
                    </form>
                </Modal>
            )}
        </div>
    );
};


export default UserRoleManagement;
