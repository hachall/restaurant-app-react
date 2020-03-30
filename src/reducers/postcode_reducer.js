import { POST_POSTCODE } from '../actions';

const postcodeReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }

  // Handle Venues Actions
  switch (action.type) {
    case POST_POSTCODE:
      return action.payload;
    default:
      return state;
  }

};
export default postcodeReducer;
