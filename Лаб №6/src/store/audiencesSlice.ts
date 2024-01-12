import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	audiences: [],
	query: ""
};

const modalSlice = createSlice({
	name: 'audiences',
	initialState: initialState,
	reducers: {
		updateAudiences(state, action) {
			state.audiences = action.payload
		},
		updateQuery(state, action) {
			state.query = action.payload
		}
	}
})

export const {updateAudiences, updateQuery} = modalSlice.actions;

export default modalSlice.reducer;