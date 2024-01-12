import {useDispatch, useSelector} from 'react-redux';
import {
	updateBooking,
	updateAudiences
} from "../store/draftBookingSlice";
import axios from "axios";
import {useToken} from "./useToken";
import bookingSlice from '../store/bookingSlice';

export function useDraftBookinfg() {

	const {access_token} = useToken()

	const booking = useSelector(state => state.draftBooking.booking);

	const dispatch = useDispatch()

	const setBooking = (value) => {
		dispatch(updateBooking(value))
	}

	const setAudiences = (value) => {
		dispatch(updateAudiences(value))
	}

	const saveBooking = async () => {
		try {

			await axios(`http://localhost:8000/api/booking/${bookingSlice.name}/update/`, {
				method: "PUT",
				headers: {
					"Content-type": "application/json; charset=UTF-8",
					'authorization': access_token
				},
				data: bookingSlice
			})

		} catch (e) {
			console.log(e)
		}
	}

	return {
		booking,
		setBooking,
		setAudiences,
		saveBooking
	};
}