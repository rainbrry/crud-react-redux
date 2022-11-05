import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../views/layouts/MainLayout";
import Home from "../views/pages/home";
import Users from "../views/pages/users";
import Login from "../views/pages/auth/Login";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<MainLayout />}>
					<Route path="/" exact={"true"} element={<Home />} />
					<Route path="/users" element={<Users />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
