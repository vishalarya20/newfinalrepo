// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";

// Pages
import Login from "./Pages/auth/Login";
import AdminDashboard from "./Pages/AdminDashboard";
import LiveCalls from "./Pages/LiveCalls"
import Reports from "./Pages/Reports";
import Numbers from "./Pages/Numbers";
import Extensions from "./Pages/Extensions"
import BlockNumbers from "./Pages/BlockNumbers";
import ActivityLogs from "./Pages/ActivityLogs";
import UserProfile from "./Pages/UserProfile";
import RingGroups from "./Pages/RingGroups";
import Notifications from "./Pages/Notifications";
import TenantManagement from "./Pages/TenantManagement"
import MasterRateDeck from "./Pages/MasterRateDeck"
import TopUpHistory from "./Pages/TopUpHistory"
import UserRoleManagement from "./Pages/UserRoleManagement";
import Infrastructure from "./Pages/Infrastructure"

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
					<Route path="/notifications" element={<Notifications />} />
					<Route path="/manage/tenant" element={<TenantManagement />} />
					<Route path="/rate-deck/master" element={<MasterRateDeck />} />
					<Route path="/history/top-up" element={<TopUpHistory />} />
					<Route path="/manage/user/role" element={<UserRoleManagement />} />
					<Route path="/infrastructure" element={<Infrastructure />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
