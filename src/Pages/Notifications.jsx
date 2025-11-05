import { useState } from "react";
import { Mail, Bell, MessageSquare, Megaphone, Send } from "lucide-react";

const Notifications = () => {
    const [activeTab, setActiveTab] = useState("email");

    const tabs = [
        { id: "email", label: "Email", icon: <Mail className="w-4 h-4" /> },
        { id: "popup", label: "Pop-up", icon: <Bell className="w-4 h-4" /> },
        { id: "sms", label: "SMS", icon: <MessageSquare className="w-4 h-4" /> },
        { id: "promo", label: "Promotional", icon: <Megaphone className="w-4 h-4" /> },
    ];

    return (
        <div className="p-2 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Notifications</h2>
            <p className="text-sm text-gray-600 mb-6">
                Send notifications to users via multiple channels
            </p>

            {/* Target Users */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">
                    Target Users
                </label>
                <div className="border border-gray-200 rounded-lg p-3 text-gray-700 text-sm">
                    All Users
                </div>
            </div>

            {/* Tabs */}
            <div className="flex bg-gray-100 rounded-lg mb-4 overflow-hidden">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`bg-gray-100 flex items-center justify-center gap-2 flex-1 py-2 text-sm font-medium transition ${activeTab === tab.id
                                ? "bg-gray-300 shadow text-gray-800"
                                : "text-gray-500 hover:bg-gray-300"
                            }`}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl shadow-sm p-4">
                {activeTab === "email" && <EmailForm />}
                {activeTab === "popup" && <PopupForm />}
                {activeTab === "sms" && <SmsForm />}
                {activeTab === "promo" && <PromoForm />}
            </div>
        </div>
    );
};

/* ---------------- EMAIL ---------------- */
const EmailForm = () => (
    <form className="space-y-4">
        <div>
            <label className="block text-sm text-gray-700 mb-1">Email Subject</label>
            <input
                type="text"
                placeholder="Enter email subject"
                className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
        </div>
        <div>
            <label className="block text-sm text-gray-700 mb-1">Email Message</label>
            <textarea
                placeholder="Enter email message"
                rows="4"
                className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
        </div>
        <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 rounded-lg"
        >
            <Send className="w-4 h-4" /> Send Email to All Users
        </button>
    </form>
);

/* ---------------- POPUP ---------------- */
const PopupForm = () => (
    <form className="space-y-4">
        <div>
            <label className="block text-sm text-gray-700 mb-1">Pop-up Title</label>
            <input
                type="text"
                placeholder="Enter pop-up title"
                className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
        </div>
        <div>
            <label className="block text-sm text-gray-700 mb-1">Pop-up Message</label>
            <textarea
                placeholder="Enter pop-up message"
                rows="3"
                className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
        </div>

        <div className="flex items-center justify-between text-sm">
            <label className="text-gray-700">
                Persistent (Requires Acknowledgment)
            </label>
            <input type="checkbox" className="w-5 h-5 accent-indigo-600" />
        </div>

        <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 rounded-lg"
        >
            <Send className="w-4 h-4" /> Send Pop-up to All Users
        </button>
    </form>
);

/* ---------------- SMS ---------------- */
const SmsForm = () => (
    <form className="space-y-4">
        <div>
            <label className="block text-sm text-gray-700 mb-1">SMS Message</label>
            <textarea
                maxLength={160}
                placeholder="Enter SMS message (max 160 characters)"
                rows="3"
                className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
            <p className="text-xs text-yellow-600 bg-yellow-50 p-2 rounded mt-2">
                SMS notifications will be sent to registered mobile numbers only. Carrier charges may apply.
            </p>
        </div>

        <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 rounded-lg"
        >
            <Send className="w-4 h-4" /> Send SMS to All Users
        </button>
    </form>
);

/* ---------------- PROMOTIONAL ---------------- */
const PromoForm = () => (
    <form className="space-y-4">
        <div>
            <label className="block text-sm text-gray-700 mb-1">Promotion Type</label>
            <select className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none">
                <option>Information</option>
                <option>Discount</option>
                <option>Announcement</option>
            </select>
        </div>

        <div>
            <label className="block text-sm text-gray-700 mb-1">Promotion Title</label>
            <input
                type="text"
                placeholder="Enter promotion title"
                className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
        </div>

        <div>
            <label className="block text-sm text-gray-700 mb-1">Promotion Message</label>
            <textarea
                placeholder="Enter promotion message"
                rows="3"
                className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
        </div>

        <p className="text-xs text-blue-600 bg-blue-50 p-2 rounded">
            Promotional notifications will appear on user dashboards and can be dismissed.
        </p>

        <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 rounded-lg"
        >
            <Send className="w-4 h-4" /> Send Promotion to All Users
        </button>
    </form>
);

export default Notifications;
