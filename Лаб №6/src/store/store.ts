import {configureStore} from "@reduxjs/toolkit";

// import spareReducer from "./selectedAudiencesSlice"
import audiencesReducer from "./selectedAudiencesSlice"
// import draftOrderReducer from "./draftBookingSlice"
import draftBookingReducer from "./draftBookingSlice"
import authReducer from "./authSlice"
// import ordersReducer from "./bookingSlice"
import bookingReducer from "./bookingSlice"
// import sparesReducer  from "./audiencesSlice"
import audiencesReduser  from "./audiencesSlice"
export default configureStore({
	reducer: {
		booking: bookingReducer,
		selectedAudiences: audiencesReducer,
		// selectedSpare: spareReducer,
		// spares: sparesReducer,
		audiences:audiencesReduser,
		// draftOrder: draftOrderReducer,
		draftBooking:draftBookingReducer,
		// orders: ordersReducer,
		user: authReducer
	}
});