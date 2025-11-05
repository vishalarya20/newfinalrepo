const UserLoginForm = () => {
    return (
        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                </label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                        📧
                    </span>
                    <input
                        type="email"
                        placeholder="user@company.com"
                        className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-3 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                </label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                        🔒
                    </span>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-3 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 rounded-lg transition"
            >
                Sign In as User
            </button>
        </form>
    );
};

export default UserLoginForm