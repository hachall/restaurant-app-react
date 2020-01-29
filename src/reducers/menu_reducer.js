import {FETCH_MENU} from '../actions';

const menuReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }

  // Handle Venues Actions
  switch (action.type) {
    case FETCH_MENU:
      return action.payload;
    default:
      return state;
  }

};
export default menuReducer;
