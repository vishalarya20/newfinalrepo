// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layouts/Layout";

// Pages
import Login from "./pages/auth/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
	const isAuthenticated = true; // change to false to test

	return (
		<Router>
			<Routes>
				{/* AUTH PAGES — visible only when NOT logged in */}
				<Route
					path="/login"
					element={
						!isAuthenticated ? <Login /> : <Navigate to="/" replace />
					}
				/>
				

				{/* DASHBOARD PAGES — visible only when logged in */}
				{isAuthenticated ? (
					<Route element={<Layout />}>
						<Route path="/" element={<AdminDashboard />} />
					</Route>
				) : (
					<Route path="*" element={<Navigate to="/login" replace />} />
				)}
			</Routes>
		</Router>
	);
}

export default App;
