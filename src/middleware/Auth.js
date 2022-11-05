import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Auth({ children }) {
	const { auth } = useSelector((state) => state);
	const redirect = useNavigate();

	useEffect(() => {
		if (!auth.isLogin) redirect("/login");
	}, [auth.isLogin, redirect]);

	return children;
}
