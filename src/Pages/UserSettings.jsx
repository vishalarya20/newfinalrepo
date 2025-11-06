import { useState } from "react";
import { Upload, Trash2, Save } from "lucide-react";

const UeserSettings = () => {
    const [logo, setLogo] = useState("/logo.png"); // default logo
    const [companyInfo, setCompanyInfo] = useState({
        name: "",
        phone: "+1 234 567 8900",
        primaryEmail: "info@company.com",
        supportEmail: "support@company.com",
        website: "https://www.company.com",
        timezone: "America/New_York",
    });

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setLogo(url);
        }
    };

    const handleDeleteLogo = () => {
        setLogo(null);
    };

    const handleChange = (e) => {
        setCompanyInfo({ ...companyInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Settings Saved:", companyInfo);
        alert("Settings saved successfully!");
    };

    return (
        <div className="p-2 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                System Settings
            </h2>
            <p className="text-gray-500 mb-8">
                Configure your system preferences and branding
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Company Logo */}
                <div className="bg-white shadow-sm rounded-xl p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-4">Company Logo</h3>

                        {logo ? (
                            <div className="relative mb-4">
                                <img
                                    src={logo}
                                    alt="Company Logo"
                                    className="rounded-lg w-full h-40 object-contain bg-gray-50 border"
                                />
                                <button
                                    onClick={handleDeleteLogo}
                                    className="absolute top-2 right-2 bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full transition"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <div className="w-full h-40 flex items-center justify-center bg-gray-100 border border-dashed rounded-lg text-gray-400 mb-4">
                                No logo uploaded
                            </div>
                        )}

                        <label
                            htmlFor="logo-upload"
                            className="cursor-pointer flex items-center justify-center gap-2 border border-dashed border-gray-300 text-gray-600 hover:border-sky-400 hover:text-sky-600 py-3 rounded-lg text-sm transition"
                        >
                            <Upload className="w-4 h-4" /> Replace logo
                            <input
                                type="file"
                                id="logo-upload"
                                accept="image/*"
                                onChange={handleLogoChange}
                                className="hidden"
                            />
                        </label>
                        <p className="text-xs text-gray-400 mt-2">PNG, JPG up to 5MB</p>
                    </div>
                </div>

                {/* Company Information */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-sm rounded-xl p-6"
                >
                    <h3 className="font-semibold text-gray-700 mb-6">
                        Company Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter company name"
                                value={companyInfo.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Primary Phone Number
                            </label>
                            <input
                                type="text"
                                name="phone"
                                value={companyInfo.phone}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Primary Email
                            </label>
                            <input
                                type="email"
                                name="primaryEmail"
                                value={companyInfo.primaryEmail}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Support Email
                            </label>
                            <input
                                type="email"
                                name="supportEmail"
                                value={companyInfo.supportEmail}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Website
                            </label>
                            <input
                                type="text"
                                name="website"
                                value={companyInfo.website}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Timezone
                            </label>
                            <input
                                type="text"
                                name="timezone"
                                value={companyInfo.timezone}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 outline-none text-sm"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                        >
                            <Save className="w-4 h-4" /> Save Settings
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UeserSettings;
