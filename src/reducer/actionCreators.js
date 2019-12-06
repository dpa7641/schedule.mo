import { LOGIN, LATESTCALENDAR } from "./actionTypes";

export const userLogin = value => ({
  type: LOGIN,
  value
});
//para el ultimo calendario utilizado y recuperar en la pagina de home
export const latestCalendar = value => ({
  type: LATESTCALENDAR,
  value
});
