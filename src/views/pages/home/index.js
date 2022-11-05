import React from "react";

export default function Home() {
	return (
		<div className="w-full p-4 bg-cyan-400 text-white">
			<h3>Hello</h3>

			<div className="p-10">
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg"
				>
					Login
				</button>
				<button
					type="submit"
					className="bg-red-500 text-white px-4 py-2 rounded shadow-lg"
				>
					Logout
				</button>
			</div>
		</div>
	);
}
