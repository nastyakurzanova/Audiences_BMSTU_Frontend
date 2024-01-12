import {useDispatch, useSelector} from 'react-redux';
import {updateBooking} from "../store/selectedBookingSlice";

export function useSelectedBooking() {
	const booking = useSelector(state => state.selectedLesson.lesson);

	const dispatch = useDispatch()

	const setBooking = (value) => {
		dispatch(updateBooking(value))
	}

	return {
		booking,
		setBooking
	};
}