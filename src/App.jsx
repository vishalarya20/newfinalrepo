// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";

// Pages
import Login from "./pages/auth/Login";
import AdminDashboard from "./Pages/AdminDashboard";
import LiveCalls from "./Pages/LiveCalls"
import Reports from "./Pages/Reports";
import Numbers from "./Pages/Numbers";
import Extensions from "./Pages/Extensions"
import BlockNumbers from "./Pages/BlockNumbers";
import ActivityLogs from "./Pages/ActivityLogs";
import UserProfile from "./Pages/UserProfile";
import RingGroups from "./Pages/RingGroups";

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
