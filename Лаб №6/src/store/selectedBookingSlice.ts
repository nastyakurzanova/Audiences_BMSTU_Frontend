import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	booking: undefined
};

const selectedBookingSlice = createSlice({
	name: 'selectedBooking',
	initialState: initialState,
	reducers: {
		updateBooking(state, action) {
			state.booking = action.payload
		}
	}
})

export const {updateBooking} = selectedBookingSlice.actions;

export default selectedBookingSlice.reducer;