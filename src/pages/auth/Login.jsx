import { useState } from "react";
import UserLoginForm from "../../Components/auth/UserLoginForm";
import AdminLoginForm from "../../Components/auth/AdminLoginForm";


const Login = () => {
    const [activeTab, setActiveTab] = useState("user"); // "user" or "admin"

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-400 to-blue-600">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
                {/* Logo Section */}
                <div className="flex flex-col items-center mb-12">
                    <div className="bg-purple-100 p-4 rounded-xl mb-3">
                        <span className="text-2xl font-bold text-purple-600">⚡</span>
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-800">Free Switch Portal</h1>
                    <p className="text-gray-500 text-sm">Multi-Tenant Free Switch Management</p>
                </div>

                {/* Tabs */}
                <div className="flex border border-gray-200 rounded-lg overflow-hidden mb-6">
                    <button
                        onClick={() => setActiveTab("user")}
                        className={`flex-1 py-2 text-center font-medium transition ${activeTab === "user"
                                ? "bg-sky-500 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        User Login
                    </button>
                    <button
                        onClick={() => setActiveTab("admin")}
                        className={`flex-1 py-2 text-center font-medium transition ${activeTab === "admin"
                                ? "bg-sky-500 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        Admin Login
                    </button>
                </div>

                {/* Forms */}
                {activeTab === "user" ? <UserLoginForm /> : <AdminLoginForm />}
            </div>
        </div>
    );
};


export default Login;
