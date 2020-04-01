import { FETCH_VENUES, FETCH_VENUE, SORT_BY_PRICE_LOW, SORT_BY_PRICE_HIGH, SORT_BY_DISTANCE} from '../actions';
import { sort_by } from '../helpers/sorting'


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
      return action.payload;
    case SORT_BY_PRICE_LOW:
      return sort_by(state, "price_low", {})
    case SORT_BY_PRICE_HIGH:
      return sort_by(state, "price_high", {})
    case SORT_BY_DISTANCE:
      return sort_by(state, "distance", action.payload)
    default:
      return state;
  }

};
export default venuesReducer;
