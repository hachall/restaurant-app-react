// DUMMY VENUE DATA
import venues from './venues'
import menus from './menus'
const ROOT_URL = "https://fncflnxl03.execute-api.eu-west-2.amazonaws.com/testing"
const proxyurl = "https://cors-anywhere.herokuapp.com/"

export const FETCH_VENUES = 'FETCH_VENUES';
export function setVenues() {
  // TODO: Api call! For now, simulate a DB
  const promise = fetch(`${proxyurl}${ROOT_URL}/get-venues`, {headers: {'Access-Control-Allow-Origin': '*'}})
    .then(response => response.json())
    .then((data => {
      console.log(data)
      return JSON.parse(data.body)
    }))

    return {
      type: FETCH_VENUES,
      payload: promise
    }
}

export const FETCH_VENUE = 'FETCH_VENUE';
export function fetchVenue(venueid, typeid) {
  const promise = fetch(`${proxyurl}${ROOT_URL}/get-venue?venueid=${venueid}&typeid=${typeid}`, {headers: {'Access-Control-Allow-Origin': '*'}})
    .then(response => response.json())
    .then((data => {
      return [JSON.parse(data.body)]
    }))

    return {
      type: FETCH_VENUE,
      payload: promise
    }
}


export const FETCH_MENU = 'FETCH_MENU';
export function fetchMenu(venueid, typeid) {
  const promise = fetch(`${proxyurl}${ROOT_URL}/get-menu?venueid=${venueid}&typeid=${typeid}`, {headers: {'Access-Control-Allow-Origin': '*'}})
    .then(response => response.json())
    .then((data => {
      return JSON.parse(data.body)
    }))

    return {
      type: FETCH_MENU,
      payload: promise
    }
}


export const EMPTY_MENU = 'EMPTY_MENU';
export function emptyMenu(venueid, typeid) {

    return {
      type: EMPTY_MENU,
      payload: []
    }
}

export const TOGGLE_MAP = 'TOGGLE_MAP';
export function toggleMap() {

    return {
      type: TOGGLE_MAP
    }
}
