import { combineReducers } from "redux";
import { LOGIN, LATESTCALENDAR } from "./actionTypes";

const initialState = {
  isLoggedIn: false
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state.session,
        ...action.value
      };
    case LATESTCALENDAR:
      return {
        ...state,
        calendar_id: action.value
      };
    default:
      return state;
  }
};

const appReducer = combineReducers({
  session
});

export default appReducer;
