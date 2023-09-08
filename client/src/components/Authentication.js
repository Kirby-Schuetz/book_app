// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
// 	name: "user",
// 	initialState: { user: null, token: null },
// 	reducers: {
// 		login: (state, action) => {
// 			const payload = action.payload;
// 			state.user = payload.username;
// 			state.token = payload.token;
// 		},
// 		logout: (state) => {
// 			state.user = null;
// 			state.token = null;
// 		},
// 	},
// });

// // Exporting actions from the authSlice
// export const { login } = authSlice.actions;

// // Export the reducer as the default export
// export default authSlice.reducer;

// export const currentUser = (state) => state.user.user;
// export const currentToken = (state) => state.user.token;