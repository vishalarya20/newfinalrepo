// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";

// Pages
import Login from "./pages/auth/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
	return (
		<Router>
			<Routes>
				{/* Without Layout */}
				<Route path="/login" element={<Login />} />

				{/* With Layout */}
				<Route element={<Layout />}>
					<Route path="/" element={<AdminDashboard />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
