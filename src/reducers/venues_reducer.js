import { FETCH_VENUES, FETCH_VENUE} from '../actions';

const venuesReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }

  // Handle Venues Actions
  switch (action.type) {
    case FETCH_VENUES:
      return action.payload;
    case FETCH_VENUE:
      return [action.payload]
    default:
      return state;
  }

};
export default venuesReducer;
