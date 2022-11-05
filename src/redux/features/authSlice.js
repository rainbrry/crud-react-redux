import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (data) => {
	const response = await axios.post("http://localhost:8001/login", data);
	return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
	await axios.get("http://localhost:8001/logout");
	return true;
});

const authSlice = createSlice({
	name: "authUser",
	initialState: { isLogin: false, token: null, user: null, role: null },
	extraReducers: {
		[login.fulfilled]: (state, action) => {
			state.isLogin = true;
			state.token = action.payload.token;
			state.user = action.payload.fullname;
			state.role = action.payload.role;
		},
		[logout.fulfilled]: (state, action) => {
			state.isLogin = false;
			state.token = null;
		},
	},
});

export default authSlice.reducer;
