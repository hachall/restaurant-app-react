import { ADD_TO_BASKET, REMOVE_FROM_BASKET} from '../actions';
import { add_item } from '../helpers/basket'
import { remove_item } from '../helpers/basket'

let basket_template = {
  venue: "",
  total: 0.00,
  items: {}
}

const basketReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return basket_template;
  }

  // Handle Venues Actions
  switch (action.type) {
    case ADD_TO_BASKET:
      return add_item(state, action.payload);
    case REMOVE_FROM_BASKET:
      return remove_item(state, action.payload);
    default:
      return state;
  }

};
export default basketReducer;








