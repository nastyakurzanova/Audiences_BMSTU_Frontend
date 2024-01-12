import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	audiences: undefined,
};

const selectedaudiencesSlice = createSlice({
	name: 'selectedAudiences',
	initialState: initialState,
	reducers: {
		updateAudiences(state, action) {
			state.audiences = action.payload
		}
	}
})

export const {updateAudiences} = selectedaudiencesSlice.actions;

export default selectedaudiencesSlice.reducer;