import { ADD_TO_BASKET, REMOVE_FROM_BASKET} from '../actions';

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


function add_item(basket, item) {
  let newBasket = {...basket}

  if (Object.keys(item).length == 0) {
    return newBasket
  }

  newBasket.total += item.price

  if (newBasket.items.hasOwnProperty(item.name)) {
    newBasket.items[item.name].num = newBasket.items[item.name].num + 1;
  } else {
    newBasket.items[item.name] = {price: item.price, num: 1}
  }

  return newBasket
};


function remove_item(basket, item) {
  let newBasket = {...basket}

  if (Object.keys(item).length == 0) {
    return newBasket
  }

  if (newBasket.items.hasOwnProperty(item.name)) {

    if (newBasket.items[item.name].num == 1) {
      delete newBasket.items[item.name]
    } else {
      newBasket.items[item.name].num -= 1
    }

    newBasket.total -= item.price
  }

  return newBasket
}







