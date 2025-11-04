import {
  Phone,
  PhoneIncoming,
  PhoneMissed,
  Clock,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const AdminDashboard = () => {
  const weeklyData = [
    { day: "Mon", received: 95, missed: 10 },
    { day: "Tue", received: 98, missed: 8 },
    { day: "Wed", received: 92, missed: 7 },
    { day: "Thu", received: 120, missed: 14 },
    { day: "Fri", received: 100, missed: 8 },
    { day: "Sat", received: 80, missed: 6 },
    { day: "Sun", received: 65, missed: 5 },
  ];

  const pieData = [
    { name: "United States", value: 53 },
    { name: "Canada", value: 19 },
    { name: "United Kingdom", value: 12 },
    { name: "Other", value: 16 },
  ];

  const COLORS = ["#3b82f6", "#22d3ee", "#8b5cf6", "#f59e0b"];

  const cards = [
    {
      title: "Total Calls",
      value: "1,284",
      icon: <Phone className="text-blue-500" />,
      change: "+8%",
    },
    {
      title: "Received Calls",
      value: "678",
      icon: <PhoneIncoming className="text-green-500" />,
      change: "+10%",
    },
    {
      title: "Missed Calls",
      value: "78",
      icon: <PhoneMissed className="text-red-500" />,
      change: "-3%",
    },
    {
      title: "Total Duration",
      value: "248h 35m",
      icon: <Clock className="text-yellow-500" />,
      change: "+15%",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Admin Dashboard
      </h2>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{card.title}</p>
              <h3 className="text-2xl font-semibold">{card.value}</h3>
            </div>
            <div className="flex flex-col items-end">
              {card.icon}
              <span
                className={`text-xs mt-1 ${
                  card.change.startsWith("-")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {card.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-sm lg:col-span-2">
          <h3 className="font-medium mb-2 text-gray-700">
            Weekly Call Analytics
          </h3>
          <p className="text-xs text-gray-400 mb-4">
            Last 7 days performance overview
          </p>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="received"
                stroke="#22c55e"
                fill="#bbf7d0"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="missed"
                stroke="#ef4444"
                fill="#fecaca"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>Total Calls: 678</span>
            <span>Success Rate: 89.7%</span>
            <span>Avg per Day: 97</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-medium mb-4 text-gray-700">
            Calls by Destination
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
