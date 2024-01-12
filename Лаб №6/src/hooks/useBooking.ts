import {useDispatch, useSelector} from 'react-redux';
import {pageChanged, pageSizeChanged, totalCountChanged} from "../store/bookingSlice";

export function useBooking() {
	const queryPageIndex = useSelector(state => state.booking.queryPageIndex);
	const queryPageSize = useSelector(state => state.booking.queryPageSize);
	const totalCount = useSelector(state => state.booking.totalCount);

	const dispatch = useDispatch()

	const setBookingPage = (value) => {
		dispatch(pageChanged(value))
	}

	const setBookingPageSize = (value) => {
		dispatch(pageSizeChanged(value))
	}

	const setBookingPageTotalCount = (value) => {
		dispatch(totalCountChanged(value))
	}

	return {
		queryPageIndex,
		queryPageSize,
		totalCount,
		setBookingPage,
		setBookingPageSize,
		setBookingPageTotalCount
	};
}