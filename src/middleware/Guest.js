import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Guest({ children }) {
	const { auth } = useSelector((state) => state);
	const redirect = useNavigate();

	useEffect(() => {
		if (auth.isLogin) redirect("/");
	}, [auth.isLogin, redirect]);

	return children;
}
