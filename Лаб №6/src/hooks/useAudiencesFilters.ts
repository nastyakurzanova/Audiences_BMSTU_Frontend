import {useDispatch, useSelector} from 'react-redux';
import {updateAudiences, updateQuery} from "../store/audiencesSlice";

export function useAudiencesFilters() {
	const audiences = useSelector(state => state.audiences.audiences);
	const query = useSelector(state => state.audiences.query);
	
	console.log("audiences",audiences);
	const dispatch = useDispatch()

	const setAudiences = (value) => {
		dispatch(updateAudiences(value))
	}

	const setQuery = (value) => {
		dispatch(updateQuery(value))
	}

	return {
		audiences,
		setAudiences,
		query,
		setQuery
	};
}