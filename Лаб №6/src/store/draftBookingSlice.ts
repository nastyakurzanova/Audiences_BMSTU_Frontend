import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	booking: undefined
};

const draftBookingSlice = createSlice({
	name: 'draftBooking',
	initialState: initialState,
	reducers: {
		updateBooking(state, action) {
			state.booking = action.payload
		},
		updateAudiences(state, action){
			state.booking.audiences = action.payload
		}
	}
})

export const {updateBooking, updateAudiences} = draftBookingSlice.actions;

export default draftBookingSlice.reducer;