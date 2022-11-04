import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ open, setOpen }) {
	const redirect = useNavigate();

	const auth = "Hello";

	const logout = async () => {
		try {
			await axios.post("logout");
			redirect("/");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="navbar shadow-lg bg-base-100 sticky top-0">
			<div className="flex-1">
				<button
					className="btn btn-square btn-ghost"
					onClick={() => setOpen(!open)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-5 h-5 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</button>
			</div>
			<div className="flex-none mr-10">
				<div className="dropdown dropdown-end">
					<div className="flex items-center" onClick={() => console.log(1)}>
						<label tabIndex={0} className="m-1 capitalize peer cursor-pointer">
							{auth.fullname}
						</label>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 peer-focus:rotate-90 duration-200"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
					<ul
						onClick={logout}
						tabIndex={0}
						className="dropdown-content menu hover:overflow-hidden focus:overflow-hidden shadow-lg bg-slate-200 opacity-80 rounded-box w-52"
					>
						<li>
							<div>Logout</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
