import {
    Phone,
    PhoneIncoming,
    PhoneMissed,
    Clock,
    PhoneCall,
    Volume2,
    Mic,
    PhoneOff
} from "lucide-react";

function LiveCalls() {
    // Explicit color map for Tailwind (avoids dynamic class issues)
    const colorMap = {
        blue: "bg-blue-500 text-white",
        green: "bg-green-500 text-white",
        red: "bg-red-500 text-white",
        yellow: "bg-yellow-500 text-white",
    };
    const cards = [
        {
            title: "Active Calls",
            value: "20",
            icon: <Phone className="w-6 h-6" />,
            bg: "blue",
        },
        {
            title: "Completed",
            value: "40",
            icon: <PhoneIncoming className="w-6 h-6" />,
            bg: "green",
        },
        {
            title: "Missed",
            value: "78",
            icon: <PhoneMissed className="w-6 h-6" />,
            bg: "red",
        },
        {
            title: "Avg Duration",
            value: "0:00",
            icon: <Clock className="w-6 h-6" />,
            bg: "yellow",
        },
    ];

    const liveCalls = [
        {
            caller: "+1 (555) 123-4567",
            agent: "John Smith",
            extension: "101",
            duration: "3027:54",
            status: "Active",
        },
        {
            caller: "+1 (555) 234-5678",
            agent: "Sarah Wilson",
            extension: "102",
            duration: "3030:41",
            status: "Active",
        },
        {
            caller: "+1 (555) 345-6789",
            agent: "Emily Davis",
            extension: "105",
            duration: "3025:18",
            status: "Active",
        },
        {
            caller: "+1 (555) 456-7890",
            agent: "Tom Brown",
            extension: "107",
            duration: "3032:32",
            status: "Active",
        },
        {
            caller: "+1 (555) 567-8901",
            agent: "David Lee",
            extension: "110",
            duration: "3026:47",
            status: "Active",
        },
        {
            caller: "+49 30 901820",
            agent: "Patricia Taylor",
            extension: "120",
            duration: "3032:21",
            status: "Active",
        },
    ];

    return (
        <>
            <div className="p-2 bg-gray-50 min-h-screen">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Live Calls
                </h2>
                <p className="text-sm text-gray-600 mb-6">Real-time monitoring of active calls</p>

                {/* Top Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="bg-white rounded-xl shadow-lg p-5 flex items-center justify-between hover:shadow-sm transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-xl ${colorMap[card.bg]}`}>
                                    {card.icon}
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">{card.title}</p>
                                    <h3 className="text-md font-semibold text-gray-800">
                                        {card.value}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 mt-6 w-full shadow-lg hover:shadow-sm">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-6">
                        <PhoneCall className="text-green-600 w-6 h-6" />
                        <h2 className="text-gray-800 text-xl font-semibold">Live Calls</h2>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-gray-700 border-separate border-spacing-y-1">
                            <thead>
                                <tr className="bg-gray-50 text-left text-gray-700">
                                    <th className="py-3 px-4">Caller</th>
                                    <th className="py-3 px-4">Agent</th>
                                    <th className="py-3 px-4">Extension</th>
                                    <th className="py-3 px-4">Duration</th>
                                    <th className="py-3 px-4">Status</th>
                                    <th className="py-3 px-4 text-center">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {liveCalls.map((call, idx) => (
                                    <tr
                                        key={idx}
                                        className="bg-white border border-gray-200 hover:bg-gray-50 transition"
                                    >
                                        <td className="py-2 px-4 flex items-center gap-2">
                                            <PhoneCall className="text-green-500 w-4 h-4" />
                                            <span>{call.caller}</span>
                                        </td>
                                        <td className="py-2 px-4 font-medium text-gray-800">
                                            {call.agent}
                                        </td>
                                        <td className="py-2 px-4">{call.extension}</td>
                                        <td className="py-2 px-4">{call.duration}</td>
                                        <td className="py-2 px-4">
                                            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                {call.status}
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md transition">
                                                    <Volume2 className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md transition">
                                                    <Mic className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 bg-red-50 hover:bg-red-100 text-red-500 rounded-md transition">
                                                    <PhoneOff className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveCalls