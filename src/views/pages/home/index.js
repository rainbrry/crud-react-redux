import axios from "axios";
import React, { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		async function fetchData() {
			await axios
				.get("http://localhost:5000/users")
				.then((res) => console.log(res.data));
		}

		fetchData();
	}, []);

	return (
		<div className="w-full p-4 bg-cyan-400 text-white">
			<h3>Hello</h3>
		</div>
	);
}
