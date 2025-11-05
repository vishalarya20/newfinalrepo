import { X } from "lucide-react";

/* Reusable Modal */
const Modal = ({ title, onClose, children }) => (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
                <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold text-gray-800 mb-1">{title}</h2>
            {children}
        </div>
    </div>
);

export default Modal