import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
	const response = await axios.get("http://localhost:8001/users");
	return response.data;
});

export const addUser = createAsyncThunk("users/addProduct", async (data) => {
	const response = await axios.post("http://localhost:8001/user", data);
	return response.data.data;
});

export const updateUser = createAsyncThunk("users/updateUser", async (data) => {
	const response = await axios.patch(
		`http://localhost:8001/user/${data.id}`,
		data
	);
	return response.data.data;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
	await axios.delete(`http://localhost:8001/user/${id}`);
	return id;
});

const userEntity = createEntityAdapter({
	selectId: (user) => user._id,
});

const usersSlice = createSlice({
	name: "users",
	initialState: userEntity.getInitialState(),
	extraReducers: {
		[getUsers.fulfilled]: (state, action) => {
			userEntity.setAll(state, action.payload);
		},
		[addUser.fulfilled]: (state, action) => {
			userEntity.addOne(state, action.payload);
		},
		[updateUser.fulfilled]: (state, action) => {
			userEntity.updateOne(state, {
				id: action.payload._id,
				changes: action.payload,
			});
		},
		[deleteUser.fulfilled]: (state, action) => {
			userEntity.removeOne(state, action.payload);
		},
	},
});

export const usersSelector = userEntity.getSelectors((state) => state.users);
export default usersSlice.reducer;
