// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";

// Pages
import Login from "./pages/auth/Login";
import AdminDashboard from "./pages/AdminDashboard";
import LiveCalls from "./pages/LiveCalls"
import Reports from "./pages/Reports";
import Numbers from "./pages/Numbers";
import Extensions from "./pages/Extensions"
import BlockNumbers from "./pages/BlockNumbers";
import ActivityLogs from "./pages/ActivityLogs";
import UserProfile from "./pages/UserProfile";
import RingGroups from "./pages/RingGroups";

function App() {
	return (
		<Router>
			<Routes>
				{/* Without Layout */}
				<Route path="/login" element={<Login />} />

				{/* With Layout */}
				<Route element={<Layout />}>
					<Route path="/" element={<AdminDashboard />} />
					<Route path="/calls/live" element={<LiveCalls />} />
					<Route path="/reports" element={<Reports />} />
					<Route path="/numbers" element={<Numbers />} />
					<Route path="/numbers/block" element={<BlockNumbers />} />
					<Route path="/extensions" element={<Extensions />} />
					<Route path="/logs/activity" element={<ActivityLogs />} />
					<Route path="/user/profile/:id" element={<UserProfile />} />
					<Route path="/groups/ring" element={<RingGroups />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
