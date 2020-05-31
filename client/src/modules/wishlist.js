import api from "../lib/api";


const initialstate =[];


export default function wishlist(state = initialstate, action) {
  switch (action.type) {
    case "FETCH_WISHLIST":
      let wishlist;
      if(state.length===0){
        fetch(`${api}/wishlist${action.payload}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          }
        }).then(async (response) => {
          if (response.status === 200) {
            wishlist = await response.json();
            console.log(wishlist);
            return [...wishlist];
          } else {
            wishlist = [];
            return   [...wishlist];
          }
        });
      }
      return wishlist;
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "SET_NEW_LIST":
      return action.payload;
    case "REMOVE_PRODUCT":
      const newState = state.filter((item) => item.pk !== action.payload);
      return newState;
    default:
      return state;
  }
}
