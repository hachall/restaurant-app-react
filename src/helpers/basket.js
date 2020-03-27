export function add_item(basket, item) {
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


export function remove_item(basket, item) {
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
