/* Reusable Input Field */
const Input = ({ label, ...props }) => (
    <div>
        {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
        <input
            {...props}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
        />
    </div>
);

export default Input