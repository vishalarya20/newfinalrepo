import { useState } from "react";
import { User, Lock, Eye, EyeOff } from "lucide-react";

function UserProfile() {
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [profile] = useState({
        name: "Super Admin",
        email: "admin@demo.com",
        role: "Administrator",
    });

    const [form, setForm] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.currentPassword || !form.newPassword || !form.confirmPassword)
            return alert("Please fill all fields");
        if (form.newPassword !== form.confirmPassword)
            return alert("Passwords do not match!");
        alert("Password updated successfully!");
        setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    };

    return (
        <div className="p-2 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    User Profile
                </h2>
                <p className="text-sm text-gray-600">
                    Manage your account settings and preferences
                </p>
            </div>

            {/* Profile Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Profile Info */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-indigo-500 text-white p-2 rounded-lg">
                            <User className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-800">
                                Profile Information
                            </h3>
                            <p className="text-sm text-gray-500">
                                Your account details
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                value={profile.name}
                                readOnly
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                value={profile.email}
                                readOnly
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Role
                            </label>
                            <input
                                type="text"
                                value={profile.role}
                                readOnly
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700"
                            />
                        </div>
                    </div>
                </div>

                {/* Change Password */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-yellow-500 text-white p-2 rounded-lg">
                            <Lock className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-800">
                                Change Password
                            </h3>
                            <p className="text-sm text-gray-500">
                                Update your account password
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Current Password */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Current Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="currentPassword"
                                value={form.currentPassword}
                                onChange={handleChange}
                                placeholder="Enter current password"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? (
                                    <EyeOff className="w-4 h-4" />
                                ) : (
                                    <Eye className="w-4 h-4" />
                                )}
                            </button>
                        </div>

                        {/* New Password */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                New Password
                            </label>
                            <input
                                type={showNewPassword ? "text" : "password"}
                                name="newPassword"
                                value={form.newPassword}
                                onChange={handleChange}
                                placeholder="Enter new password"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setShowNewPassword(!showNewPassword)
                                }
                                className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
                            >
                                {showNewPassword ? (
                                    <EyeOff className="w-4 h-4" />
                                ) : (
                                    <Eye className="w-4 h-4" />
                                )}
                            </button>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm New Password
                            </label>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm new password"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                                className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="w-4 h-4" />
                                ) : (
                                    <Eye className="w-4 h-4" />
                                )}
                            </button>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium mt-2 transition"
                        >
                            <Lock className="w-4 h-4" /> Update Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
