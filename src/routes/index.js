import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Guest from "../middleware/Guest";
import Auth from "../middleware/Auth";
import MainLayout from "../views/layouts/MainLayout";
import Home from "../views/pages/home";
import Users from "../views/pages/users";
import Login from "../views/pages/auth/Login";
import Error403 from "../views/pages/error/Error403";
import Error404 from "../views/pages/error/Error404";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/login"
					element={
						<Guest>
							<Login />
						</Guest>
					}
				/>

				<Route path="/403" element={<Error403 />} />
				<Route path="/404" element={<Error404 />} />
				<Route path="/" element={<MainLayout />}>
					<Route
						path="/"
						exact={"true"}
						element={
							<Auth>
								<Home />
							</Auth>
						}
					/>
					<Route
						path="/users"
						element={
							<Auth>
								<Users />
							</Auth>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
