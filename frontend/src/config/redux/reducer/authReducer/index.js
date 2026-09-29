import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../action/authAction";

const initialState = {
	user: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	loggedIn: false,
	message: "",
	profileFetched: false,
	connections: [],
	connectionRequest: [],
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: () => initialState,
		handleLoginUser: (state) => {
			state.message = "Hello";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
				state.message = "Knocking the door...";
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				((state.isLoading = false), (state.isError = false));
				state.isSuccess = true;
				state.loggedIn = true;
				state.message = "Login successful";
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload.message;
			})
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
				state.message = "Registering you...";
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.loggedIn = true;
				state.message = "Registration successful";
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload.message;
			});
	},
});

export default authSlice.reducer;
