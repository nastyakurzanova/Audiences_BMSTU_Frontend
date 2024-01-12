import {createSlice} from "@reduxjs/toolkit"

const initialState= {
	queryPageIndex: 0,
	queryPageSize: 5	,
	totalCount: 0,
};

const bookingSlice = createSlice({
	name: 'booking',
	initialState: initialState,
	reducers: {
		pageChanged(state, action) {
			state.queryPageIndex = action.payload
		},
		pageSizeChanged(state, action) {
			state.queryPageSize = action.payload
		},
		totalCountChanged(state, action) {
			state.totalCount = action.payload
		}
	}
})

export const {pageChanged, pageSizeChanged, totalCountChanged} = bookingSlice.actions;

export default bookingSlice.reducer;