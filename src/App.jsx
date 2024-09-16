import DetailPage from "page/app/DetailPage";
import HomePage from "page/app/HomePage";
import LoginPage from "page/auth/LoginPage";
import SignupPage from "page/auth/SignupPage";
import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Routes>
			{/* Auth routes  */}
			<>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
			</>
			{/* App routes  */}
			<>
				<Route path="/" element={<HomePage />} />
				<Route path="/detail/:slug" element={<DetailPage />} />
			</>
		</Routes>
	);
};

export default App;
