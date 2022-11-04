import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../views/layouts/MainLayout";
import Home from "../views/pages/home";
import Users from "../views/pages/users";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route path="/" exact={"true"} element={<Home />} />
					<Route path="/users" element={<Users />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
