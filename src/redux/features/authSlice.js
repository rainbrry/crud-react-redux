import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (data) => {
	const response = await axios.post("http://localhost:8001/login", data);
	return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
	const response = await axios.post("http://localhost:8001/logout");
	return response;
});

const authEntity = createEntityAdapter({
	selectId: (auth) => auth.id,
});

const authSlice = createSlice({
	name: "authUser",
	initialState: authEntity.getInitialState(),
	extraReducers: {
		[login.fulfilled]: (state, action) => {
			authEntity.setAll(state, action.payload);
		},
		[logout.fulfilled]: (state, action) => {
			authEntity.removeAll(state);
		},
	},
});

export const { setLogin } = authSlice.actions;
export default authSlice.reducer;
