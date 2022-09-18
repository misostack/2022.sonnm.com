import { CONFIG } from "@config/global.config";
const COOKIE_PREFIX = CONFIG.COOKIE_PREFIX;
export const setCookie = (cname, cvalue, exdays) => {
  if (exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();

    document.cookie =
      `${COOKIE_PREFIX}_${cname}` + "=" + cvalue + ";" + expires + ";path=/";
  } else {
    document.cookie = `${COOKIE_PREFIX}_${cname}` + "=" + cvalue + ";path=/";
  }
};

export const getCookie = (cname) => {
  let name = `${COOKIE_PREFIX}_${cname}` + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const deleteCookie = (cname) => {
  let name = `${COOKIE_PREFIX}_${cname}` + "=";
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
