import {useDispatch, useSelector} from 'react-redux';
import {updateAudiences} from "../store/selectedAudiencesSlice";

export function useAudiences() {
	const audiences = useSelector(state => state.selectedAudiences.audiences);

	const dispatch = useDispatch()

	const setAudiences= (value) => {
		dispatch(updateAudiences(value))
	}

	return {
		audiences,
		setAudiences
	};
}