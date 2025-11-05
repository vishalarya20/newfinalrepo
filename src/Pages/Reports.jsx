import { useState } from "react";
import { Filter, Download, CalendarDays, Play } from "lucide-react";

function Reports() {
    const [reportType, setReportType] = useState("Call Reports");
    const [dateRange, setDateRange] = useState("Last 7 Days");
    const reports = [
        {
            id: "RPT-001",
            date: "Nov 2, 2024",
            totalCalls: 284,
            inbound: 156,
            outbound: 128,
            totalDuration: "48h 24m",
            avgDuration: "10:12",
            totalCost: "$145.80",
        },
        {
            id: "RPT-002",
            date: "Nov 1, 2024",
            totalCalls: 312,
            inbound: 178,
            outbound: 134,
            totalDuration: "52h 15m",
            avgDuration: "10:02",
            totalCost: "$168.45",
        },
        {
            id: "RPT-003",
            date: "Oct 31, 2024",
            totalCalls: 298,
            inbound: 162,
            outbound: 136,
            totalDuration: "49h 38m",
            avgDuration: "10:00",
            totalCost: "$152.30",
        },
        {
            id: "RPT-004",
            date: "Oct 30, 2024",
            totalCalls: 276,
            inbound: 148,
            outbound: 128,
            totalDuration: "45h 12m",
            avgDuration: "9:49",
            totalCost: "$138.90",
        },
        {
            id: "RPT-005",
            date: "Oct 29, 2024",
            totalCalls: 265,
            inbound: 142,
            outbound: 123,
            totalDuration: "43h 28m",
            avgDuration: "9:51",
            totalCost: "$132.75",
        },
        {
            id: "RPT-006",
            date: "Oct 28, 2024",
            totalCalls: 289,
            inbound: 159,
            outbound: 130,
            totalDuration: "47h 55m",
            avgDuration: "9:57",
            totalCost: "$148.20",
        },
        {
            id: "RPT-007",
            date: "Oct 27, 2024",
            totalCalls: 302,
            inbound: 168,
            outbound: 134,
            totalDuration: "50h 42m",
            avgDuration: "10:04",
            totalCost: "$156.85",
        },
    ];
    return (
        <>
            <div className="p-2 bg-gray-50 min-h-screen">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Reports & Analytics
                </h2>
                <p className="text-sm text-gray-600 mb-6">Comprehensive call reports and usage analytics</p>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-sm p-6 border border-gray-100 mt-6 w-full">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-6">
                        <Filter className="text-purple-600 w-5 h-5" />
                        <h2 className="text-gray-800 text-lg font-semibold">Filter Reports</h2>
                    </div>

                    {/* Filter Controls */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                        {/* Report Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Report Type
                            </label>
                            <select
                                value={reportType}
                                onChange={(e) => setReportType(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            >
                                <option>Call Reports</option>
                                <option>Usage Reports</option>
                                <option>Cost Analysis</option>
                                <option>Extension Reports</option>
                            </select>
                        </div>

                        {/* Date Range */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Date Range
                            </label>
                            <select
                                value={dateRange}
                                onChange={(e) => setDateRange(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            >
                                <option>Today</option>
                                <option>Yesterday</option>
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                                <option>This Month</option>
                                <option>Custom Range</option>
                            </select>
                        </div>

                        {/* Start Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Start Date
                            </label>
                            <input
                                type="date"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                placeholder="dd-mm-yyyy"
                            />
                        </div>

                        {/* End Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                End Date
                            </label>
                            <input
                                type="date"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                placeholder="dd-mm-yyyy"
                            />
                        </div>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex flex-wrap items-center gap-3">
                        <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow transition">
                            <Download className="w-4 h-4" />
                            Generate Report
                        </button>

                        <button className="flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                            <Download className="w-4 h-4" />
                            Export PDF
                        </button>

                        <button className="flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                            <Download className="w-4 h-4" />
                            Export CSV
                        </button>

                        <button className="flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                            <Download className="w-4 h-4" />
                            Export Excel
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl  shadow-lg hover:shadow-sm p-6 border border-gray-100 mt-6 w-full">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2">
                            <CalendarDays className="text-indigo-600 w-6 h-6" />
                            <h2 className="text-gray-800 text-xl font-semibold">
                                Daily Call Reports
                            </h2>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-lg font-medium">
                            7 days
                        </span>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-gray-700 border-separate border-spacing-y-1">
                            <thead>
                                <tr className="text-left bg-gray-50 text-gray-700">
                                    <th >Report ID</th>
                                    <th >Date</th>
                                    <th >Total Calls</th>
                                    <th >Inbound</th>
                                    <th >Outbound</th>
                                    <th >Total Duration</th>
                                    <th >Avg Duration</th>
                                    <th >Total Cost</th>
                                    <th >Recording</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reports.map((report) => (
                                    <tr
                                        key={report.id}
                                        className="bg-white border border-gray-200 hover:bg-gray-50 transition"
                                    >
                                        <td className="text-blue-600 font-medium hover:underline cursor-pointer">
                                            {report.id}
                                        </td>
                                        <td className="">{report.date}</td>
                                        <td className="">{report.totalCalls}</td>
                                        <td className="">
                                            <span className="inline-flex items-center justify-center text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                                {report.inbound}
                                            </span>
                                        </td>
                                        <td className="py-2 px-4">
                                            <span className="inline-flex items-center justify-center text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                                {report.outbound}
                                            </span>
                                        </td>
                                        <td className="">{report.totalDuration}</td>
                                        <td className="">{report.avgDuration}</td>
                                        <td className="">{report.totalCost}</td>
                                        <td className="">
                                            <button className="flex items-center gap-1 text-blue-600 font-medium hover:underline">
                                                <Play className="w-4 h-4" />
                                                Play
                                            </button>
                                        </td>
                                        <td className="py-2 px-4 text-center">
                                            <button className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md transition">
                                                <Download className="w-4 h-4" />
                                            </button>
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

export default Reports