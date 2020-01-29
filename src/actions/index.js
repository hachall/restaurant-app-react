// DUMMY VENUE DATA
import venues from './venues'
import menus from './menus'

export const FETCH_VENUES = 'FETCH_VENUES';
export function setVenues() {
  // TODO: Api call! For now, simulate a DB

  return {
    type: FETCH_VENUES,
    payload: venues
  }
}

export const FETCH_VENUE = 'FETCH_VENUE';
export function fetchVenue(id) {
  // MOVE TO API
  // const promise = fetch(`${ROOT_URL}/${id}?key=${API_KEY}`)
  //   .then(response => response.json());
  // console.log(venues.find(v => v.id == 1))
  const venue = venues.find(v => v.id == id);
  return {
    type: FETCH_VENUE,
    payload: venue
}; }


export const FETCH_MENU = 'FETCH_MENU';
export function fetchMenu(id) {
  // MOVE TO API
  // const promise = fetch(`${ROOT_URL}/${id}?key=${API_KEY}`)
  //   .then(response => response.json());
  // console.log(venues.find(v => v.id == 1))
  const menu = menus.find(m=> m.restaurant_id == id);
  return {
    type: FETCH_MENU,
    payload: menu
}; }
